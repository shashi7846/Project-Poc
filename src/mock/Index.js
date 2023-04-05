import { setupServer } from "msw/node";
import { handlers } from "./Handlers";

const worker = setupServer(...handlers);
export default worker;
