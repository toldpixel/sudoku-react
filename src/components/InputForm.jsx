import { useState } from "react";

export function InputForm({ settings, setSettings }) {
  const [inputValueSize, setInputValueSize] = useState(4);
  const [inputValueDifficulty, setInputValueDifficutly] = useState("Easy");

  function handleChangeSize(event) {
    setInputValueSize(event.target.value);
  }

  function handleChangeDifficulty(event) {
    setInputValueDifficutly(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    settings.size = inputValueSize;
    settings.difficulty = inputValueDifficulty;
    setSettings({ ...settings });
  }
  return (
    <div>
      <form
        className="space-x-4 flex flex-col text-center space-y-5"
        onSubmit={handleSubmit}
      >
        <label className="text-sm p-2 font-bold" htmlFor="">
          Size
        </label>
        <select
          type="select"
          className="w-24"
          value={inputValueSize}
          onChange={handleChangeSize}
        >
          <option value={4}>4x4</option>
          <option value={9}>9x9</option>
        </select>
        <select
          type="select"
          className="w-24"
          value={inputValueDifficulty}
          onChange={handleChangeDifficulty}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
        </select>

        <button
          className="p-1 m-2 shadow border rounded bg-slate-400"
          type="submit"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
