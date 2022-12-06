import { Key } from "./Key";

const KEYS: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type KeyboardProps = {
  guessedLetters: string[];
  isGuesssed: (letter: string) => boolean;
  guessLetter: (letter: string) => void;
};

const Keyboard = (props: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        margin: "52px",
        paddingBottom: "52px",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gridAutoRows: "30px",
        gridAutoFlow: "row",
        justifyContent: "center",
        placeItems: "center stretch",
      }}
    >
      {KEYS.map((letter, index) => (
        <Key
          key={index}
          letter={letter}
          guessedLetters={props.guessedLetters}
          isGuesssed={props.isGuesssed}
          guessLetter={props.guessLetter}
        />
      ))}
    </div>
  );
};

export { Keyboard };
