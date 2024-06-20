import React, { useState, useEffect } from "react";

import Header from "../Components/BackEnd/Header";
import Intro from "../Components/BackEnd/Intro";
import CardContainer from "../Components/BackEnd/CardContainer";
import EditItems from "../Components/BackEnd/EditItems";
import Searchbar from "../Components/Searchbar";

export default function BackEnd(props) {
  let data = props.data;
  let [query, setQuery] = useState("");
  let [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    filterData();
  }, [query, data]);

  let handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  let filterData = () => {
    if (!data) return;

    if (!query) {
      setFilteredData(data);
      return;
    }

    let results = Object.keys(data).reduce((acc, category) => {
      if (data[category] && Array.isArray(data[category])) {
        let filteredItems = data[category].filter((item) => {
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.connections &&
              Object.values(item.connections)
                .flat()
                .some((connection) => connection.name.toLowerCase().includes(query.toLowerCase())))
          );
        });
        return [...acc, ...filteredItems];
      }
      return acc;
    }, []);

    setFilteredData(results);
  };

  return (
    <div className="backEnd">
      <Header />
      <div className="content">
        <Intro />
        <Searchbar onSearch={handleSearch} />
        <EditItems data={data} />
        <CardContainer data={data} filterData={filteredData} onSearch={handleSearch} />
      </div>
    </div>
  );
}
