"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import React from "react";

const ProtectedPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
