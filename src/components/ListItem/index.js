import React from 'react'
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ContainerButton, Item } from './styles';

const ListItem = () => {
  return (
    <View>
        <ContainerButton 
        activeOpacity={0.9}
        onPress={ () => alert('Foi copiado')}
        >
          <Feather 
            name="link"
            color="#FFF"
            size={24}
          />
          <Item numberOfLines={1}>link aqui</Item>
        </ContainerButton>
    </View>
  )
}

export default ListItem;
