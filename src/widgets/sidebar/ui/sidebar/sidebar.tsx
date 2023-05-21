import { useState } from "react";
import { classNames } from "shared";
import { Button } from "shared/components/button";
import { ThemeSwitcher } from "features/theme-switcher";
import cls from "./sidebar.module.scss";
import { LanguageSwitcher } from "features/language-switcher";

interface Props {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.language} />
      </div>
    </div>
  );
};
