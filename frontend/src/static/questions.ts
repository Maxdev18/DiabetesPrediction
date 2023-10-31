import { IQuestions } from "../Interfaces/IQuestions";

export const questions: Array<IQuestions> = [
  {
    id: 1,
    question: "What is your age?",
    inputType: "text",
    selections: [""],
    inputs: [""]
  },
  {
    id: 2,
    question: "What is your height(ft)?",
    inputType: "text",
    selections: ["Feet", "Inches"],
    inputs: ["", ""]
  },
  {
    id: 3,
    question: "What is your weight(lbs)?",
    inputType: "text",
    selections: [""],
    inputs: [""]
  },
  {
    id: 4,
    question: "Have you smoked at least 100 cigarettes in your entire life?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 5,
    question: "Did you ever have a stroke?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 6,
    question: "What was your Systolic pressure?",
    inputType: "text",
    selections: [""],
    inputs: [""]
  },
  {
    id: 7,
    question: "What was your Diastolic pressure?",
    inputType: "text",
    selections: [""],
    inputs: [""]
  },
  {
    id: 8,
    question: "What is your cholesterol level? (In mg/dL)",
    inputType: "text",
    selections: ["Cholesterol level"],
    inputs: [""]
  },
  {
    id: 9,
    question: "Do you have any known severe heart disease, or did you have any heart attack?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 10,
    question: "During the past month, other than your regular job, did you participate in any physical activities or exercises such as running, calisthenics, golf, gardening, or walking for exercise?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 11,
    question: "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 12,
    question: "How would you say that your health is in general on a scale of 1-5?",
    inputType: "radio",
    selections: ["1 Excellent", "2 Very Good", "3 Good", "4 Fair", "5 Poor"],
    inputs: [""]
  },
  {
    id: 13,
    question: "Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?",
    inputType: "text",
    selections: ["Number of days"],
    inputs: [""]
  },
  {
    id: 14,
    question: "Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?",
    inputType: "text",
    selections: ["Number of days"],
    inputs: [""]
  },
  {
    id: 15,
    question: "Do you have serious difficulty walking or climbing stairs?",
    inputType: "radio",
    selections: ["Yes", "No"],
    inputs: [""]
  },
  {
    id: 16,
    question: "What is your biological sex?",
    inputType: "radio",
    selections: ["Male", "Female"],
    inputs: [""]
  }
]