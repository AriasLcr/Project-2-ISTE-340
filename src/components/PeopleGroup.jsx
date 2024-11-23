/**
 * PeopleGroup component displays a group of people with pagination controls.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display above the group.
 * @param {Array} props.obj - The array of people objects to display.
 *
 * @returns {JSX.Element} The rendered PeopleGroup component.
 */

import { useState } from "react";
import PeopleCard from "./PeopleCard";
import { TablePagination } from "@mui/material";

const PeopleGroup = ({ title, obj }) => {
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(6); // Rows per page

  // Paginate the data
  const paginatedData = obj.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  return (
    <article>
      <h1 className="text-4xl font-bold mb-6 text-orange-500">{title}</h1>

      {/* Paginated People Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
        {paginatedData.map((p, i) => (
          <div className="m-5" key={i}>
            <PeopleCard key={p.username} {...p} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <TablePagination
        component="div"
        count={obj.length} // Total number of items
        page={page} // Current page
        onPageChange={handleChangePage} // Page change handler
        rowsPerPage={rowsPerPage} // Rows per page
        onRowsPerPageChange={handleChangeRowsPerPage} // Rows per page change handler
        rowsPerPageOptions={[6, 12, 18]} // Options for rows per page
      />
    </article>
  );
};

export default PeopleGroup;
