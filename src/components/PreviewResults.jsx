import "../styles/PreviewResults.scss";
import ResultCard from "./ResultCard";
import { useHistory } from "react-router-dom";

const PreviewResults = ({ searchedValues }) => {
  const firstThreeResults = searchedValues?.slice(0, 3);
  const history = useHistory();

  const showMoreButton = () => {
    history.push("/search");
  };

  return (
    <div className="preview-results">
      {firstThreeResults.map((card, index) => (
        <ResultCard key={index} card={card} />
      ))}
      <div className="preview-results__more">
        <span onClick={showMoreButton}>Show More...</span>
      </div>
    </div>
  );
};

export default PreviewResults;
