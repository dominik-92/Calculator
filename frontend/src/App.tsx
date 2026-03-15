import { useState } from "react";
import { calculate } from "./api/calcApi"

function App() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("+");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null)

  const calculateRemote = async () => {

    setError(null)

    try {

      const data = await calculate({
        a,
        b,
        op
      })

      setResult(data.result)

    } catch (e: any) {

      setError(e.message)
      setResult(null)

    }
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Calculator</h1>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <select
        value={op}
        onChange={(e) => setOp(e.target.value)}
      >
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>

      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <button onClick={calculateRemote}>
        =
      </button>

      <h2>Result: {result}</h2>

      {error && (
        <div style={{ color: "red" }}>
          {error}
        </div>
      )}

    </div>
  );
}

export default App;