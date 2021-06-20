import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

const prevButton = (
  <button type="button" className="prev-button" aria-label="Previous">
    <p className="text-style text-pumpkin-primary">Prev</p>
  </button>
);

const nextButton = (
  <button type="button" className="next-button" aria-label="Next">
    <p className="text-style text-pumpkin-primary">Next</p>
  </button>
);

const Pagination = (props) => {
  const { pageCount, onPageChange, forcePage } = props;

  return (
    <div>
      <div>
        <div>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount || 0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={({ selected }) => onPageChange(selected + 1)}
            containerClassName={"pagination"}
            previousLinkClassName={"link"}
            nextLinkClassName={"link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
