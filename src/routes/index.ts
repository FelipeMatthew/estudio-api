import { Router } from "express";
import { userRoutes } from "./user.routes";
import { cornellRoutes } from "./cornell.routes"; 
import { flashCardRoutes } from "./flashCards.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/cornell", cornellRoutes);
routes.use("/flashcards", flashCardRoutes);

export { routes };