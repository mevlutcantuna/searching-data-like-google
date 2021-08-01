import BigLogo from "../assets/images/big-logo.png";
import SearchInput from "../components/SearchInput";
import "../styles/Home.scss";
import SearchButton from "../components/SearchButton";
import PreviewResults from "../components/PreviewResults";

const Home = ({ propValues }) => {
  const { searchValue, searchedValues } = propValues;

  const submitForm = (e) => {
    e.preventDefault();
    propValues.getSearchValues(searchValue);
  };

  return (
    <div className="home">
      <div className="home__logo">
        <img alt="big-logo" src={BigLogo} />
        <div className="home__logo__text">Search web app</div>
      </div>
      <form className="home__form" onSubmit={submitForm}>
        <SearchInput propValues={propValues} />
        <SearchButton />
      </form>
      <div>
        {searchedValues.length > 0 && (
          <PreviewResults searchedValues={searchedValues} />
        )}
      </div>
    </div>
  );
};

export default Home;
