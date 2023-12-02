import { Plus } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";
import { OrganizationSwitcher } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="fixed px-4 z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* {TODO: Mobile Sidebar} */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
