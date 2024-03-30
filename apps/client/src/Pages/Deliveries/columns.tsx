import { ColumnDef } from "@tanstack/react-table";

export type Delivery = {
  orderId: number;
  orderLocation: string;
  orderStatus: string;
};

export const columns: ColumnDef<Delivery>[] = [
  {
    accessorKey: "orderId",
    header: "Id",
  },
  {
    accessorKey: "orderLocation",
    header: "Location",
  },
  {
    accessorKey: "orderStatus",
    header: "Status",
  },
];
