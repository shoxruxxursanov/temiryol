import React from "react";
import styled from "styled-components";
import { logo } from "../../assets/img/img";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

const Content = styled.div`
  width: 80%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Tittle = styled.h1``;
const Input = styled.input`
  width: 100%;
  padding: 20px;
  outline: none;
`;
const Buttons = styled.td`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export default function Admin() {
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
  const Tablee = styled.div`
    overflow-y: scroll;
    height: 300px;
    width: 100%;
  `;
  const Thead = styled.thead`
    position: sticky;
    background-color: grey;
    top: 0;
`;
  const { modal, toggleModal, CloseModal } = useModal();
  return (
    <>
      <Content>
        <div className="container">
          <Box>
            <Nav>
              <Tittle>O`ztemiryo`l yo`lovchi АЖ</Tittle>
              <Logo src={logo} />
            </Nav>
            <Input placeholder="search...." />
            <Tablee>
              <Table striped bordered hover>
                <Thead>
                  <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                  </tr>
                </Thead>
                <tbody>
                  {data.map((i, id) => (
                    <tr key={id}>
                      <th>{id + 1}</th>
                      <td>{i.name}</td>
                      <td>{i.obektivka}</td>
                      <td>{i.turdavoy}</td>
                      <td>{i.staj}</td>
                      <td>{i.lavozimi}</td>
                      <td>{i.pasport}</td>
                      <td>{i.manzil}</td>
                      <td>{i.tell}</td>
                      <td>{i.filial}</td>
                      <Buttons>
                        <Button variant="primary">
                          <BiEdit onClick={() => toggleModal()} />
                        </Button>
                        <Button
                          id={id}
                          onClick={() =>
                            setData((item) => {
                              return item.filter((e) => e.id !== i.id);
                            })
                          }
                          variant="danger"
                        >
                          <MdDeleteOutline />
                        </Button>
                      </Buttons>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tablee>
            {modal ? <Modal close={CloseModal} /> : null}
          </Box>
        </div>
      </Content>
    </>
  );
}
