
export enum QuestionType {
  MultipleChoice = 'multiple-choice',
  OpenEnded = 'open-ended',
  Reflection = 'reflection',
}

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: QuestionOption[];
}

export interface QuestionSectionData {
  title: string;
  questions: Question[];
}

export interface Chapter {
  id: number;
  title: string;
  sections: QuestionSectionData[];
}

export interface Answers {
  [key: string]: string;
}
