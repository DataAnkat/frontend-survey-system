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
    type: string;
    id: number;
}