import { Creator } from "./Creator";

const pc = Creator.createProduto(8, 930, 8, true);
const server = Creator.createProduto(4, 500, 7, false);

pc.toString();
server.toString();

