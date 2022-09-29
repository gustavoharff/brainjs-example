import { NeuralNetwork } from "brain.js";
import { saveSvg } from "./svg";

const neuralNetwork = new NeuralNetwork({
  errorThresh: 0.00005, // Margem de erro, quanto menor melhor
  hiddenLayers: [3],
  activation: "sigmoid",
  log: true
});

neuralNetwork.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },

  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]);

const output = neuralNetwork.run([1, 0]);

console.log(output);

saveSvg(neuralNetwork);
