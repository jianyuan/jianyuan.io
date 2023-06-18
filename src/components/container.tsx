import React from "react";

import { cn } from "@/utils/cn";

function OuterContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

function InnerContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative px-4 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <OuterContainer className={className}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
