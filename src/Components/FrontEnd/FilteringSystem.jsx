import React from "react";

export default function FilteringSystem(props) {
  let Artists = props.data.artists.map((artist, index) => {
    return (
      <li key={index} onMouseEnter={() => handleFiltering(artist)}>
        {artist.name}
      </li>
    );
  });
  let Instruments = props.data.instruments.map((instrument, index) => {
    return (
      <li key={index} onMouseEnter={() => handleFiltering(instrument)}>
        {instrument.name}
      </li>
    );
  });
  let Years = props.data.years.map((year, index) => {
    return (
      <li key={index} onMouseEnter={() => handleFiltering(year)}>
        {year.name}
      </li>
    );
  });

  function handleFiltering(item) {
    Object.entries(item.connections).forEach(([category, items]) => {
      if (items.length !== 0) {
        items.forEach((item) => {
          compareToGlobal(category, item);
        });
      }
    });

    function compareToGlobal(localCategory, localItem) {
      Object.entries(props.data).forEach(([category, items]) => {
        if (localCategory === category) {
          items.forEach((item) => {
            //Match the local item to the global item
            if (localItem.name === item.name) {
              // console.log(`there is a match between ${item.name} and ${localItem.name}`);
            }
          });
        }
      });
    }
  }

  return (
    <>
      <div className="contentList">
        <h3 className="contentList-heading">SELECTED HIGHTLIGHTS</h3>
      </div>
      <br />
      <div className="filteringSystem">
        <ul className="filtering-artists">
          <h3>Artists</h3>
          {Artists}
        </ul>
        <ul className="filtering-instruments">
          <h3>Instruments</h3>
          {Instruments}
        </ul>
        <ul className="filtering-years">
          <h3>Years</h3>
          {Years}
        </ul>
      </div>
    </>
  );
}
