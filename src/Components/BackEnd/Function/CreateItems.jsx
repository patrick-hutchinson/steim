import React from "react";
import CSS from "../../css/function.module.css";
import Searchbar from "../../Searchbar";
import CardContainer from "../CardContainer";

export default function CreateItems(props) {
  let data = props.data;

  let [itemType, setItemType] = React.useState("artist");

  // Unblock Container once the User selcts a Category
  function handleSelect(e) {
    setItemType(e.target.value);
    // Get the class name from the CSS modules object
    document.querySelector(`.${CSS.itemContainer}`).classList.remove(CSS.blocked);
  }

  const [imageSrcs, setImageSrcs] = React.useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrcs((prevImageSrcs) => [...prevImageSrcs, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  function textAreaAdjust(e) {
    e.target.style.height = "1px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  // Generate an entry spot for each category
  let entries = Object.keys(data).flatMap((category, index) => {
    return (
      <div className={CSS.entryContainer} key={index}>
        <span className={CSS.title}>{category}</span>
        <br />
        <span className={CSS.addContent}>
          <button>
            <div className={CSS.innerText}>+</div>
          </button>
          Link existing {category}
        </span>
      </div>
    );
  });

  return (
    <>
      <div className={CSS.createNew}>
        {/* Select Type of Item */}
        <label>
          Type:
          <select className={CSS.typeTag} required onChange={handleSelect}>
            {Object.keys(data).map((category, index) => {
              return (
                <option value={category} key={index}>
                  {category}
                </option>
              );
            })}
          </select>
        </label>

        {/* Name of Item */}
        <div className={CSS.artistName}>
          <input placeholder={"Type " + itemType + " name here"} required></input>
        </div>

        {/* ItemContainer */}
        <div className={`${CSS.itemContainer} ${CSS.blocked}`}>
          {/* Bio */}
          <div className={`${CSS.entryContainer} ${CSS.bio}`}>
            <span className={CSS.title}>Bio:</span>
            <textarea placeholder="type bio text here" onKeyUp={textAreaAdjust}></textarea>
          </div>

          <Searchbar />

          {entries}

          {/* Upload Media */}
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>Media:</span>
            <br />
            <span className={CSS.addContent}>
              <form method="post" action="#">
                <label className={CSS.mediaUpload}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById("file-input").click();
                    }}
                  >
                    <div className={CSS.innerText}>+</div>
                  </button>
                  Upload Images
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: "none" }} // Hides the file input
                  />
                </label>
              </form>
            </span>
          </div>

          {imageSrcs.map((src, index) => (
            <div className={CSS.thumbnailContainer} style={{ top: `${30 + index * 120}px` }} key={index}>
              <img src={src} alt={`Uploaded Thumbnail ${index + 1}`} className={CSS.thumbnail} />
              <div className={CSS.imageNumberContainer}>
                <span className={CSS.imageNumber}>{index}</span>
              </div>
            </div>
          ))}

          <button className={CSS.pushButton}>Push it to the Frontend!</button>
        </div>
      </div>
    </>
  );
}
