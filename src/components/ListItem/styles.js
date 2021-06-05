import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 6px 10px;
  padding: 12px;
  border-radius: 6px;
`;

export const Item = styled.Text`
  color: #FFF;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 18px;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 13%;
  background-color: #FF5555;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin: 6px 10px;
`;
