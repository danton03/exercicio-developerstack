import { findAllAnswers, storeAnswer, TAnswerData } from '../repositories/answerRepository';
import * as questionsService from "./questionService";

export async function createAnswerService(answer: TAnswerData, questionId: number) {
  const answerData = {
    ...answer,
    questionId
  };
  await storeAnswer(answerData);
}

export async function getQuestionByIdService(questionId: number) {
  const question = await questionsService.getQuestionById(questionId);
  const allAnswers = await findAllAnswers(questionId);
  const questionData = {
    question, 
    answers: allAnswers
  }
  return questionData;
}