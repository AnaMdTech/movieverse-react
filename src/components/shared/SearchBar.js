import SearchIcon from "../../assets/images/search.svg";
function SearchBar({ searchTerm, setSearchTerm, searchMovies }) {
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        searchMovies(searchTerm);
      }}
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
    </form>
  );
}

export default SearchBar;
