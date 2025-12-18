import { VAN_BASE_DEMO } from "../data/vanBase";

export function calculateImpact(data) {
  return data.map(item => {
    const brecha =
      item.supuesto === 0
        ? 0
        : (item.realidad - item.supuesto) / item.supuesto;

    const impactoVANPercent = brecha * item.peso * 100;
    const impactoVANDollars =
      (impactoVANPercent / 100) * VAN_BASE_DEMO;

    let riesgo = "Bajo";
    if (impactoVANPercent <= -4) riesgo = "Crítico";
    else if (impactoVANPercent <= -2) riesgo = "Alto";
    else if (impactoVANPercent <= -1) riesgo = "Medio";

    return {
      ...item,
      impactoVANPercent: Number(impactoVANPercent.toFixed(2)),
      impactoVANDollars: Math.round(impactoVANDollars),
      riesgo,
      recomendacion: item.recomendacion || "Revisar variable"
    };
  });
}
