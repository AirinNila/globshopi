"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Pagination from "../shared/Pagination"
import { FaEdit, FaPlus } from "react-icons/fa"

const products = [
  { id: "01", name: "Amazfit GTS 2", category: "Watch", price: "8,000", assignedTo: "Retailer #12" },
  { id: "02", name: "Apple iPhone 15", category: "Smartphone", price: "120,000", assignedTo: "Retailer #05" },
  { id: "03", name: "Samsung Galaxy S23", category: "Smartphone", price: "95,000", assignedTo: "Retailer #08" },
  { id: "04", name: "Sony WH-1000XM5", category: "Headphone", price: "35,000", assignedTo: "Retailer #03" },
  { id: "05", name: "MacBook Air M2", category: "Laptop", price: "155,000", assignedTo: "Retailer #07" },
  { id: "06", name: "Asus ROG Strix", category: "Laptop", price: "180,000", assignedTo: "Retailer #11" },
  { id: "07", name: "Apple iPad Pro", category: "Tablet", price: "95,000", assignedTo: "Retailer #02" },
  { id: "08", name: "Logitech MX Master 3S", category: "Mouse", price: "12,500", assignedTo: "Retailer #10" },
  { id: "09", name: "Razer BlackWidow V4", category: "Keyboard", price: "18,000", assignedTo: "Retailer #04" },
  { id: "10", name: "Canon EOS R7", category: "Camera", price: "165,000", assignedTo: "Retailer #06" },
  { id: "11", name: "Samsung 55'' QLED TV", category: "Television", price: "110,000", assignedTo: "Retailer #09" },
]
const ProductsTable = () => {
    return (
        <div className="p-6 lg:p-10">
            <div className="rounded-2xl border border-[#D1D1D680] bg-white p-4 shadow-sm">
            <div className="lg:flex my-3 items-center justify-between">
                  <h2 className="lg:text-lg font-semibold mb-4">Product Management</h2>
               {/* <Button className="flex items-center gap-2 bg-[#007AFF] text-white rounded-full px-4 py-2 hover:bg-[#0066dd]">
                           <FaPlus /> Add new Product
                          </Button> */}
            </div>
              <div className="overflow-hidden rounded-xl border-[#D1D1D680] ">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b-[#D1D1D680]">
                      <TableHead>ID</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right pr-10">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((retailer, idx) => (
                      <TableRow
                        key={idx}
                        className={cn(
                          "border-b border-b-[#D1D1D680] last:border-0",
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        )}
                      >
                        <TableCell className={'flex items-center gap-2 border-b-none'}>
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <span>{retailer.id}</span>
                        </TableCell>
                        <TableCell>{retailer.name}</TableCell>
                        <TableCell>{retailer.category}</TableCell>
                        <TableCell>{retailer.price}</TableCell>
                        <TableCell>
                          <span className="">
                            {retailer.assignedTo}
                          </span>
                        </TableCell>
                        <TableCell className="flex items-center justify-end gap-2">
                          <Button variant="ghost"
                        size="icon" className="bg-[#007AFF1A] rounded-full ">
                            <FaEdit />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-[#FF3B30] hover:text-red-600 bg-red-50  hover:bg-red-50 rounded-full"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
      
              {/* Pagination */}
      <Pagination/>
      
            </div>
          </div>
    );
};

export default ProductsTable;