import MathQuiz, { operators } from "./MathQuiz";

function RandomMathQuiz() {
    return <MathQuiz props={{ first: Math.floor(Math.random() * 10) + 1, second: Math.floor(Math.random() * 10) + 1, operator: operators[(Math.floor(Math.random() * 10) + 1) % operators.length] }} />
}

export default RandomMathQuiz;