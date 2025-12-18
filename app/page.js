"use client";

import Image from "next/image";
import RadarVEFS from "../components/RadarVEFS";
import TableVEFS from "../components/TableVEFS";
import exampleData from "../data/exampleData";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>

      {/* CARÁTULA */}
      <section style={{ marginBottom: 40 }}>
        <Image
          src="/cover.jpg"
          alt="VEFS – Riesgo invisible y VAN"
          width={1200}
          height={600}
          style={{ width: "100%", borderRadius: 8 }}
          priority
        />
        <h1 style={{ marginTop: 20 }}>VEFS</h1>
        <p>
          Ejemplo aplicado a una Cooperativa de Ahorro y Crédito.
          Visualización del impacto económico de riesgos invisibles.
        </p>
      </section>

      <RadarVEFS data={exampleData} />
      <TableVEFS data={exampleData} />

      <Link href="/calculate">
        <button style={{ marginTop: 24 }}>
          Calcule los impactos VAN de su organización
        </button>
      </Link>
    </main>
  );
}
