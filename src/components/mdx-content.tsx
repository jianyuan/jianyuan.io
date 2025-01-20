import React from "react";
import * as runtime from "react/jsx-runtime";

import { BrandIcon } from "./ui/brand-icon";
import { Code } from "./ui/code";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const sharedComponents = {
  BrandIcon,
  Code,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
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
