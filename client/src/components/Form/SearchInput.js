import { useState, useEffect,useRef } from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

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
      const { data } = await axios.get(`/api/v1/product/search/${values.keyword}`);
      setValues({ ...values, results: data, keyword: "" }); // Clear the search box
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuggestionClick = (slug) => {
    navigate(`/product/${slug}`);
    setValues({ ...values, keyword: "" }); // Clear the search box
    setSuggestions([]); // Hide suggestions after selecting
  };
  const handleClickOutside = (e) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

         
        <button className="btn btn-outline-success bg-white" type="submit" style={{ color: "#2874f0" }}>
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list" ref={suggestionsRef}>
          {suggestions.map((suggestion) => (
            <li key={suggestion._id} onClick={() => handleSuggestionClick(suggestion.slug)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
