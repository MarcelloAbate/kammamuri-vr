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
    <section className={s.root}>
      {features.map((feature, i) => (
        <Feature
          Icon={feature.Icon}
          number={i}
          title={feature.title}
          description={feature.description}
          backgroundColor={feature.backgroundColor}
        />
      ))}
    </section>
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

  const className = cn(s.feature);

  return (
    <div style={{ backgroundColor }} className={className}>
      <Icon className={s["feature-icon"]} />
      <h3 className={s["feature-title"]}>{t(title)}</h3>
      <p className={s["feature-description"]}>{t(description)}</p>
    </div>
  );
};

export default Features;
