import { IconType } from "react-icons";

import { cn } from "@/utils/cn";

export function InlineIcon({
  icon: Icon,
  className,
  ...props
}: { icon: IconType } & React.ComponentProps<"svg">) {
  return (
    <Icon
      {...props}
      className={cn("inline align-text-middle mb-1", className)}
    />
  );
}
