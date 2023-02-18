import React from "react";
import styled from "styled-components";
import { logo } from "../../assets/img/img";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

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

export default function Admin(props) {
  function onDelete(id) {
    const newArr = props.data.filter((e) => e.id !== id);
    console.log(newArr);
    // props.setData({ ...newArr });
  }
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
            <Table striped bordered hover>
              <thead>
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
              </thead>
              <tbody>
                {props.person.map((i) => (
                  <tr key={i.id}>
                    <th>{i.id}</th>
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
                        <BiEdit />
                      </Button>
                      <Button onClick={() => onDelete(i.id)} variant="danger">
                        <MdDeleteOutline />
                      </Button>
                    </Buttons>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        </div>
      </Content>
    </>
  );
}
