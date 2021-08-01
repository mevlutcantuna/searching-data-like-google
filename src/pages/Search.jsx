import "../styles/Search.scss";
import SmallLogo from "../assets/images/small-logo.png";
import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import AllResults from "../components/AllResults";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "../components/PaginationBar";
import OrderBy from "../components/OrderBy";

const Search = ({ propValues }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [orderedName, setOrderedName] = useState("");
  const history = useHistory();

  console.log(orderedName);

  const changePage = () => {
    propValues.setSearchedValues([]);
    propValues.setSearchValue("");
    history.push("/");
  };

  const changeResultsPage = ({ selected }) => {
    setPageNumber(selected);
  };

  const submitButton = (e) => {
    e.preventDefault();
    propValues.getSearchValues(propValues.searchValue);
  };

  const changeOrder = (orderName) => {
    setOrderedName(orderName);
  };

  return (
    <div className="search">
      <div className="search__left">
        <img onClick={changePage} src={SmallLogo} alt="small-logo" />
      </div>
      <div className="search__main">
        <form className="search__main__form" onSubmit={submitButton}>
          <SearchInput propValues={propValues} />
          <SearchButton />
        </form>
        {propValues.searchedValues.length > 0 && (
          <OrderBy changeOrder={changeOrder} />
        )}
        <div className="search__main__results">
          <AllResults
            orderedName={orderedName}
            pageNumber={pageNumber}
            propValues={propValues}
          />
        </div>
        <div>
          {propValues.searchedValues.length > 6 && (
            <Pagination
              propValues={propValues}
              pageNumber={pageNumber}
              changeResultsPage={changeResultsPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
