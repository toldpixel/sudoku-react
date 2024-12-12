import { Board } from "./components/Board";
import { InputForm } from "./components/InputForm";
import { useState, useEffect } from "react";

export default function App() {
  const [settings, setSettings] = useState({
    size: 4,
    difficulty: "Easy",
  });
  //const [difficulty, setDifficulty] = useState("");
  const [board, setBoard] = useState([]);

  useEffect(() => {
    if (settings.size && settings.difficulty) {
      fetchData(settings.size, settings.difficulty);
    }
  }, [settings]);

  useEffect(() => {
    if (board) {
      console.log("Received board data:", board);
    }
  }, [board]);

  async function fetchData(size = "4", difficulty = "Easy") {
    const url = `http://localhost:3000/board?size=${size}&difficulty=${difficulty}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setBoard(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div
      className="h-dvh bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/abstract.jpg')",
      }}
    >
      <div>
        <InputForm settings={settings} setSettings={setSettings} />
        {board ? <Board board={board} /> : <div></div>}
      </div>
    </div>
  );
}
