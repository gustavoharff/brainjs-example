import { NeuralNetwork, likely } from "brain.js";
import { A, B, C, character, D, DOIS, E, E_EXAMPLE, F, } from "./letters";
import { saveSvg } from "./svg";

const net = new NeuralNetwork();
net.train([
  { input: character(A), output: { a: 1 } },
  { input: character(B), output: { b: 1 } },
  { input: character(C), output: { c: 1 } },
  { input: character(D), output: { d: 1 } },
  { input: character(E), output: { e: 1 } },
  { input: character(F), output: { f: 1 } },
  { input: character(DOIS), output: { 2: 1 } },
]);

const result = likely(character(E_EXAMPLE), net);

console.log(result);

saveSvg(net);
