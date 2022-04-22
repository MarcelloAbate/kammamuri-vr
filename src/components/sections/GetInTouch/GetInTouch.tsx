import React from "react";
import { useTranslation } from "react-i18next";
import phoneCodes from "../../../constants/phoneCodes";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import SelectInput from "../../ui/SelectInput";
import Textarea from "../../ui/Textarea";
import TextInput from "../../ui/TextInput";
import s from "./GetInTouch.module.css";

interface GetInTouchProps {
  children?: React.ReactNode;
}

const GetInTouch: React.FC<GetInTouchProps> = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    code: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ [name]: value, ...prev }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    //TODO Handle form submit
  };

  return (
    <section className="bg-white">
      <Container className={s.root}>
        <div>
          <div className={s.side}>
            <h3 className={s.title}>{t("get-in-touch-title")}</h3>
            <p className={s.paragraph}>{t("get-in-touch-paragraph")}</p>
          </div>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <TextInput
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            label={t("get-in-touch-name-label")}
            placeholder={t("get-in-touch-name-placeholder")}
            className="col-span-4 sm:col-span-2"
            value={formState.firstName}
            onChange={handleChange}
          />
          <TextInput
            name="lastName"
            id="lastName"
            autoCapitalize="family-name"
            label={t("get-in-touch-last-name-label")}
            placeholder={t("get-in-touch-last-name-placeholder")}
            className="col-span-4 sm:col-span-2"
            value={formState.lastName}
            onChange={handleChange}
          />
          <TextInput
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            label={t("get-in-touch-email-label")}
            placeholder={t("get-in-touch-email-placeholder")}
            className="col-span-4"
            value={formState.email}
            onChange={handleChange}
          />
          <SelectInput
            selectOptions={phoneCodes.map((phoneCode) => ({ value: phoneCode, label: phoneCode }))}
            name="code"
            id="code"
            label={t("get-in-touch-code-label")}
            className="col-span-1"
            value={formState.code}
            onChange={handleChange}
          />
          <TextInput
            name="phone"
            id="phone"
            type="tel"
            autoComplete="tel"
            label={t("get-in-touch-phone-label")}
            placeholder={t("get-in-touch-phone-placeholder")}
            className="col-span-3"
            value={formState.phone}
            onChange={handleChange}
          />
          <TextInput
            name="company"
            id="company"
            label={t("get-in-touch-company-label")}
            placeholder={t("get-in-touch-company-placeholder")}
            className="col-span-4"
            value={formState.company}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            id="message"
            label={t("get-in-touch-message-label")}
            placeholder={t("get-in-touch-message-placeholder")}
            className="col-span-4 row-span-2"
            value={formState.company}
            onChange={handleChange}
            rows={4}
          />

          <Button>{t("get-in-touch-submit-button")}</Button>
        </form>
      </Container>
    </section>
  );
};

export default GetInTouch;
