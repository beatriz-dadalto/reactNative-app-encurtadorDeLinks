import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import WebView from 'react-native-webview';
import Clipboard from 'expo-clipboard';
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from './styles';
import { Feather } from '@expo/vector-icons';


const ModalLink = ({ onClose, data }) => {
  const [url, setUrl] = useState(data.link);
  const [go, setGo] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  function copyLink() {
    Clipboard.setString(data.link);
    alert('Link copiado com sucesso');
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
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
    } catch (error) {
      console.log(error.message);
    }
  }

  if (go == false) {
    return (
      <ModalContainer>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>
        <Container>
          <Header>
          <TouchableOpacity onPress={handleShare}>
              <Feather name="share" size={30} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={30} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" size={30} color="#333" />
            </TouchableOpacity>

          </Header>

          <LinkArea>
            <Title>Link encurtado</Title>
            <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>
            <ShortLinkArea activeOpacity={1} onPress={() => setGo(true)}>
              <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
              <TouchableOpacity>
                <Feather
                  name="external-link"
                  color="#FFF"
                  size={25}
                  onPress={() => setGo(true)}
                />
              </TouchableOpacity>
            </ShortLinkArea>
          </LinkArea>
        </Container>
      </ModalContainer>
    );
  } else {
    return (
      <>
        <WebView
          startInLoadingState={true}
          ref={webviewRef}
          source={{ uri: url }}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setCurrentUrl(navState.url);
          }}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={backButtonHandler}>
          <Feather
            name="arrow-left"
            color="#333"
            size={32}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGo(false)}>
            <Feather
            name="x"
            color="#e83f9e"
            size={32}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={frontButtonHandler}>
          <Feather
            name="arrow-right"
            color="#333"
            size={32}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

export default ModalLink;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  button: {
    color: 'white',
    fontSize: 16,
  },
});
