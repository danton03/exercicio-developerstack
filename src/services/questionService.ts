import { findAllQuestions, findQuestionById, storeQuestion, TQuestionData } from '../repositories/questionRepository';

export async function createQuestionService(questionData: TQuestionData) {
  await storeQuestion(questionData);
}

export async function getQuestionsService() {
  return await findAllQuestions();
}

export async function getQuestionById<IQuestionData>(questionId: number) {
  return await findQuestionById(questionId);
}