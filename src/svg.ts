import { NeuralNetwork, utilities } from "brain.js";
import { INeuralNetworkData } from "brain.js/dist/src/neural-network";
import fs from "node:fs";
import path from "node:path";

export function saveSvg(
  neuralNetwork: NeuralNetwork<INeuralNetworkData, INeuralNetworkData>
) {
  const svg = utilities.toSVG(neuralNetwork.toJSON());

  const pathname = path.resolve(__dirname, "static", "net.svg");

  fs.writeFileSync(pathname, svg);
}
