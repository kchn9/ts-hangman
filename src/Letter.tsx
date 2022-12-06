type LetterProps = {
  letter: string;
  guessedLetters: string[];
  isGuesssed: (letter: string) => boolean;
  showLetter: boolean;
};

const Letter = (props: LetterProps) => {
  return (
    <span
      style={{
        borderBottom: ".4rem solid #000",
        paddingBottom: "1.5rem",
      }}
    >
      <span
        style={{
          visibility:
            props.isGuesssed(props.letter) || props.showLetter
              ? "visible"
              : "hidden",
        }}
      >
        {props.isGuesssed(props.letter) || props.showLetter
          ? props.letter
          : "X"}
      </span>
    </span>
  );
};

export { Letter };
