import {
  GlobeIcon,
  ShoppingCartIcon,
  ThumbUpIcon,
  FilmIcon,
  PresentationChartBarIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";

// Choose icon from: https://heroicons.com/
// Insert i18n's key of title and subtitle of each feature in assets/locales/*
const features = [
  {
    Icon: GlobeIcon,
    title: "feature-metaverse-world-title",
    description: "feature-metaverse-world-subtitle",
    backgroundColor: "#399a99",
  },
  {
    Icon: ShoppingCartIcon,
    title: "feature-virtual-shop-title",
    description: "feature-virtual-shop-subtitle",
    backgroundColor: "#238f8e",
  },
  {
    Icon: ThumbUpIcon,
    title: "feature-interactive-museum-title",
    description: "feature-interactive-museum-subtitle",
    backgroundColor: "#208180",
  },
  {
    Icon: FilmIcon,
    title: "feature-media-center-title",
    description: "feature-media-center-subtitle",
    backgroundColor: "#1c7272",
  },
  {
    Icon: PresentationChartBarIcon,
    title: "feature-analytycs-dashboard-title",
    description: "feature-analytycs-dashboard-subtitle",
    backgroundColor: "#196463",
  },
  {
    Icon: PuzzleIcon,
    title: "feature-mini-games-title",
    description: "feature-mini-games-subtitle",
    backgroundColor: "#155655",
  },
];

export default features;
