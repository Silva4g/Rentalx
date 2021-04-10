import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateSpecificationService(specificationsRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

// specificationsRoutes.get('/', (req, res) => {
//   const all = specificationsRepository.list();

//   return res.json(all);
// });

export { specificationsRoutes };
