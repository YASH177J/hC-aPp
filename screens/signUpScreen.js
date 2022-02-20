import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { Image } from 'react-native';
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
import firebase from 'firebase';
import db from "../config"
export default class SignUpScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      contact: '',
      address: '',
      confirmPassword: '',
    };
  }

  signUp = (email, password, confirmPassword) => {
    if (password != confirmPassword) {
      alert("Passwords don't match");
      Alert.alert("Passwords don't match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').add({
            name: this.state.firstName,
            contact: this.state.contact,
            email: this.state.email,
            address: this.state.address,
          });
          alert('User added successfully');
          Alert.alert('User added successfully');
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
          var errorcode = error.code;
          var errorM = error.message;
          console.log(errorM);
        });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
         style={styles.image}>
           <Image source={require("../assets/HCName.png")}
          style={{width:250, height:250, resizeMode: 'contain',left:30}}/>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={[styles.inputContainer, { marginTop: 10 }]}>
                <View style={styles.iconStyle}>
                  <AntDesign name={'user'} size={25} color="rgb(232, 149, 16)" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder={'Name'}
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    this.setState({
                      firstName: text,
                    });
                  }}
                  value={this.state.firstName}
                />
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.iconStyle}>
                  <Entypo name={'mail'} size={25} color="rgb(232, 149, 16)" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder={'Email Id'}
                  placeholderTextColor="white"
                  keyboardType={'email-address'}
                  onChangeText={(text) => {
                    this.setState({
                      email: text,
                    });
                  }}
                  value={this.state.email}
                />
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.iconStyle}>
                  <AntDesign name={'eye'} size={25} color="rgb(232, 149, 16)" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                  value={this.state.password}
                />
              </View>
              <View style={[styles.inputContainer, { marginBottom: 20 }]}>
                <View style={styles.iconStyle}>
                  <AntDesign name={'eyeo'} size={25} color="rgb(232, 149, 16)" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder={'Confirm Password'}
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({
                      confirmPassword: text,
                    });
                  }}
                  value={this.state.confirmPassword}
                />
              </View>

              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => {
                  this.signUp(
                    this.state.email,
                    this.state.password,
                    this.state.confirmPassword
                  );
                }}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    marginTop: 10,
                    marginBottom: 20,
                    color:"white",
                  }}>
                  Already a user? Sign in here
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signUpButton: {
  width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(232, 149, 16)",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(36, 165, 229)',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '95%',
    height: 50,
    borderColor: '#2A299A',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#2A299A',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 5,
    fontSize: 16,
    color: 'white',
  },
});