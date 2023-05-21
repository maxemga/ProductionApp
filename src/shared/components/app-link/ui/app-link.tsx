import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/class-names";
import cls from "./app-link.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  children,
  className,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: Props) => {
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
