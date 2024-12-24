import { brandIcons, brands } from "@/lib/brands";

import { InlineIcon } from "./inline-icon";

export function BrandIcon({
  brand,
  ...props
}: { brand: (typeof brands)[number] } & React.ComponentProps<"svg">) {
  return <InlineIcon icon={brandIcons[brand]} {...props} />;
}
