import { Letter } from "./Letter";

type WordProps = {
  word: string;
  guessedLetters: string[];
  isGuesssed: (letter: string) => boolean;
  showWord: boolean;
};

const Word = (props: WordProps) => {
  const letterArray = props.word.split("");

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "fit-content",
        margin: "4rem auto 0 auto",
        fontSize: "5rem",
      }}
    >
      {letterArray.map((letter, index) => (
        <Letter
          showLetter={props.showWord}
          key={index}
          letter={letter}
          guessedLetters={props.guessedLetters}
          isGuesssed={props.isGuesssed}
        />
      ))}
    </div>
  );
};

export { Word };
