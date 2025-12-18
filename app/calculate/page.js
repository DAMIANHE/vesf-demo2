"use client";

import { useState } from "react";
import RadarVEFS from "../../components/RadarVEFS";
import TableVEFS from "../../components/TableVEFS";
import exampleData from "../../data/exampleData";
import { calculateImpact } from "../../utils/calculateImpact";

export default function Calculate() {
  const [inputData, setInputData] = useState(exampleData);
  const [resultData, setResultData] = useState(null);

  const handleCalculate = () => {
    const calculated = calculateImpact(inputData);
    setResultData(calculated);
  };

  return (
    <main style={{ padding: 32 }}>
      <h1>Calcule los impactos VAN de su organización</h1>

      {!resultData && (
        <>
          <TableVEFS
            data={inputData}
            editable={true}
            setData={setInputData}
          />
          <button onClick={handleCalculate} style={{ marginTop: 24 }}>
            Calcular impacto VAN
          </button>
        </>
      )}

      {resultData && (
        <>
          <RadarVEFS data={resultData} />
          <TableVEFS data={resultData} />
          <button onClick={() => window.print()} style={{ marginTop: 24 }}>
            Exportar PDF (DEMO)
          </button>
        </>
      )}
    </main>
  );
}
