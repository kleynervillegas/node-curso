import { Router } from 'express';
import * as UserCrt from '../../controllers/user/userController'

const router = Router()

router.get('/',UserCrt.getAll);
router.get('/:id',UserCrt.getOne);
router.delete('/:id',UserCrt.deleteUser);
router.post('/', UserCrt.registerUser);
router.put('/:id', UserCrt.updateUser);
router.get('/:numbereId', UserCrt.updateUser);

export default router;