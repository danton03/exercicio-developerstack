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
  const question = questionsService.getQuestionById(questionId);
  const allAnswers = findAllAnswers(questionId);
  const questionData = {question: question, answers: allAnswers}
  return questionData;
}