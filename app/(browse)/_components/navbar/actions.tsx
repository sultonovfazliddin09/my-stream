import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import React from "react";

const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <ModeToggle />
      <SidebarTrigger />
      <SignedOut>
        <SignInButton>
          <Button size={"sm"}>
            <span className="max-md:hidden">Sign In</span>
            <LogIn />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Actions;
