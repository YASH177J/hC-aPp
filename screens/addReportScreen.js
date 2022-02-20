import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import { Header, Icon , Avatar } from 'react-native-elements';
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
import Time from '../components/Time'
import db from '../config';
export default class AddReportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: firebase.auth().currentUser.email,
      oxygenLevel: '',
      feverLevel: '',
      pulseRate: '',
      extraBox: ''
    };
  }

   createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addReport = () => {
    db.collection('reports').add({
      userId: this.state.emailId,
      oxygenLevel: this.state.oxygenLevel,
      feverLevel: this.state.feverLevel,
      pulseRate: this.state.pulseRate,
      extraBox: this.state.extraBox,
    });
    alert('Report Added');
    Alert.alert('Report Added');
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Header
            centerComponent={{
              text: 'Add A Report',
              style: {
                fontWeight: 'bold',
                fontSize: 19,
                color: 'white',
              },
            }}
            backgroundColor={'rgb(242, 175, 41)'}
          />
          <Time/>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.textinput}
              placeholder={'OXYGEN LEVEL'}
              onChangeText={(text) => {
                this.setState({
                  oxygenLevel: text,
                });
              }}
              value={this.state.oxygenLevel}
            />
            <TextInput
              style={styles.textinput2}
              placeholder={'FEVER LEVEL'}
              onChangeText={(text) => {
                this.setState({
                  feverLevel: text,
                });
              }}
              value={this.state.feverLevel}
            />
            <TextInput
              style={styles.textinput2}
              placeholder={'PULSE RATE'}
              onChangeText={(text) => {
                this.setState({
                  pulseRate: text,
                });
              }}
              value={this.state.pulseRate}
            />
            <TextInput
              style={styles.textinput2}
              placeholder={'DATE'}
              onChangeText={(text) => {
                this.setState({
                  extraBox: text,
                });
              }}
              value={this.state.extraBox}
            />
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                this.addReport();
              }}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(59, 157, 206)',
    borderRadius: 20,
  },
  textinput: {
    marginTop: 3,
    marginBottom: 3,
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  textinput2: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    height: 100,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
});
