import React from "react";
import styled from "styled-components";

const Headerr = styled.header`
  width: 20%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: grey;
  padding: 50px 30px;
  gap: 30px;
`;
const Flial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  padding-right: 30px;
  padding-left: 30px;
  height: 70vh;
  overflow: hidden;
  overflow-y: scroll;
`;
const Item = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
const Tittle = styled.h1``;
export default function Header(props) {
  return (
    <Headerr>
      <Tittle>Flial</Tittle>
      <Flial>
        {props.filial.map((i) => (
          <Item>{i}</Item>
        ))}
      </Flial>
    </Headerr>
  );
}
