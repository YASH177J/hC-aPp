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
import { LinearGradient } from 'expo-linear-gradient';
import db from '../config';

import { ListItem } from 'react-native-elements';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReports: [],
      userId: firebase.auth().currentUser.email,
    };
  }
  getAllReports() {
    db.collection('reports')
      .where('userId', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allReports = [];
        snapshot.docs.map((doc) => {
          var report = doc.data();
          report['doc_id'] = doc.id;
         allReports.push(report);
        });
        this.setState({
         allReports:allReports,
        });

      });
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('ViewReportScreen', {
          reports: item,
        });
      }}
      style={styles.cardContainer}>
   
      <View
        style={{
          paddingLeft: 10,
          width: '100%',
        }}>
        <Text
          style={[styles.input, { fontSize: 14 }]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          Description: {item.oxygenLevel}
        </Text>
        <Text
          style={[styles.input, { fontSize: 14 }]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          Description: {item.feverLevel}
        </Text>
         <Text
          style={[styles.input, { fontSize: 14 }]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          Description: {item.pulseRate}
        </Text>
      </View>
    </TouchableOpacity>
  );

  componentDidMount() {
    this.getAllReports();
  }
  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          centerComponent={{
            text: 'Your Reports',
            style: {
              fontWeight: 'bold',
              fontSize: 19,
              color: 'white',
            },
          }}
          backgroundColor={'rgb(242, 175, 41)'}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.allReports}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderRadius: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'rgb(242, 175, 41)',
  },
  input: {
    flex: 1,
    width: '60%',
    fontSize: 16,
    padding: 5,
  },
});
