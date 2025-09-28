"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { IconSettings } from "@tabler/icons-react";
import { ChevronDown, ChevronRight, Hourglass, LaptopMinimal, LucidePackage2 } from "lucide-react";
import { FaStore } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgLogOut } from "react-icons/cg";

const MenuDrawer = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = React.useState(""); 
  
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


  const SidebarLink = ({ link }) => (
    <Link
      href={link.href}
      className="flex items-center gap-3 px-3 py-2 text-base font-medium transition-colors"
    >
      {link.icon}
      <span>{link.label}</span>
    </Link>
  );

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <IoMenuSharp size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-80 ml-auto bg-white rounded-none "
        aria-describedby={undefined}>
        <div className="flex items-center justify-between p-4 border-b">
          <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <RxCross2 size={20} />
            </Button>
          </DrawerClose>
        </div>

        <div className="p-4 space-y-2">
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
                              "flex items-center justify-between w-full rounded-full px-3 py-2 transition-colors",
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
        <div className="p-4 mt-auto border-t">
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
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;