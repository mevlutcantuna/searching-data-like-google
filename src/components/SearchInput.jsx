import "../styles/SearchInput.scss";

const SearchInput = ({ propValues }) => {
  const { handleChangeSearch, searchValue } = propValues;

  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => handleChangeSearch(e)}
        className="search__input"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
