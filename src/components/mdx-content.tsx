import React from "react";
import * as runtime from "react/jsx-runtime";

import { BrandIcon } from "./ui/brand-icon";

const sharedComponents = {
  BrandIcon,
};

function useMdxComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MdxContent({
  code,
  components,
}: {
  code: string;
  components?: Record<string, React.ComponentType>;
}) {
  const Component = useMdxComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}
