import React from "react";
import Form from "../components/Form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Login() {
  return (
    <Container>
      <Form />
    </Container>
  );
}
