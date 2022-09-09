import { prisma } from "../config/database.js";

export interface IAnswerData {
  id: number;
  answeredBy: string;
  answer: string;
  questionId: number;
}

export type TAnswerData = Omit<IAnswerData, "id">

export async function storeAnswer(answerData: TAnswerData) {
  await prisma.answers.create({
    data: answerData
  })
}

export async function findAllAnswers(questionId: number) {
  return await prisma.answers.findFirst({
    where: { id: questionId },
  })
}