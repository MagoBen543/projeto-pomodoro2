import { Router } from 'express';
import { prisma } from '../lib/prisma';

export const tasksRouter = Router();

/**
 * LISTAR TODAS AS TASKS
 */
tasksRouter.get('/', async (_req, res) => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });

  return res.json(tasks);
});

/**
 * CRIAR TASK
 */
tasksRouter.post('/', async (req, res) => {
  const { id, name, duration, type, startDate } = req.body;

  if (!id || !name || !duration || !type || !startDate) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  const task = await prisma.task.create({
    data: {
      id,
      name,
      duration,
      type,
      startDate: String(startDate),
    },
  });

  return res.status(201).json(task);
});

/**
 * COMPLETAR TASK
 */
tasksRouter.patch('/:id/complete', async (req, res) => {
  const { id } = req.params;
  const { completeDate } = req.body;

  const task = await prisma.task.update({
    where: { id },
    data: {
      completeDate: String(completeDate),
    },
  });

  return res.json(task);
});

/**
 * INTERROMPER TASK
 */
tasksRouter.patch('/:id/interrupt', async (req, res) => {
  const { id } = req.params;
  const { interruptDate } = req.body;

  const task = await prisma.task.update({
    where: { id },
    data: {
      interruptedAt: String(interruptDate),
    },
  });

  return res.json(task);
});

/**
 * LIMPAR HISTÓRICO
 */
tasksRouter.delete('/', async (_req, res) => {
  await prisma.task.deleteMany();
  return res.status(204).send();
});