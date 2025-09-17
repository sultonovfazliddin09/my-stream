import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { following_items } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Following = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Following</SidebarGroupLabel>
        <SidebarContent>
          <SidebarMenu>
            {following_items.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild>
                  <Link href={item.username}>
                    <Image
                      width={32}
                      height={32}
                      src={item.avatar}
                      alt={item.username}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-bold font-spaceGrotesk">
                        @{item.username}
                      </p>
                      <p className="text-muted-foreground">
                        {item.followingBy} follower
                        {item.followingBy !== 1 && "s"}
                      </p>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </SidebarGroup>
    </>
  );
};

export default Following;
