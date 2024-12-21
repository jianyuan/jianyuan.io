import React from "react";
import * as runtime from "react/jsx-runtime";
import { SiAnthropic, SiOpenai, SiPorkbun, SiSentry } from "react-icons/si";

import { InlineIcon } from "./ui/inline-icon";

const sharedComponents = {
  SiAnthropic: () => <InlineIcon icon={SiAnthropic} />,
  SiOpenai: () => <InlineIcon icon={SiOpenai} />,
  SiPorkbun: () => <InlineIcon icon={SiPorkbun} />,
  SiSentry: () => <InlineIcon icon={SiSentry} />,
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
