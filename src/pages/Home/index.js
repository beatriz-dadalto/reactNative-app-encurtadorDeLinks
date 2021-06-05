import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import { Feather } from '@expo/vector-icons';
import { saveLink } from '../../utils/storeLinks';

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from './styles';
import api from '../../services/api';

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const initURL = 'https://';
  const [input, setInput] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [data, setData] = React.useState({});

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('/shorten', {
        long_url: input,
      });
      setData(response.data);
      setModalVisible(true);

      saveLink('BLinks', response.data);

      Keyboard.dismiss();
      setLoading(false);
      setInput(initURL);
    } catch (error) {
      alert(`Seu link deve iniciar com https://
      
      Exemplo: https://youtube.com`);
      console.log(`${error}`);
      Keyboard.dismiss();
      setInput(initURL);
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#390099', '#e83f9e']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage barStyle="light-content" backgroundColor="#390099" />

        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require('../../assets/Logo.png')}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>BLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#FFF" />
              </BoxIcon>
              <Input
                textContentType="URL"
                placeholder="https://www.exemplo.com"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                KeyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
