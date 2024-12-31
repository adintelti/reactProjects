import React from "react";

const Table = ({ data }) => {
  return (
    <table border="1" cellPadding="5" cellSpacing="0" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.country}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
