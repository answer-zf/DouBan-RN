import React, {Component} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import {fetchRoot} from '../../app.json';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
    };
  }
  UNSAFE_componentWillMount() {
    fetch(`${fetchRoot}api/getlunbo`)
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        this.setState({
          slides: data.message,
        }),
      );
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{height: 220}}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            autoplay={true}
            loop={true}>
            {this.state.slides.map((item, i) => {
              return (
                <View key={i}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{uri: item.img}}></Image>
                </View>
              );
            })}
          </Swiper>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../images/menu1.png')}
              style={{width: 60, height: 60}}></Image>
            <Text>Item</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: '33.33%',
    marginTop: 15,
    alignItems: 'center',
  },
});
