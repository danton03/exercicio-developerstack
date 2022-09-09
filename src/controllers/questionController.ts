import { Request, Response } from 'express';
import { number } from 'joi';
import { storeAnswer } from '../repositories/answerRepository';
import { findAllQuestions, storeQuestion } from '../repositories/questionRepository';
import { createAnswerService, getQuestionByIdService } from '../services/answerService';
import { createQuestionService, getQuestionsService } from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  const questionData = req.body;
  await createQuestionService(questionData);
  return res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId = Number(req.params.id);
  const answerData = req.body;
  await createAnswerService(answerData, questionId);
  return res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const allQuestions = await getQuestionsService();
  return res.status(200).send({questions: allQuestions});
}

export async function getById(req: Request, res: Response) {
  const questionId = Number(req.params.id);
  const question = getQuestionByIdService(questionId);
  return res.status(200).send(question);
}
