
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

const retailers = [
  { id: "01", name: "Jenny Wilson", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "02", name: "Brooklyn Simmons", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "03", name: "Esther Howard", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "04", name: "Devon Lane", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "05", name: "Ralph Edwards", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "06", name: "Kristin Watson", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "07", name: "Kathryn Murphy", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "08", name: "Ronald Richards", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "09", name: "Marvin McKinney", district: "Dhaka", phone: "0123456789", status: "Pending" },
  { id: "10", name: "Leslie Alexander", district: "Dhaka", phone: "0123456789", status: "Pending" },
]

const StoreList = () => {
    return (
         <div className="p-6 lg:p-10 overflow-x-hidden">
      <div className="rounded-2xl border border-[#D1D1D680] bg-white p-4 shadow-sm">
       <div className=" lg:flex items-center justify-between my-4">
         <h2 className="text-lg mb-3 lg:mb-0 font-semibold ">Store Request List</h2>
        <div className="flex gap-2 lg:gap-5">
            <Button
          variant="outline"
          className="rounded-full  font-normal bg-[#007AFF] text-white lg:px-4 py-1 lg:text-sm "
        >
          Store Request List 
        </Button>
           <Button
          variant="outline"
          className="rounded-full border-[#007AFF] text-[#007AFF] lg:px-4 py-1 lg:text-sm "
        >
          Store  List 
        </Button>
        </div>
       </div>
        <div className="overflow-hidden rounded-xl border-[#D1D1D680] ">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 border-b-[#D1D1D680]">
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-10">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {retailers.map((retailer, idx) => (
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
                  <TableCell>{retailer.district}</TableCell>
                  <TableCell>{retailer.phone}</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-[#FFB0301A] px-2 py-1 text-xs font-medium text-[#FFB030]">
                      {retailer.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-1 h-auto">
                      Approve
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

export default StoreList;