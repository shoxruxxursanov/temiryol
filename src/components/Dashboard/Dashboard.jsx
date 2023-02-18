import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Admin from "./Admin";
const Dashboardd = styled.div`
  display: flex;
`;
export default function Dashboard() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Karimov.N.A",
      obektivka: "obektivka-1.pdf",
      turdavoy: "turdavoy-1.pdf",
      staj: "35",
      lavozimi: "mexanik",
      pasport: "AA1235689",
      manzil: "Toshkent shahar",
      tell: +998991234455,
      filial: "Toshkent",
    },
    {
      id: 2,
      name: "To'rayev.B.R",
      obektivka: "obektivka-2.pdf",
      turdavoy: "turdavoy-2.pdf",
      staj: "40",
      lavozimi: "eliktrik",
      pasport: "AA1235689",
      manzil: "Toshkent shahar",
      tell: +998991234455,
      filial: "Samarqand",
    },
    {
      id: 3,
      name: "Rahmatov.Sh.A",
      obektivka: "obektivka-3.pdf",
      turdavoy: "turdavoy-3.pdf",
      staj: "30",
      lavozimi: "Programmist",
      pasport: "AA1235620",
      manzil: "Toshkent shahar",
      tell: +998991234455,
      filial: "Termiz",
    },
  ]);
  console.log(data);
  const filial = [
    "Йўловчи вагонларни техник ва технологик тайёрлаш, таъмирлаш филиали;",
    "Халқаро йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
    "Маҳаллий йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
    "Тезюрар йўналишиларда йўловчиларга хизмат кўрсатиш филиали;",
    "Тошкент-Марказий вокзал филиали;",
    "Тошкент йўловчиларни ташишни ташкил этиш филиали;",
    "Самарқанд филиали;",
    "Қашқадарё филиали;",
    "Термиз филиали;",
    "Бухоро филиали;",
    "Оролбўйи филиали;",
    "Хоразм филиали;",
    "Фарғона филиали;",
    "“Railway Media” МЧЖ;",
    "“Xiva Lokomotiv” МЧЖ.",
  ];

  return (
    <Dashboardd>
      <Header filial={filial} />
      <Admin person={data} setData={setData} />
    </Dashboardd>
  );
}
