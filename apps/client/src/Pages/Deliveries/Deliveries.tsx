import { DataTable } from "./data-table";
import { columns } from "./columns";
import React, { useState } from 'react';

function createData(
  orderNumber: number,
  orderId: number,
  orderLocation: string,
  orderStatus: string
) {
  return { orderNumber, orderId, orderLocation, orderStatus };
}

const rows = [
  createData(
    1,
    72839445627,
    "1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8",
    "Shipped"
  ),
  createData(
    2,
    22734442800,
    "200 University Ave W, Waterloo, ON N2L 3G1",
    "Out for delivery"
  ),
  createData(
    3,
    35628200374,
    "2325 Rue de l'Université, Québec, QC G1V 0A6",
    "Delivered"
  ),
  createData(4, 44812018975, "New Haven, CT 06520, United States", "Delivered"),
  createData(
    5,
    43453530374,
    "3142 Rue Guy, Québec, QC H42 9V7",
    "Pending"
  ),
];

export default function Deliveries() {
  const [filterStatus, setFilterStatus] = useState('');

  const filteredRows = rows.filter((row) => {
    return row.orderStatus.toLowerCase().includes(filterStatus.toLowerCase());
  });

  return (
    <div className="container mx-auto py-10">
      <input
        type="text"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        placeholder="Filter by status"
        className="mb-4 p-2 border rounded"
      />
      <DataTable columns={columns} data={filteredRows} />
    </div>
  );
}
