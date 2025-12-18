"use client";

import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function RadarVEFS({ data }) {
  const [mode, setMode] = useState("operativo");
  const dataKey =
    mode === "operativo" ? "realidad" : "impactoVANPercent";

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setMode("operativo")}>
          Impacto operativo
        </button>
        <button
          onClick={() => setMode("economico")}
          style={{ marginLeft: 8 }}
        >
          Impacto económico (VAN)
        </button>
      </div>

      <RadarChart width={500} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="variable" />
        <PolarRadiusAxis
          domain={mode === "operativo" ? [0, 100] : [-6, 0]}
        />
        <Radar
          dataKey={dataKey}
          stroke="#00e5ff"
          fill="#00e5ff"
          fillOpacity={0.6}
        />
      </RadarChart>

      <p style={{ fontSize: 12, color: "#aaa", marginTop: 8 }}>
        Todas las fórmulas matemáticas se encuentran disponibles en la versión
        Comercial de VEFS.
      </p>
    </>
  );
}
