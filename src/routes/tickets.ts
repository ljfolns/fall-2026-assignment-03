import { Router } from 'express';
import {
  getAllTickets,
  GetAllTicketsOptions,
  getTicketById,
} from '../dal/tickets.js';
import { getUserById } from '../dal/users.js';

const router = Router();

// TODO: Student implementation - Part 1: Ticket Routes
// GET /tickets
router.get("/", async (req, res) => {
  const options: GetAllTicketsOptions = {};

  if (typeof req.query.offset === 'string')
    options.offset = parseInt(req.query.offset) // DANIEL
  if (typeof req.query.limit === 'string')
    options.limit = parseInt(req.query.limit);

  res.json(await getAllTickets(options));
});

router.get("/:id", async (req, res) => {
  res.json(await getTicketById(parseInt(req.params.id)));
});
// GET /tickets/:id
// POST /tickets
// PATCH /tickets/:id/status

// TODO: Student implementation - Part 2: Time Log Routes
// POST /tickets/:id/time
// GET /tickets/:id/time

export default router;
