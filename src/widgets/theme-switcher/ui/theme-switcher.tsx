import { Theme, useTheme } from "app/providers/theme";
import { classNames } from "shared";
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "shared/assets/icons/theme-light.svg";
import { Button } from "shared/components/button";
import cls from "./theme-switcher.module.scss";

interface Props {
  className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  );
};
