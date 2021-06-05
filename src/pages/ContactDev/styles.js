import styled from 'styled-components/native';

Container, Title, SocialMediaArea, Description;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-weight: 700;
  color: #fff;
`;

export const SocialMediaArea = styled.View`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgba(57, 0, 153, 0.5);
  border-radius: 100px;
  width: 140px;
  height: 140px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-top: 16px;
  font-weight: 700;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;
