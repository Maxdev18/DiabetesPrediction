export interface IQuestions {
  id: number;
  questionNumber: number;
  question: string;
  inputType: string;
  numberOfInputs: number;
  selections: Array<string>;
}