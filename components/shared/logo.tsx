import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="text-3xl font-spaceGrotesk font-bold">My Stream</div>
    </Link>
  );
};

export default Logo;
