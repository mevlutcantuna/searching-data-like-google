import "../styles/Pagination.scss";
import ReactPaginate from "react-paginate";

const PaginationBar = ({ propValues, changeResultsPage }) => {
  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={Math.ceil(propValues.searchedValues.length / 6)}
        onPageChange={changeResultsPage}
        containerClassName="paginationButtons"
        previousLinkClassName="previousButton"
        nextLinkClassName="nextButton"
        disabledClassName="disableButton"
        activeClassName="activeButton"
      />
    </div>
  );
};

export default PaginationBar;
