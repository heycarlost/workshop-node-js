import express from 'express';
import { postsController } from '../controllers';

const router = express.Router();

router.get('/', postsController.list);
router.get('/:id', postsController.find);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.del);

export default router;
