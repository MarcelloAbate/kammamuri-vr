import { CashIcon, FireIcon, BriefcaseIcon, CakeIcon, ClipboardListIcon } from "@heroicons/react/outline";

// Choose icon from: https://heroicons.com/
// Insert i18n's key of title and subtitle of each feature in assets/locales/*
const features = [
  {
    Icon: CashIcon,
    title: "feature-cash-title",
    description: "feature-cash-subtitle",
    backgroundColor: "#1E1C3C",
  },
  {
    Icon: FireIcon,
    title: "feature-fire-title",
    description: "feature-fire-subtitle",
    backgroundColor: "#200a44",
  },
  {
    Icon: BriefcaseIcon,
    title: "feature-briefcase-title",
    description: "feature-briefcase-subtitle",
    backgroundColor: "#1b093a",
  },
  {
    Icon: CakeIcon,
    title: "feature-cake-title",
    description: "feature-cake-subtitle",
    backgroundColor: "#160730",
  },
  {
    Icon: ClipboardListIcon,
    title: "feature-clipboard-list-title",
    description: "feature-clipboard-list-subtitle",
    backgroundColor: "#000",
  },
];

export default features;
