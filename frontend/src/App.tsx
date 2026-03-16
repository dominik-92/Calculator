import { useState } from "react";
import { calculate } from "./api/calcApi"
import "./calculator.css"

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNumberClick = (num: string) => {
    setError(null);
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimal = () => {
    setError(null);
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperation = (op: string) => {
    setError(null);
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      // Calculate intermediate result
      handleEquals(true, op);
      return;
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const handleEquals = async (isChaining = false, nextOp?: string) => {
    setError(null);
    const currentValue = parseFloat(display);

    if (previousValue === null || operation === null) {
      return;
    }

    try {
      const data = await calculate({
        a: previousValue,
        b: currentValue,
        op: operation
      });

      const resultStr = data.result.toString();
      setDisplay(resultStr);

      if (isChaining && nextOp) {
        setPreviousValue(data.result);
        setOperation(nextOp);
        setWaitingForNewValue(true);
      } else {
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(true);
      }
    } catch (e: any) {
      setError(e.message || "Calculation error");
      setDisplay("0");
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
    setError(null);
  };

  const handleBackspace = () => {
    setError(null);
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleToggleSign = () => {
    setError(null);
    const value = parseFloat(display);
    setDisplay((value * -1).toString());
  };

  const handlePercentage = () => {
    setError(null);
    const value = parseFloat(display);
    setDisplay((value / 100).toString());
  };

  return (
    <div className="app-container">
      <h1>Calculator</h1>
      
      <div className="calculator">
        <div className={`display ${error ? 'error' : ''}`}>
          {error || display}
        </div>

        <div className="buttons-grid">
          {/* Row 1 */}
          <button className="btn btn-function" onClick={handleClear}>C</button>
          <button className="btn btn-function" onClick={handleToggleSign}>+/-</button>
          <button className="btn btn-function" onClick={handlePercentage}>%</button>
          <button className="btn btn-operator" onClick={() => handleOperation("+")}>+</button>

          {/* Row 2 */}
          <button className="btn" onClick={() => handleNumberClick("7")}>7</button>
          <button className="btn" onClick={() => handleNumberClick("8")}>8</button>
          <button className="btn" onClick={() => handleNumberClick("9")}>9</button>
          <button className="btn btn-operator" onClick={() => handleOperation("-")}>−</button>

          {/* Row 3 */}
          <button className="btn" onClick={() => handleNumberClick("4")}>4</button>
          <button className="btn" onClick={() => handleNumberClick("5")}>5</button>
          <button className="btn" onClick={() => handleNumberClick("6")}>6</button>
          <button className="btn btn-operator" onClick={() => handleOperation("*")}>×</button>

          {/* Row 4 */}
          <button className="btn" onClick={() => handleNumberClick("1")}>1</button>
          <button className="btn" onClick={() => handleNumberClick("2")}>2</button>
          <button className="btn" onClick={() => handleNumberClick("3")}>3</button>
          <button className="btn btn-operator" onClick={() => handleOperation("/")}>/</button>

          {/* Row 5 */}
          <button className="btn btn-zero" onClick={() => handleNumberClick("0")}>0</button>
          <button className="btn" onClick={handleDecimal}>.</button>
          <button className="btn btn-operator btn-equals" onClick={() => handleEquals()}>=</button>
        </div>

        {/* Backspace button below grid */}
        <button className="btn btn-backspace" onClick={handleBackspace}>← Backspace</button>
      </div>
    </div>
  );
}

export default App;