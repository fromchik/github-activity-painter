import { KeyRound, Mail, User } from "lucide-react";

export const inputFields = [
  {
    id: "githubToken",
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
export const themes = {
  dark: {
    cells: ["#18181b", "#033a16", "#196c2e", "#2ea043", "#56d364"],
    futureCell: "#3f3f46",
  },
  light: {
    cells: ["#f9f9f9", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    futureCell: "#ebedf0",
  },
} as const;

export const cellDarkThemePallete = themes.dark.cells;
export const cellLightThemePallete = themes.light.cells;
