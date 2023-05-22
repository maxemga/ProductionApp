import { classNames } from "./class-names";

describe("classNames", () => {
  test("test with one class", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("test with additions", () => {
    const output = "someClass class";
    expect(classNames("someClass", {}, ["class"])).toBe(output);
  });

  test("test with additions and mods", () => {
    const output = "someClass class hover";
    expect(classNames("someClass", { hover: true }, ["class"])).toBe(output);
  });

  test("test with additions and one mods false", () => {
    const output = "someClass class";
    expect(
      classNames("someClass", { hover: false, focus: false }, ["class"])
    ).toBe(output);
  });
});
