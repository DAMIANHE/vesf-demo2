"use client";

export default function TableVEFS({ data, editable = false, setData }) {
  const handleChange = (index, key, value) => {
    if (!setData) return;
    const newData = [...data];
    newData[index][key] = key === "variable" ? value : Number(value);
    setData(newData);
  };

  const addVariable = () => {
    if (!setData) return;
    setData([
      ...data,
      {
        variable: "Nueva variable",
        supuesto: 0,
        realidad: 0,
        peso: 0.1
      }
    ]);
  };

  return (
    <>
      <table border="1" cellPadding="6" style={{ marginTop: 24 }}>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Supuesto</th>
            <th>Realidad</th>
            <th>Peso Estratégico</th>

            {!editable && (
              <>
                <th>Impacto VAN (%)</th>
                <th>Impacto VAN ($)</th>
                <th>Nivel de Riesgo</th>
                <th>Recomendación</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>
                {editable ? (
                  <input
                    type="text"
                    value={row.variable}
                    onChange={e =>
                      handleChange(i, "variable", e.target.value)
                    }
                  />
                ) : (
                  row.variable
                )}
              </td>

              <td>
                {editable ? (
                  <input
                    type="number"
                    value={row.supuesto}
                    onChange={e =>
                      handleChange(i, "supuesto", e.target.value)
                    }
                  />
                ) : (
                  row.supuesto
                )}
              </td>

              <td>
                {editable ? (
                  <input
                    type="number"
                    value={row.realidad}
                    onChange={e =>
                      handleChange(i, "realidad", e.target.value)
                    }
                  />
                ) : (
                  row.realidad
                )}
              </td>

              <td>{row.peso}</td>

              {!editable && (
                <>
                  <td>{row.impactoVANPercent}%</td>
                  <td>
                    {row.impactoVANDollars < 0 ? "−" : ""}USD{" "}
                    {Math.abs(row.impactoVANDollars).toLocaleString()}
                  </td>
                  <td>{row.riesgo}</td>
                  <td>{row.recomendacion}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {editable && (
        <button onClick={addVariable} style={{ marginTop: 16 }}>
          Agregar variable
        </button>
      )}
    </>
  );
}
