import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
  Image,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import db from '../config';

import { ListItem } from 'react-native-elements';
export default class ViewReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oxygenLevel:
        this.props.navigation.getParam('reports')['oxygenLevel'],
      feverLevel:
        this.props.navigation.getParam('reports')['feverLevel'],
      pulseRate:
        this.props.navigation.getParam('reports')['pulseRate'],
      extraBox:
        this.props.navigation.getParam('reports')['extraBox'],
      docId: this.props.navigation.getParam('reports')['doc_id'],
      userId: firebase.auth().currentUser.email,
    };
  }
  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'rgb(242, 175, 41)' }}>
        <Header
          centerComponent={{
            text: 'Report Details',
            style: {
              fontWeight: 'bold',
              fontSize: 19,
              color: 'white',
            },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="white"
              size={24}
              onPress={() => this.props.navigation.goBack()}
            />
          }
          backgroundColor={'rgb(242, 175, 41)'}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
            margin: 20,
            backgroundColor: '#fff',
            borderRadius: 20,
          }}>
          <Text style={{ margin: 10 }}>
            OXYGEN LEVEL: {this.state.oxygenLevel}
          </Text>
          <Text style={{ margin: 10, color: 'black' }}>
            FEVER LEVEL: {this.state.feverLevel}
          </Text>
          <Text style={{ color: 'black', margin: 10 }}>
           PULSE RATE: {this.state.pulseRate}
          </Text>
          <Text style={{ color: 'black', margin: 10 }}>
           DATE: {this.state.extraBox}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(59, 157, 206)',
              width: '60%',
              alignSelf: 'center',
              borderRadius: 10,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => {
              db.collection('reports').doc(this.state.docId).delete();
              this.props.navigation.goBack();
            }}>
            <Text style={{ color: 'white' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}