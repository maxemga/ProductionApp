import cls from "./button.module.scss";

import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/class-names";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
}

export const Button = ({
  children,
  className,
  theme = ButtonTheme.CLEAR,
  ...otherProps
}: Props) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
