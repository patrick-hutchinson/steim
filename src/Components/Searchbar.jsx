import React from "react";

export default function Searchbar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <form className="searchContainer" onSubmit={(e) => e.preventDefault()}>
      <button type="button" disabled>
        search
      </button>
      <input type="text" name="query" placeholder="for anything" value={query} onChange={handleChange} />
    </form>
  );
}
