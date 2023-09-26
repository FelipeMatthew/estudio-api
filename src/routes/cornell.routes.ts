import { Router } from "express";
import { CreateCornellController } from "../modules/cornell/useCases/createCornell/CreateCornellController";
import { ReadAllCornellController } from "../modules/cornell/useCases/readAllCornell/ReadAllCornellController";
import { ReadByIdCornellController } from "../modules/cornell/useCases/readByIdCornell/ReadByIdCornellController"; 
import { DeleteCornellController } from "../modules/cornell/useCases/deleteCornell/DeleteCornellController";
import { UpdateCornellController } from "../modules/cornell/useCases/updateCornell/UpdateCornellController";

const createCornellController = new CreateCornellController();
const readAllCornellController = new ReadAllCornellController();
const readByIdCornellController = new ReadByIdCornellController();
const deleteCornellController = new DeleteCornellController();
const updateCornellController = new UpdateCornellController();

const cornellRoutes = Router();

cornellRoutes.post('/', createCornellController.handle);
cornellRoutes.get('/', readAllCornellController.handle);
cornellRoutes.get('/:id', readByIdCornellController.handle);
cornellRoutes.get('/delete/:id', deleteCornellController.handle);
cornellRoutes.put('/update/:id', updateCornellController.handle);

export { cornellRoutes }
