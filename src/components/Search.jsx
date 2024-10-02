import "./Search.css";

const Search = ({ search, setSearch }) => {
  return (
    <div className=" input-box">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder=" "
      />
      <label>Search for a country</label>
    </div>
  );
};

export default Search;
