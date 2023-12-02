"use client";
import { LinkProps } from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
interface SidebarProps {
  storageKey?: string;
}
const SideBar = ({ storageKey }: SidebarProps) => {
  return <div>SIDEBAR</div>;
};

export default SideBar;
