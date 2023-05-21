import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Button } from "shared/components/button";
import i18n from "shared/config/i18n";
import cls from "./language-switcher.module.scss";

interface Props {
  className?: string;
}

export const LanguageSwitcher = ({ className }: Props) => {
  const {} = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames(cls.languageSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};
