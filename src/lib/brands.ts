import {
  SiAnthropic,
  SiGo,
  SiOpenai,
  SiPocketbase,
  SiPorkbun,
  SiSentry,
  SiSvelte,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export const brandIcons = {
  anthropic: SiAnthropic,
  go: SiGo,
  openai: SiOpenai,
  pocketbase: SiPocketbase,
  porkbun: SiPorkbun,
  sentry: SiSentry,
  svelte: SiSvelte,
  terraform: SiTerraform,
  typescript: SiTypescript,
} as const;

export const brands = Object.keys(brandIcons) as (keyof typeof brandIcons)[];
