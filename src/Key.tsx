type KeyProps = {
  letter: string;
  guessedLetters: string[];
  isGuesssed: (letter: string) => boolean;
  guessLetter: (letter: string) => void;
};

const Key = (props: KeyProps) => {
  const handleClick = () => {
    props.guessLetter(props.letter);
  };

  return (
    <button
      disabled={props.isGuesssed(props.letter)}
      onClick={handleClick}
      style={{
        fontSize: "1.5rem",
        padding: ".2rem 0",
      }}
    >
      {props.letter}
    </button>
  );
};

export { Key };
