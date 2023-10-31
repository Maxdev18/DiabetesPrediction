export interface IQuestions {
  id: number;
  question: string;
  inputType: string;
  selections: Array<string>;
  inputs: Array<string>
}