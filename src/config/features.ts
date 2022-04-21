import { CashIcon, FireIcon, BriefcaseIcon, CakeIcon, ClipboardListIcon, EyeIcon } from "@heroicons/react/outline";

// Choose icon from: https://heroicons.com/
// Insert i18n's key of title and subtitle of each feature in assets/locales/*
const features = [
  {
    Icon: CashIcon,
    title: "feature-cash-title",
    description: "feature-cash-subtitle",
    backgroundColor: "#399a99",
  },
  {
    Icon: FireIcon,
    title: "feature-fire-title",
    description: "feature-fire-subtitle",
    backgroundColor: "#238f8e",
  },
  {
    Icon: BriefcaseIcon,
    title: "feature-briefcase-title",
    description: "feature-briefcase-subtitle",
    backgroundColor: "#208180",
  },
  {
    Icon: CakeIcon,
    title: "feature-cake-title",
    description: "feature-cake-subtitle",
    backgroundColor: "#1c7272",
  },
  {
    Icon: ClipboardListIcon,
    title: "feature-clipboard-list-title",
    description: "feature-clipboard-list-subtitle",
    backgroundColor: "#196463",
  },
  {
    Icon: EyeIcon,
    title: "feature-clipboard-eye-title",
    description: "feature-clipboard-eye-subtitle",
    backgroundColor: "#155655",
  },
];

export default features;
