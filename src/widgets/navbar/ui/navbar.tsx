import { Link } from "react-router-dom";
import { classNames } from "shared";
import { AppLink } from "shared/components/app-link";
import { AppLinkTheme } from "shared/components/app-link/ui/app-link";
import { routerPaths, Routes } from "shared/config/router/config";
import { ThemeSwitcher } from "widgets/theme-switcher";
import cls from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.links)}>
        <AppLink to={routerPaths[Routes.MAIN]} theme={AppLinkTheme.SECONDARY}>
          Home
        </AppLink>
        <AppLink to={routerPaths[Routes.ABOUT]} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
