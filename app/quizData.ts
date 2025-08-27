export interface Question {
  id: number;
  question: string;
  answer: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    question: "An NFL team has 11 players on the field at a time.",
    answer: true,
  },
  {
    id: 2,
    question: "The Super Bowl is played at the end of every NFL season.",
    answer: true,
  },
  {
    id: 3,
    question: "The NFL regular season has 20 games per team.",
    answer: false,
  },
  {
    id: 4,
    question: "A touchdown is worth 6 points in the NFL.",
    answer: true,
  },
  {
    id: 5,
    question: "The Green Bay Packers are the oldest team in the NFL.",
    answer: true,
  },
  {
    id: 6,
    question: "Field goals in the NFL are worth 4 points.",
    answer: false,
  },
  {
    id: 7,
    question: "Overtime in the NFL can end in a tie during the regular season.",
    answer: true,
  },
  {
    id: 8,
    question: "The Lombardi Trophy is awarded to the Super Bowl winner.",
    answer: true,
  },
  {
    id: 9,
    question: "NFL teams are allowed unlimited challenges per game.",
    answer: false,
  },
  {
    id: 10,
    question: "Tom Brady has won more Super Bowls than any NFL franchise.",
    answer: true,
  },
];
export default questions;
