import { Router } from 'express';
import { createUser, getAllUsers, getUserById } from '../dal/users.js';

const router = Router();

router.get('/', async (_, res): Promise<void> => {
  res.json(await getAllUsers());
});

router.get('/:id', async (req, res): Promise<void> => {
  res.json(await getUserById(parseInt(req.params.id)));
});

router.post("/", async (req, res): Promise<void> => {
  const user: NewUser = req.body;
  await createUser(user);
  res.status(201);
  res.json({})
});

type NewUser = {
  name: string,
  email: string
}

export default router;
