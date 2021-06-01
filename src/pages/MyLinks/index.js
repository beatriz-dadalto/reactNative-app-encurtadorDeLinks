import React from 'react';
import { View, Text } from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

const MyLink = () => {
  return (
    <View>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Text>Página MyLink</Text>
    </View>
  );
};

export default MyLink;
