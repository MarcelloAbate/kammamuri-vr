import React from "react";
import s from "./Features.module.css";
import features from "../../../config/features";
import { useTranslation } from "react-i18next";
import cn from "classnames";

interface FeaturesProps {
  children?: React.ReactNode;
}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div className={s.root}>
      {features.map((feature, i) => (
        <Feature
          Icon={feature.Icon}
          number={i}
          title={feature.title}
          description={feature.description}
          backgroundColor={feature.backgroundColor}
        />
      ))}
    </div>
  );
};

interface FeatureProps {
  Icon: React.FC<React.ComponentProps<"svg">>;
  number: number;
  title: string;
  description: string;
  backgroundColor: string;
}

const Feature: React.FC<FeatureProps> = ({ Icon, number, title, description, backgroundColor }) => {
  const { t } = useTranslation();

  const className = cn(s.feature, {
    "w-full sm:w-[50%] lg:w-[33%]  ": number <= 2,
    "w-full sm:w-[50%]": number >= 3,
  });

  return (
    <div style={{ backgroundColor }} className={className}>
      <Icon className={s["feature-icon"]} />
      <h3 className={s["feature-title"]}>{t(title)}</h3>
      <p className={s["feature-description"]}>{t(description)}</p>
    </div>
  );
};

export default Features;
