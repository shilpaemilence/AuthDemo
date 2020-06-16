import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import Modal from 'react-native-modal';
const LoadingComponent = ({isVisible, text}) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.3}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3e42ff" />
        <Text style={styles.text}>{text ? text : 'Loading...'}</Text>
      </View>
    </Modal>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    width: '60%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius:10
  },
  text: {
    marginLeft: '5%',
  },
});
