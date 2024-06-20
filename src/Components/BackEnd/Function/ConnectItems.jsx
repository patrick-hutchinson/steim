import React from "react";
import CSS from "../../css/function.module.css";

export default function ConnectItems(props) {
  let data = props.data;
  React.useEffect(() => {
    console.log("connectItems;", data);
  }, [data]);

  function handleConnectorMouseEnter(e) {
    document.querySelector(`.${CSS.connectorOptions}`).classList.add(CSS.visible);
  }
  function handleConnectorMouseLeave(e) {
    document.querySelector(`.${CSS.connectorOptions}`).classList.remove(CSS.visible);
  }

  let Categories = Object.keys(data).map((category, index) => {
    return (
      <li key={index} onClick={handleFilterClick}>
        {`${category} `}
      </li>
    );
  });

  function handleFilterClick(e) {
    e.target.classList.toggle(CSS.selected);

    let selectedMarker = e.target.querySelector(`.${CSS.selectedMarker}`);

    if (selectedMarker) {
      selectedMarker.remove();
    } else {
      selectedMarker = document.createElement("span");
      selectedMarker.classList.add(CSS.selectedMarker);
      selectedMarker.innerText = "●";
      e.target.prepend(selectedMarker);
    }
  }

  return (
    // Container
    <div className={CSS.connectItemsContainer}>
      {/* Item Two */}
      <div className={`${CSS.item} ${CSS.itemOne}`}>
        <div className={CSS.searchContainer}>
          <button>search</button>
          <input type="search" readOnly></input>
        </div>
        <div className={CSS.filteringSystem}>
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>Kind:</span>
            <ul className={CSS.filterContainer}>{Categories}</ul>
          </div>
          <br />
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>From:</span>
            <span>
              <input type="date"></input>
            </span>
            <br />
            <span className={CSS.title}>To:</span>
            <span>
              <input type="date"></input>
            </span>
          </div>
          <br />
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>Uploaded:</span>
            <span>
              <input type="date"></input>
            </span>
            <br />
            <span className={CSS.title}>To:</span>
            <span>
              <input type="date"></input>
            </span>
          </div>
          <div className={CSS.resultContainer}></div>
        </div>
      </div>

      {/* Connecter */}
      <div
        className={`${CSS.connector} ${CSS.item}`}
        onMouseEnter={handleConnectorMouseEnter}
        onMouseLeave={handleConnectorMouseLeave}
      >
        <button>
          <div className={CSS.innerText}>→</div>
        </button>
        <div className={CSS.connectorOptions}>
          <div className={CSS.entryContainer}>
            <ul className={CSS.filterContainer}>
              <li>
                <button>
                  <div className={CSS.innerText}>→</div>
                </button>
                invented
              </li>
              <br />
              <li>
                <button>
                  <div className={CSS.innerText}>→</div>
                </button>
                manufactured
              </li>
              <br />
              <li>
                <button>
                  <div className={CSS.innerText}>→</div>
                </button>
                collaborated with
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Item Two */}
      <div className={`${CSS.item} ${CSS.itemTwo}`}>
        <div className={CSS.searchContainer}>
          <button>search</button>
          <input type="search" readOnly></input>
        </div>
        <div className={CSS.filteringSystem}>
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>Kind:</span>
            <ul className={CSS.filterContainer}>
              <li>Artists </li>
              <li>Instrument </li>
              <li>Performances </li>
              <li>Organization </li>
              <li>Venue </li>
              <li>Project </li>
              <li>Software </li>
              <li>Hardware</li>
            </ul>
          </div>
          <br />
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>From:</span>
            <span>
              <input type="date"></input>
            </span>
            <br />
            <span className={CSS.title}>To:</span>
            <span>
              <input type="date"></input>
            </span>
          </div>
          <br />
          <div className={CSS.entryContainer}>
            <span className={CSS.title}>Uploaded:</span>
            <span>
              <input type="date"></input>
            </span>
            <br />
            <span className={CSS.title}>To:</span>
            <span>
              <input type="date"></input>
            </span>
          </div>
          <div className={CSS.resultContainer}></div>
        </div>
      </div>
    </div>
  );
}
