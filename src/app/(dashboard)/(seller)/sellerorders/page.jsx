"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaEdit, FaPlus } from "react-icons/fa";
import Pagination from "@/components/shared/Pagination";

const products = [
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "02",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "03",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "02",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "03",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "02",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "03",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "02",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "03",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "02",
    total: "8,000",
    status: "pending",
  },
  {
    id: "ORD1234",
    name: "Jenny Willson",
    Qty: "03",
    total: "8,000",
    status: "pending",
  },
];
const SellerOrders = () => {
  return (
    <div className="p-6 lg:p-10">
      <div className="rounded-2xl border border-[#D1D1D680] bg-white p-4 shadow-sm">
        <div className="lg:flex my-3 items-center justify-between">
          <h2 className="lg:text-lg font-semibold mb-4">Orders</h2>
          {/* <Button className="flex items-center gap-2 bg-[#007AFF] text-white rounded-full px-4 py-2 hover:bg-[#0066dd]">
                           <FaPlus /> Add new Product
                          </Button> */}
        </div>
        <div className="overflow-hidden rounded-xl border-[#D1D1D680] ">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 border-b-[#D1D1D680]">
                <TableHead>Order ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((retailer, idx) => (
                <TableRow
                  key={idx}
                  className={cn(
                    "border-b border-b-[#D1D1D680] last:border-0 ",
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  )}
                >
                  <TableCell
                    className={"flex items-center gap-2 border-b-none"}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span>{retailer.id}</span>
                  </TableCell>
                  <TableCell>{retailer.name}</TableCell>
                  <TableCell>{retailer.Qty}</TableCell>
                  <TableCell>৳{retailer.total}</TableCell>
                  <TableCell>
                    <span className="bg-[#ffb03027] text-[#FFB030] px-1 py-1 rounded-xl capitalize">
                      {retailer.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="xs"
                      className="rounded-full bg-[#007AFF] text-white px-4 py-1"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default SellerOrders;
