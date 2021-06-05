import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import ListItem from '../../components/ListItem';
import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText,
} from './styles';
import { useIsFocused } from '@react-navigation/native';
import { deleteLink, getLinksSaved } from '../../utils/storeLinks';
import ModalLink from '../../components/ModalLink';

const MyLink = () => {
  const isFocused = useIsFocused();
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved('BLinks');
      setLinks(result);
      setLoading(false);
    }

    getLinks();
  }, [isFocused]);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#390099" />
      <LinearGradient
        colors={['#390099', '#e83f9e']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Menu />
        <Title>Meus Links</Title>

        {loading && (
          <ContainerEmpty>
            <ActivityIndicator color="#121212" size={25} />
          </ContainerEmpty>
        )}

        {!loading && links.length === 0 && (
          <ContainerEmpty>
            <WarningText>Você ainda não possui links! </WarningText>
          </ContainerEmpty>
        )}

        <ListLinks
          data={links}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ListItem
              data={item}
              selectedItem={handleItem}
              deleteItem={handleDelete}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </Container>
  );
};

export default MyLink;