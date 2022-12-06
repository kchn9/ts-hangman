import "./drawings.css";

const basis = <div key={1} className="hangman-basis" />;
const column = <div key={2} className="hangman-column" />;
const bar = <div key={3} className="hangman-bar" />;
const rope = <div key={4} className="hangman-rope" />;
const head = <div key={5} className="hangman-head" />;
const body = <div key={6} className="hangman-body" />;
const rightHand = <div key={7} className="hangman-righthand" />;
const leftHand = <div key={8} className="hangman-lefthand" />;
const rightLeg = <div key={9} className="hangman-rightleg" />;
const leftLeg = <div key={10} className="hangman-leftleg" />;

const drawings: Array<JSX.Element> = [
  basis,
  column,
  bar,
  rope,
  head,
  body,
  rightHand,
  leftHand,
  rightLeg,
  leftLeg,
];

type HangmanDrawingProps = {
  noOfWrongGuessess: number;
};

const HangmanDrawing = (props: HangmanDrawingProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "17.625rem",
        margin: "0 auto",
        minHeight: "25rem",
      }}
    >
      {drawings.slice(0, props.noOfWrongGuessess).reverse()}
    </div>
  );
};

export { HangmanDrawing };
