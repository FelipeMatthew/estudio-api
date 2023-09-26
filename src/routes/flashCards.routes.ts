import { Router } from 'express';
import { CreateFlashCardsController} from '../modules/flashCards/useCases/createFlashCards/CreateFlashCardsController';


const createFlashCardsController = new CreateFlashCardsController();
const flashCardRoutes = Router();

flashCardRoutes.post('/', createFlashCardsController.handle);

export { flashCardRoutes }

