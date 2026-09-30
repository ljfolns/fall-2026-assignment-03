import { Router } from 'express';
import {
  createTicket,
  getAllTickets,
  GetAllTicketsOptions,
  getTicketById, updateTicketStatus,
} from '../dal/tickets.js';
import { createUser, getUserById } from '../dal/users.js';
import { NewTicket, NewUser, Ticket } from '../db/database.js';

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

router.post('/', async (req, res): Promise<void> => {
  const ticket: NewTicket = req.body;
  ticket.creator_id = res.locals.userId;
  await createTicket(ticket);
  res.status(201);
  res.json({});
});

router.patch("/:id/status", async (req, res) => {
  await updateTicketStatus(parseInt(req.params.id), req.body.status);
  res.status(200);
  res.json({});
});

// TODO: Student implementation - Part 2: Time Log Routes
// POST /tickets/:id/time
// GET /tickets/:id/time

export default router;
