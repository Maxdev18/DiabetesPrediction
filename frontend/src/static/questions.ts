import { IQuestions } from "../Interfaces/IQuestions";

export const questions: Array<IQuestions> = [
  {
    id: 1,
    questionNumber: 1,
    question: "What is your age?",
    inputType: "text",
    selections: [""],
    numberOfInputs: 1
  },
  {
    id: 2,
    questionNumber: 2,
    question: "What is your height and weight? (In ft and lbs)",
    inputType: "number",
    numberOfInputs: 2,
    selections: ["Height", "Weight"]
  },
  {
    id: 3,
    questionNumber: 3,
    question: "Have you smoked at least 100 cigarettes in your entire life?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 4,
    questionNumber: 4,
    question: "Did you ever have a stroke?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 5,
    questionNumber: 5,
    question: "What was your blood pressure?",
    inputType: "number",
    numberOfInputs: 2,
    selections: ["Systolic pressure", "Diastolic pressure"]
  },
  {
    id: 6,
    questionNumber: 6,
    question: "What is your cholesterol level? (In mg/dL)",
    inputType: "number",
    numberOfInputs: 1,
    selections: ["Cholesterol level"]
  },
  {
    id: 7,
    questionNumber: 7,
    question: "Do you have any known severe heart disease, or did you have any heart attack?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 8,
    questionNumber: 8,
    question: "During the past month, other than your regular job, did you participate in any physical activities or exercises such as running, calisthenics, golf, gardening, or walking for exercise?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 9,
    questionNumber: 9,
    question: "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 10,
    questionNumber: 10,
    question: "How would you say that your health is in general on a scale of 1-5?",
    inputType: "radio",
    numberOfInputs: 5,
    selections: ["1 Excellent", "2 Very Good", "3 Good", "4 Fair", "5 Poor"]
  },
  {
    id: 11,
    questionNumber: 11,
    question: "Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?",
    inputType: "radio",
    numberOfInputs: 1,
    selections: ["Number of days"]
  },
  {
    id: 12,
    questionNumber: 12,
    question: "Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?",
    inputType: "radio",
    numberOfInputs: 1,
    selections: ["Number of days"]
  },
  {
    id: 13,
    questionNumber: 13,
    question: "Do you have serious difficulty walking or climbing stairs?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Yes", "No"]
  },
  {
    id: 14,
    questionNumber: 14,
    question: "What is your biological sex?",
    inputType: "radio",
    numberOfInputs: 2,
    selections: ["Male", "Female"]
  },
  {
    id: 15,
    questionNumber: 15,
    question: "",
    inputType: "radio",
    numberOfInputs: 1,
    selections: [""]
  }
]