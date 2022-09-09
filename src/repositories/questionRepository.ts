import { prisma } from "../config/database.js";

export interface IQuestionData {
  id: number;
  askedBy: string;
  question: string;
}

export type TQuestionData = Omit<IQuestionData, "id">

export async function storeQuestion(questionData: TQuestionData) {
  await prisma.questions.create({
    data: questionData
  })
}

export async function findAllQuestions <IAnswerData>() {
  return await prisma.questions.findMany();
}

export async function findQuestionById <IAnswerData>(questionId: number) {
  return await prisma.questions.findUnique({where: {id: questionId}});
}