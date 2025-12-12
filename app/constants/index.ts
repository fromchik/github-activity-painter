import { KeyRound, Mail, User } from "lucide-react";

export const inputFields = [
  {
    id: "github-token",
    icon: KeyRound,
    label: "Github Token",
    placeholder: "Enter your Github token",
    tooltip: "Create a token in the settings and enter it here",
    type: "password",
  },
  {
    id: "username",
    icon: User,
    label: "Username",
    placeholder: "Enter your username",
    tooltip: "Your Github username",
    type: "text",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    placeholder: "Enter your email",
    tooltip: "Your Github email address",
    type: "email",
  },
];

export const cellDarkThemePallete = [
  "#18181b",
  "#033a16",
  "#196c2e",
  "#2ea043",
  "#56d364",
];
