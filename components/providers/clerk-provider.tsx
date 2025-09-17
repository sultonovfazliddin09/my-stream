"use client";
import { useTheme } from "next-themes";
import { ClerkProvider as Clerk } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";

interface ClerkProviderProps {
  children: React.ReactNode;
}

const ClerkProvider = ({ children }: ClerkProviderProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Clerk
      appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
    >
      {children}
    </Clerk>
  );
};

export default ClerkProvider;
