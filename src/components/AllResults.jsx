import ResultCard from "./ResultCard";
import "../styles/AllResults.scss";
import { useCallback, useEffect, useState } from "react";

const AllResults = ({ propValues, pageNumber, orderedName }) => {
  const { searchedValues } = propValues;
  const [orderedDisplayValues, setOrderedDisplayValues] = useState();

  const orderBy = useCallback(() => {
    const compareNames = (a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      }
    };

    const compareYears = (a, b) => {
      if (
        a[3].slice(a[3].length - 4, a[3].length) <
        b[3].slice(b[3].length - 4, b[3].length)
      ) {
        return -1;
      } else if (
        a[3].slice(a[3].length - 4, a[3].length) >
        b[3].slice(b[3].length - 4, b[3].length)
      ) {
        return 1;
      }
    };

    if (orderedName === "Name-Asc") {
      const orderedByNameAsc = searchedValues.sort(compareNames);
      return setOrderedDisplayValues([...orderedByNameAsc]);
    } else if (orderedName === "Name-Desc") {
      const orderedByNameDesc = searchedValues.sort(compareNames).reverse();
      return setOrderedDisplayValues([...orderedByNameDesc]);
    } else if (orderedName === "Year-Asc") {
      const orderedByYearAsc = searchedValues.sort(compareYears);
      return setOrderedDisplayValues([...orderedByYearAsc]);
    } else if (orderedName === "Year-Desc") {
      const orderedByYearDesc = searchedValues.sort(compareYears).reverse();
      return setOrderedDisplayValues([...orderedByYearDesc]);
    }
  }, [orderedName, searchedValues]);

  useEffect(() => {
    orderBy();
  }, [orderBy]);

  const cardsPerPage = 6;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayedResults = orderedDisplayValues?.slice(
    pagesVisited,
    pagesVisited + cardsPerPage
  );

  const initialResults = searchedValues.slice(
    pagesVisited,
    pagesVisited + cardsPerPage
  );

  return (
    <div className="all-results">
      {orderedName.trim() !== "" ? (
        <>
          {displayedResults?.map((card, index) => (
            <ResultCard key={index} card={card} />
          ))}
        </>
      ) : (
        <>
          {initialResults?.map((card, index) => (
            <ResultCard key={index} card={card} />
          ))}
        </>
      )}
    </div>
  );
};

export default AllResults;
