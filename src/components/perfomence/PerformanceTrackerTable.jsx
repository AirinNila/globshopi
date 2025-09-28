"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import Pagination from "../shared/Pagination"
import { Button } from "../ui/button"
import { GoDownload } from "react-icons/go"


const products = [
  { id: "01", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "02", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "03", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "04", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "05", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "06", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "07", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "08", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "09", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "10", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },
  { id: "11", name: "Robert Fox", totalSales: "50,000", commission: "5% ", salary: "8,000" },

]

const PerformanceTrackerTable = () => {
    return (
         <div className="p-6 lg:p-10">
            <div className="rounded-2xl border border-[#D1D1D680] bg-white p-4 shadow-sm">
              <div className=" lg:flex items-center justify-between my-4">
         <h2 className="text-lg mb-3 lg:mb-0 font-semibold ">Store Performance Tracker</h2>
        <div className="flex gap-2 lg:gap-5">
             <Button
          variant="outline"
          className="rounded-full text-xs border-[#007AFF] text-[#007AFF] lg:px-4 py-1 lg:text-sm "
        >
          Export CSV
        </Button>
            <Button
          variant="outline"
          className="rounded-full text-xs  font-normal bg-[#007AFF] text-white lg:px-4 py-1 lg:text-sm "
        >
       <span>Download Report</span> <GoDownload />
          
        </Button>
          
        </div>
       </div>
              <div className="overflow-hidden rounded-xl border-[#D1D1D680] ">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b-[#D1D1D680]">
                      <TableHead>ID</TableHead>
                      <TableHead>Store Name</TableHead>
                      <TableHead>Total Sales</TableHead>
                      <TableHead>Commission</TableHead>
                      <TableHead>Salary</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((retailer, idx) => (
                      <TableRow
                        key={idx}
                        className={cn(
                          "border-b  space-y-2 items-center border-b-[#D1D1D680] last:border-0",
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        )}
                      >
                        <TableCell className={'flex items-center mt-3 gap-2 border-b-none'}>
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <span>{retailer.id}</span>
                        </TableCell>
                        <TableCell>{retailer.name}</TableCell>
                        <TableCell>{retailer.totalSales}</TableCell>
                        <TableCell>{retailer.commission}</TableCell>
                        <TableCell>
                          <span className="">
                            {retailer.salary}
                          </span>
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

export default PerformanceTrackerTable;