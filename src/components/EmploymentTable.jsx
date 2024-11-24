/**
 * EmploymentTable component displays a searchable and paginated table of employment data.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.employmentData - The employment data to display.
 * @param {Array} props.employmentData.professionalEmploymentInformation - Array of employment information objects.
 * @param {string} props.employmentData.professionalEmploymentInformation[].employer - The employer name.
 * @param {string} props.employmentData.professionalEmploymentInformation[].degree - The degree associated with the employment.
 * @param {string} props.employmentData.professionalEmploymentInformation[].city - The city of the employment.
 * @param {string} props.employmentData.professionalEmploymentInformation[].title - The job title.
 * @param {string} props.employmentData.professionalEmploymentInformation[].startDate - The start date of the employment.
 *
 * @returns {JSX.Element} The EmploymentTable component.
 */

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  TablePagination,
} from "@mui/material";

const EmploymentTable = ({ employmentData }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page

  // Filter data based on search input
  const filteredData = employmentData.professionalEmploymentInformation.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  // Paginate filtered data
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="my-5">
        <h2> Employment Table </h2>
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
        fullWidth
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employer</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Start Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.employer}</TableCell>
                <TableCell>{row.degree}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.startDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length} // Total rows after filtering
        page={page} // Current page
        onPageChange={handleChangePage} // Page change handler
        rowsPerPage={rowsPerPage} // Rows per page
        onRowsPerPageChange={handleChangeRowsPerPage} // Rows per page change handler
        rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
      />
    </div>
  );
};

export default EmploymentTable;
