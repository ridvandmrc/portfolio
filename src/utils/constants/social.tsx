import { ReactNode } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export type SocialVariant =
  | "facebook"
  | "twitter"
  | "github"
  | "linkedin"
  | "instagram";

type SocialValueType = {
  link: string;
  icon: ReactNode;
};

export const Social: Record<SocialVariant, SocialValueType> = {
  linkedin: {
    link: "https://www.linkedin.com/in/rdvndmrc/",
    icon: <FaLinkedin />,
  },
  github: {
    icon: <FaGithub />,
    link: "https://github.com/ridvandmrc",
  },
  instagram: {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/demirci.r/",
  },
  facebook: {
    link: "#",
    icon: <FaFacebook />,
  },

  twitter: {
    icon: <FaTwitter />,
    link: "#",
  },
} as const;

export type SocialType = typeof Social
