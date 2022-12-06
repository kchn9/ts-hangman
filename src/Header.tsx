type HeaderProps = {
  info: string;
  noOfWrongGuessess: number;
  playAgain: () => void;
};

const Header = (props: HeaderProps) => {
  const handleClick = () => {
    props.playAgain();
  };

  return (
    <header
      style={{
        padding: "24px 0 48px 0",
        margin: "0 48px",
        position: "relative",
      }}
    >
      <h1 style={{ textAlign: "center", margin: 0 }}>
        <button
          style={{
            fontSize: "1.2rem",
            padding: ".1rem 1rem",
            position: "absolute",
            top: "1.25rem",
            left: 0,
          }}
          onClick={handleClick}
        >
          Play again
        </button>
        {props.info || "The Hangman"}
      </h1>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "900",
          padding: ".1rem 1rem",
          position: "absolute",
          top: "1.35rem",
          right: 0,
        }}
      >
        <span style={{ color: "red" }}>{props.noOfWrongGuessess}/</span>
        <span>10</span>
      </div>
    </header>
  );
};

export { Header };
