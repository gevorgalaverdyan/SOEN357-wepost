import React, { useState } from 'react';
import Select from 'react-select';
import { DataTable } from "./data-table";
import { columns } from "./columns";

function createData(
  orderNumber: number, 
  orderId: number, 
  orderLocation: string, 
  orderStatus: string) {
  return { orderNumber, orderId, orderLocation, orderStatus };
}

const rows = [
  createData(1, 72839445627, "1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8", "Pending"),
  createData(2, 22734442800, "200 University Ave W, Waterloo, ON N2L 3G1", "Pending"),
  createData(3, 35628200374, "2325 Rue de l'Université, Québec, QC G1V 0A6", "Shipped"),
  createData(4, 44812018975, "New Haven, CT 06520, United States", "Shipped"),
  createData(5, 43453530374, "3142 Rue Guy, Québec, QC H42 9V7", "Delivered"),
  createData(6, 23984692017, "212 Blvd Gouin, Québec, QC H4L 1M5", "Delivered"),
];

export default function Deliveries() {
  const [filterStatus, setFilterStatus] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleColumns, setVisibleColumns] = useState(['orderId', 'orderLocation', 'orderStatus']);

  const columnOptions = [
    { label: 'ID', value: 'orderId' },
    { label: 'Location', value: 'orderLocation' },
    { label: 'Status', value: 'orderStatus' },
  ];

  const handleColumnVisibilityChange = (selectedOptions) => {
    setVisibleColumns(selectedOptions.map(option => option.value));
  };

  const handleRowsPerPageChange = (e) => {
    const newRowsPerPage = Number(e.target.value);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); 
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1); 
  };

  const totalPages = Math.ceil(rows.filter(row => row.orderStatus.toLowerCase().includes(filterStatus.toLowerCase())).length / rowsPerPage);

  const filteredRows = rows
    .filter(row => row.orderStatus.toLowerCase().includes(filterStatus.toLowerCase()))
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between mb-4">
        <div className="w-full md:w-auto">
          <input
            type="text"
            value={filterStatus}
            onChange={handleFilterStatusChange}
            placeholder="Filter by status"
            className="p-2 border rounded"
          />
        </div>

        <Select
          options={columnOptions}
          isMulti
          closeMenuOnSelect={false}
          onChange={handleColumnVisibilityChange}
          value={columnOptions.filter(option => visibleColumns.includes(option.value))}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <DataTable columns={columns.filter(col => visibleColumns.includes(col.accessorKey))} data={filteredRows} />

      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="rows-per-page" className="mr-2">Rows per page:</label>
          <select
            id="rows-per-page"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="p-2 border rounded"
          >
            {[2, 4, 6].map(number => (
              <option key={number} value={number}>{number}</option>
            ))}
          </select>
        </div>

        <div>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border rounded mr-2"
          >
            {"<"}
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border rounded ml-2"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
