"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button asChild variant={"link"}>
      <Link
        href={href}
        className={cn(isActive && pathname !== "/" && "bg-lime-700 text-white")}
      >
        {children}
      </Link>
    </Button>
  );
};

export default NavLink;
