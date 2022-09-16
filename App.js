import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #d4f0d7;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export default () => (
  <Container>
    <Title>Oi, clique no botão para um surpresa ;)</Title>
  </Container>
);