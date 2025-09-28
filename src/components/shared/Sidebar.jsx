"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { IconSettings } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaStore } from "react-icons/fa";
import {
  LucidePackage2,
  LaptopMinimal,
  ChevronDown,
  ChevronRight,
  Hourglass,
} from "lucide-react";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(""); // default closed

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <RxDashboard className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Store",
      href: "/store",
      icon: <FaStore className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Products",
      href: "/all-products",
      icon: <LucidePackage2 className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Advertisements",
      href: "/advertisements",
      icon: <Hourglass className="h-5 w-5 shrink-0" />,
      children: [
        { label: "Ad Requests (New Ads)", href: "/advertisements/requests" },
        { label: "Active Ads", href: "/advertisements/active" },
        { label: "Expired Ads", href: "/advertisements/expired" },
        { label: "Payments", href: "/advertisements/payments" },
      ],
    },
    {
      label: "Performance",
      href: "/performance",
      icon: <LaptopMinimal className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex md:w-2/12 w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-[#F6F6F6] md:flex-row dark:border-neutral-700 dark:bg-neutral-800 md:h-screen lg:fixed"
      )}
    >
      <Sidebar open={true} setOpen={() => {}} animate={false}>
        <div className="w-full">
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <Logo />
              <div className="mt-8 flex flex-col gap-2">
                <span className="text-[#8E8E93] font-medium px-3">Menu</span>

                {links.map((link, idx) => {
                  const isActive =
                    pathname === link.href ||
                    (link.children &&
                      link.children.some((child) => pathname === child.href));
                  const isDropdown = !!link.children;

                  return (
                    <div key={idx} className="mx-2">
                      {/* Parent link (normal link if no children, button if dropdown) */}
                      {!isDropdown ? (
                        <div
                          className={cn(
                            "rounded-full font-normal p-2 transition-colors",
                            isActive
                              ? "bg-[#007AFF] text-white"
                              : "hover:bg-[#007AFF] hover:text-white"
                          )}
                        >
                          <SidebarLink
                            link={{
                              ...link,
                              icon: React.cloneElement(link.icon, {
                                className: cn(
                                  "h-5 w-5 shrink-0",
                                  isActive
                                    ? "text-white"
                                    : "text-neutral-700 dark:text-neutral-200"
                                ),
                              }),
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === link.label ? "" : link.label
                              )
                            }
                            className={cn(
                              "flex items-center justify-between w-full rounded-full p-2 transition-colors",
                              isActive
                                ? "bg-[#007AFF] text-white"
                                : "hover:bg-[#007AFF] hover:text-white"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              {React.cloneElement(link.icon, {
                                className: cn(
                                  "h-5 w-5 shrink-0",
                                  isActive
                                    ? "text-white"
                                    : "text-neutral-700 dark:text-neutral-200"
                                ),
                              })}
                              <span>{link.label}</span>
                            </div>
                            {openDropdown === link.label ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>

                          {/* Children */}
                          {openDropdown === link.label && (
                            <div className="ml-8 mt-1 flex flex-col gap-1">
                              {link.children.map((child, i) => {
                                const childActive = pathname === child.href;
                                return (
                                  <SidebarLink
                                    key={i}
                                    link={child}
                                    className={cn(
                                      "text-sm px-2 py-1 rounded-md transition-colors",
                                      childActive
                                        ? "text-[#007AFF] font-medium"
                                        : "text-neutral-600 hover:text-[#007AFF]"
                                    )}
                                  />
                                );
                              })}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-white w-full"></div>

            <div
              className={cn(
                "flex items-center bg-[#FFFFFF] justify-center mx-2 font-medium rounded-md transition-colors hover:bg-blue-400 hover:text-white"
              )}
            >
              <SidebarLink
                link={{
                  label: "Logout",
                  href: "#",
                  icon: (
                    <CgLogOut
                      size={24}
                      className="text-neutral-700 dark:text-neutral-200"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </div>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.png" width={60} height={60} alt="logo" />
    </a>
  );
};
