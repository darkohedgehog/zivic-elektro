import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
  //spanClassName?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",
        className
      )}
    >
      <Image 
       src="/logo.png"
       alt="Logo"
       width={140}
       height={80}
        />
    </Link>
  );
};

export default Logo;