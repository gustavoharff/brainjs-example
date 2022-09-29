// Transforma a string em um array de 1 e 0
export function character(string: string): number[] {
  return string.trim().split("").map(integer);
}

function integer(character: string): number {
  if (character === "#") return 1;
  return 0;
}

export const DOIS =
  "######." +
  "......#" +
  "......#" +
  ".#####." +
  "#......" +
  "#......" +
  ".######";

export const A =
  ".#####." +
  "#.....#" +
  "#.....#" +
  "#######" +
  "#.....#" +
  "#.....#" +
  "#.....#";

export const B =
  "######." +
  "#.....#" +
  "#.....#" +
  "######." +
  "#.....#" +
  "#.....#" +
  "######.";

export const C =
  "#######" +
  "#......" +
  "#......" +
  "#......" +
  "#......" +
  "#......" +
  "#######";

export const D =
  "######." +
  "#.....#" +
  "#.....#" +
  "#.....#" +
  "#.....#" +
  "#.....#" +
  "######.";

export const E =
  "#######" +
  "#......" +
  "#......" +
  "######." +
  "#......" +
  "#......" +
  "#######";

export const F =
  "#######" +
  "#......" +
  "#......" +
  "######." +
  "#......" +
  "#......" +
  "#......";

export const E_EXAMPLE =
  "#.#.#.#" +
  "#......" +
  "#......" +
  "#.###.." +
  "#......" +
  "#......" +
  "###..#.";