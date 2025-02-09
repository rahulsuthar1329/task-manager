import { BadgeType } from "../types";

export const getColor = (type: BadgeType) =>
  ({
    [BadgeType.WARNING]: "#ffbd53",
    [BadgeType.SUCCESS]: "#71AB6F",
    [BadgeType.DANGER]: "#ff5866",
    [BadgeType.MESSAGE]: "#02a2ff",
  }[type]);
