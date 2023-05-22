type Mode = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mode = {},
  additions: string[] = []
) => {
  return [
    cls,
    ...additions.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([name]) => name),
  ].join(" ");
};
