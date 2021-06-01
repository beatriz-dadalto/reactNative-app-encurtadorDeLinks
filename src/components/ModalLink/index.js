import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';
import Clipboard from 'expo-clipboard';
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';

const ModalLink = ({ onClose }) => {

  function copyLink() {
    Clipboard.setString('https://github.com/biacoelho');
    alert('Link copiado com sucesso');
  }

  async function handleShare() {
    try {
      const result  = await Share.share({
        message: `Link: https://seulink.com.br`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActiveType');
        } else {
          console.log('Compartilhado com sucesso');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Modal foi fechado');
      }
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container >
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather 
              name="x"
              size={30}
              color="#212743"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather 
              name="share"
              size={30}
              color="#212743"
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://github.com/biacoelho</LongUrl>
          <ShortLinkArea
            activeOpacity={1}
            onPress={copyLink}
          >
            <ShortLinkUrl numberOfLines={1}>
              https://bit.ly/ba56
            </ShortLinkUrl>
            <TouchableOpacity>
              <Feather 
                name="copy"
                color="#FFF"
                size={25}
                
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  )
}

export default ModalLink;
