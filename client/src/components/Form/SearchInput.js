// searchInput.js

import { useState, useEffect } from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (values.keyword.length >= 3) {
        try {
          const { data } = await axios.get(
            `/api/v1/product/search-suggestions?keyword=${values.keyword}`
          );
          setSuggestions(data.suggestions);
        } catch (error) {
          console.log(error);
        }
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [values.keyword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success bg-white" type="submit" style={{color:"#2874f0"}}>
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
