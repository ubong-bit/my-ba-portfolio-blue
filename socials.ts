import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import { siteConfig } from "./site";

export const socialLinks: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "GitHub", href: siteConfig.social.github, icon: Github },
  { name: "Email", href: siteConfig.social.email, icon: Mail },
];
