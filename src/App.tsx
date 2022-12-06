import { useState, useEffect, useMemo } from "react";
import { Header } from "./Header";
import { HangmanDrawing } from "./HangmanDrawing";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";
import wordlist from "./wordlist.json";

enum GameState {
  INPLAY,
  WIN,
  LOSE,
}

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.INPLAY);
  const playAgain = () => {
    setGameState(GameState.INPLAY);
    setWord(wordlist[Math.floor(Math.random() * wordlist.length)]);
    setGuessedLetters([]);
  };
  const [word, setWord] = useState<string>(() => {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  useEffect(() => {
    if (
      noOfWrongGuessess < 10 &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setGameState(GameState.WIN);
    } else if (noOfWrongGuessess >= 10) {
      setGameState(GameState.LOSE);
    } else {
      setGameState(GameState.INPLAY);
    }
  }, [guessedLetters]);
  const noOfWrongGuessess = useMemo(
    () =>
      guessedLetters
        .map((letter: string) => (word.includes(letter) ? 0 : 1))
        .reduce((prev: number, current: number) => prev + current, 0),
    [guessedLetters]
  );
  const isGuesssed = (letter: string): boolean => {
    return guessedLetters.includes(letter);
  };
  const guessLetter = (letter: string): void => {
    setGuessedLetters((prev) => [...prev, letter]);
  };

  return (
    <div>
      <Header
        info={
          gameState === GameState.INPLAY
            ? "The Hangman"
            : gameState === GameState.WIN
            ? "Congratz! You win!"
            : GameState.LOSE && "Game over! You lost!"
        }
        noOfWrongGuessess={noOfWrongGuessess}
        playAgain={playAgain}
      />
      <HangmanDrawing noOfWrongGuessess={noOfWrongGuessess} />
      <Word
        word={word}
        guessedLetters={guessedLetters}
        isGuesssed={isGuesssed}
        showWord={gameState !== GameState.INPLAY}
      />
      {gameState === GameState.INPLAY && (
        <Keyboard
          guessedLetters={guessedLetters}
          isGuesssed={isGuesssed}
          guessLetter={guessLetter}
        />
      )}
    </div>
  );
}

export default App;
