import React, { useState } from "react";
import Table from "./Table";

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default 5 items per page

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="itemsPerPage">Rows per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          style={{ marginLeft: "5px", padding: "5px" }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={data.length}>All</option>
        </select>
      </div>

      <Table data={currentData} />

      <div style={{ marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: currentPage === index + 1 ? "#28a745" : "#f0f0f0",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
