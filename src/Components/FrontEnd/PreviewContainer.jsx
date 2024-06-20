import React, { useState, useEffect } from "react";

export default function PreviewContainer(props) {
  const [images, setImages] = useState(<img src="#" alt="No image available" />);

  useEffect(() => {
    if (props.hoveredFilter) {
      const newImages = props.hoveredFilter.events.map((event) =>
        event.img_urls.map((url, index) => <img key={index} src={url} />)
      );
      setImages(newImages);
    } else {
      setImages(<img src="#" />);
    }
  }, [props.hoveredFilter]);

  return (
    <div className="previewContainer">
      <img src="./src/assets/mat/img/01.jpg" />
      <div className="additionalContent">{images}</div>
    </div>
  );
}
