export default function FlipButton() {
  function handleFlipClick() {
    // Flipping the Page

    // let transitionDuration = document.querySelector(".flip-box-inner").style.transition
    const element = document.querySelector(".flip-box-inner");
    const computedStyle = window.getComputedStyle(element);
    let transitionDuration = parseInt(computedStyle.transitionDuration) * 1000;

    document.querySelector(".flip-box-inner").classList.toggle("rotate");
    document.querySelector(".flip-box").style.transform = "translate(1vw, 1vh)";
    document.querySelector(".flip-box").classList.add("flipping");

    setTimeout(() => {
      document.querySelector(".flip-box").classList.remove("flipping");
    }, transitionDuration + 100);
  }
  return (
    <>
      <div className="flipButton" onClick={handleFlipClick}>
        <span className="arrows">→←</span>
      </div>
    </>
  );
}
