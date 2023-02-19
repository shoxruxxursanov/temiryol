import React  from "react";
import {useState} from "react";
import styled from "styled-components";
import Header from "../header/header";
import Admin from "./Admin";
const Dashboardd = styled.div`
  display: flex;
`;
export default function Dashboard() {
 
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
      <Admin  />
    </Dashboardd>
  );
}
