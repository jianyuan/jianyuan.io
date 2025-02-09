"use client";

import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import React from "react";

import { cn } from "@/utils/cn";

export function HomePhoto({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
} & React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-800",
        className,
      )}
    >
      <Image
        loader={uploadcareLoader}
        src={`${src}-/scale_crop/360x400/smart/`}
        alt={alt}
        width="360"
        height="400"
      />
    </div>
  );
}
