import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import { data } from "./data/mockData.json";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedValues, setSearchedValues] = useState([]);

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getSearchValues = (str) => {
    const searchStr = str.toLowerCase();
    let filteredArray = data?.filter((item) => {
      return (
        item[0].toLowerCase().includes(searchStr) ||
        item[1].toLowerCase().includes(searchStr) ||
        item[2].toLowerCase().includes(searchStr) ||
        item[3].toLowerCase().includes(searchStr) ||
        item[4].toLowerCase().includes(searchStr) ||
        item[5].toLowerCase().includes(searchStr)
      );
    });
    if (searchStr !== "") {
      return setSearchedValues(filteredArray);
    }
  };
  //console.log(searchedValues);

  useEffect(() => {
    if (searchValue.trim() === "") {
      return setSearchedValues([]);
    }
  }, [searchValue]);

  const propValues = {
    searchValue,
    handleChangeSearch,
    searchedValues,
    getSearchValues,
    setSearchedValues,
    setSearchValue,
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home propValues={propValues} />
          </Route>
          <Route exact path="/search">
            <Search propValues={propValues} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
