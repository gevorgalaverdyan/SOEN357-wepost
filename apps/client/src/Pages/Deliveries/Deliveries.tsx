import { DataTable } from "./data-table";
import { columns } from "./columns";

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
];

export default function Deliveries() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={rows} />
    </div>
  );
}
