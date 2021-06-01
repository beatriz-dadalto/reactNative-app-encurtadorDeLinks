import React from 'react';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import ListItem from '../../components/ListItem';
import {Container, Title, ListLinks } from './styles';

const MyLink = () => {
  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Menu />
      <Title>Meus Links</Title>

      <ListLinks 
        data={[ {id: 1, link: 'test.com'}, {id: 2, link: 'bia.com'} ]}
        keyExtractor={ (item) =>  String(item.id) }
        renderItem={ ({item}) => <ListItem data={item} /> }
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default MyLink;
