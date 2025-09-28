import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import { DashboardSidebar } from "@/components/shared/Sidebar";
import DashboardTopbar from "@/components/shared/DashboardTopbar";
// import DashboardDeskSidebar from "@/components/dashboard/DashboardDeskSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Dokan",
  description:
    "Online dokan helps customer to purchess their needed products online",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-2 hidden md:flex bg-[#F6F6F6]">
            <DashboardSidebar />
            
          </div>
          <div className=" md:col-span-10 col-span-12 ">
            <DashboardTopbar />
            {children}
          </div>
        </div>

        {/* <div className="md:hidden">
          <MobileBottomMenu />
        </div> */}
      </body>
    </html>
  );
}
