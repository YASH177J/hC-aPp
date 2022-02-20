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
  Image,
} from 'react-native';
import firebase from 'firebase';
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

import { LinearGradient } from 'expo-linear-gradient';
export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/HCSplashScreen.png')}
          style={styles.image}>
          <Image source={require("../assets/HEALTH_CHECK_LOGO-removebg-preview.png")}
          style={{width:190, height:190, right:50}}/>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>Get Started > </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(247, 154, 4)',
    borderRadius: 20,
    marginTop: 100,
    left: 70
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold"
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
});
