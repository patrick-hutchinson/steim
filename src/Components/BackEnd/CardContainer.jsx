import React, { useState, useEffect } from "react";

export default function CardContainer(props) {
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    // When filterData changes, update the filteredNames state
    if (Array.isArray(props.filterData)) {
      setFilteredNames(props.filterData.map((item) => item.name));
    } else {
      setFilteredNames([]);
    }
  }, [props.filterData]);

  const data = props.data;

  // Helper function to render categories dynamically
  const renderCategory = (categoryName, connections, index) => {
    return (
      <div className="itemContainer" key={`${categoryName}-${index}`}>
        <span className="cardSectionTitle">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}:</span>
        <ul className={`${categoryName}List`}>
          {connections[categoryName]?.map((item, idx) => (
            <li key={`${categoryName}-${idx}`}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  // Main component
  const Cards = Object.keys(data).flatMap((category) => {
    return data[category].map((item, index) => {
      // Check if the item should be displayed based on the filterData
      if (filteredNames.length > 0 && !filteredNames.includes(item.name)) {
        return null;
      }

      const connections = item.connections || {}; // Ensure connections is defined
      const connectionAmount = Object.values(connections).reduce((acc, curr) => acc + curr.length, 0);

      return (
        <div className="card" key={`${category}-${index}`}>
          <span className="categoryTag">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          <span className="itemName">{item.name}</span>
          <ul className="quickInfo">
            <li>{connectionAmount} Links</li>
            <li>Last Edited?</li>
            <li>By?</li>
          </ul>
          {Object.keys(connections).map((connectionCategory, idx) =>
            renderCategory(connectionCategory, connections, idx)
          )}
        </div>
      );
    });
  });

  return (
    <div className="section cardSection">
      <div className="sectionTitle">Edit Items</div>
      <div className="cardContainer">{Cards}</div>
    </div>
  );
}
