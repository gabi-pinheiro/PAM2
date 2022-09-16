import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';


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

const Button = styled.Button`
  background-color: #fff;
  width: 50%;
`;

export default () => (
  <Container>
    <Title>Oi, clique no botão para um surpresa ;)</Title>
    <Button title="clique" onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}></Button>
  </Container>
);