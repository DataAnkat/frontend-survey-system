export type SurveyData = {
    id: number;
    name: string;
    description: string;
}

export type QuestionData = {
    question: string;
    type: string;
    id: number;
    answer: string;
}

export type AnswerData = {
  answer: string;
  type: string | null;
  id: number;
  question: QuestionData & { survey: SurveyData };
}

// Lähetettävä vastaus
export type NewAnswer = {
  answer: string;
  question: { id: number };
}
