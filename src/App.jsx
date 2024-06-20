import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FlipButton from "./Components/FlipButton.jsx";
import FrontEnd from "./Pages/FrontEnd.jsx";
import BackEnd from "./Pages/BackEnd.jsx";

import Layout from "./Components/Layout.jsx";

import CreateItems from "./Components/BackEnd/Function/CreateItems.jsx";
import ConnectItems from "./Components/BackEnd/Function/ConnectItems.jsx";

import Header from "./Components/FrontEnd/Header.jsx";
import Info from "./Components/FrontEnd/Info.jsx";

import LogoTitle from "./Components/FrontEnd/LogoTitle.jsx";

import BackEndCreateItems from "./Pages/BackEndCreateItems.jsx";
import BackEndConnectItems from "./Pages/BackEndConnectItems.jsx";

import STEIMData from "./assets/steim-archive.json";

function App() {
  let [data, setData] = React.useState(STEIMData);

  let Home = () => {
    return (
      <div className="homePage">
        <FrontEnd data={data} />
        <FlipButton />
        <BackEnd data={data} />
      </div>
    );
  };

  React.useEffect(() => {
    function perspectiveEffect() {
      let constrain = 2000;
      let mouseOverContainer = document.querySelector("body");
      let ex1Layer = document.querySelector(".flip-box");

      function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - box.height / 2) / constrain;
        let calcY = (x - box.x - box.width / 2) / constrain;

        return "perspective(100px) rotateX(" + calcX + "deg) rotateY(" + calcY + "deg) translate(1vw, 1vh)";
      }

      function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
      }

      mouseOverContainer.addEventListener("mousemove", (e) => {
        if (!ex1Layer.classList.contains("flipping")) {
          let xy = [e.clientX, e.clientY];
          let position = xy.concat([ex1Layer]);

          window.requestAnimationFrame(function () {
            transformElement(ex1Layer, position);
          });
        }
      });
    }
    perspectiveEffect();
  }, []);

  function getAudioVolume() {
    let audioOutput;
    let isLogging = false;
    let animationFrameId;

    const videos = document.querySelectorAll("#myVideo");
    videos.forEach((video) => {
      // Create a new AudioContext
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Create a MediaElementAudioSourceNode from the video element
      const source = audioContext.createMediaElementSource(video);

      // Create an AnalyserNode
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      // Connect the source to the analyser
      source.connect(analyser);

      // Connect the analyser to the destination (speakers)
      analyser.connect(audioContext.destination);

      // Function to log the audio loudness
      function logLoudness() {
        if (!isLogging) {
          cancelAnimationFrame(animationFrameId);
          return;
        }

        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        audioOutput = sum / bufferLength;
        console.log("Average loudness:", audioOutput);

        // Schedule the next log
        animationFrameId = requestAnimationFrame(logLoudness);

        // Apply the audio value to the variable font
        document.querySelector(".logotitle > .STEIMLogo").style.fontVariationSettings = `'wght' ${audioOutput * 8}`;
      }

      // Start logging the loudness when the video plays
      video.onplay = function () {
        isLogging = true;
        audioContext.resume().then(() => {
          logLoudness();
        });
      };

      // Stop logging the loudness when the video is paused
      video.onpause = function () {
        isLogging = false;
      };
    });
  }
  getAudioVolume();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/Backend" element={<BackEnd data={data} />}>
            <Route path="/Backend/CreateItems" element={<CreateItems data={data} />} />
            <Route path="/Backend/ConnectItems" element={<ConnectItems data={data} />} />
          </Route>
          <Route path="/Frontend" element={<FrontEnd data={data} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
