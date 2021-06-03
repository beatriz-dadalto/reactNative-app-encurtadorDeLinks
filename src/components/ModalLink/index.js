import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';
import Clipboard from 'expo-clipboard';
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';

const ModalLink = ({ onClose, data }) => {

  function copyLink() {
    Clipboard.setString(data.link);
    alert('Link copiado com sucesso');
  }

  async function handleShare() {
    try {
      const result  = await Share.share({
        message: `Link: ${data.link}`
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
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>
          <ShortLinkArea
            activeOpacity={1}
            onPress={copyLink}
          >
            <ShortLinkUrl numberOfLines={1}>
              {data.link}
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
