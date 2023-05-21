import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { AppLink } from "shared/components/app-link";
import { AppLinkTheme } from "shared/components/app-link/ui/app-link";
import { routerPaths, Routes } from "shared/config/router";
import cls from "./navbar.module.scss";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.links)}>
        <AppLink to={routerPaths[Routes.MAIN]} theme={AppLinkTheme.SECONDARY}>
          {t("navbar.home")}
        </AppLink>
        <AppLink to={routerPaths[Routes.ABOUT]} theme={AppLinkTheme.SECONDARY}>
          {t("navbar.about")}
        </AppLink>
      </div>
    </div>
  );
};
