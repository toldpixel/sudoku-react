function Square({ col, onSquareClick }) {
  return (
    <button
      className="p-4 border border-black w-20 h-20"
      onClick={onSquareClick}
    >
      {col === "." ? "" : col}
    </button>
  );
}

export function Board({ board }) {
  function handleSquareClick(rowIdx, colIdx) {
    console.log(`Clicked square at row ${rowIdx}, col ${colIdx}`);
  }

  return (
    <div className="m-4">
      <div>
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="flex bg-white">
            {row.map((col, colIdx) => (
              <Square
                key={`${rowIdx}-${colIdx}`}
                col={col}
                onSquareClick={() => handleSquareClick(rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
