import React from 'react';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Title, SocialMediaArea, Description,TouchableOpacity } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

const ContactDev = () => {
  return (
    <LinearGradient
      colors={['#390099', '#e83f9e']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Menu />
      <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#390099" />
        <Title>Social Medias</Title>
        <SocialMediaArea>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/biacoelho')}
          >
            <Feather name="github" color="#FFF" size={32} />
            <Description>Github</Description>
          </TouchableOpacity>
        </SocialMediaArea>
        <SocialMediaArea>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/biacoelho')
            }
          >
            <Feather name="linkedin" color="#FFF" size={32} />
            <Description>Linkedin</Description>
          </TouchableOpacity>
        </SocialMediaArea>
      </Container>
    </LinearGradient>
  );
};

export default ContactDev;
