import { useState } from "react";

export default function App() {
  const [cr, setCr] = useState(0);
  const [newNumber, setNewNumber] = useState("");

  const addNumber = () => {
    if (newNumber === "") {
      setNewNumber("");
      alert("값을 입력하세요.");
      return;
    }
    setCr(cr + parseInt(newNumber));
    setNewNumber("");
  };

  const subNumber = () => {
    if (newNumber === "") {
      setNewNumber("");
      alert("값을 입력하세요.");
      return;
    }
    setCr(cr - parseInt(newNumber));
    setNewNumber("");
  };

  const initNumber = () => {
    setCr(0);
    setNewNumber("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="text"
          value={newNumber}
          onChange={(event) => {
            setNewNumber(event.target.value);
          }}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            addNumber();
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            subNumber();
          }}
        >
          뺄게요
        </button>
        <button
          onClick={() => {
            initNumber();
          }}
        >
          초기화
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{cr}</p>
      </div>
    </div>
  );
}
