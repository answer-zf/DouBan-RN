import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {doubanAPI} from '../../app.json';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieinfo: {},
      isLoading: true,
    };
  }
  UNSAFE_componentWillMount() {
    fetch(
      `https://api.douban.com/v2/movie/subject/${this.props.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movieinfo: data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <View>{this.renderInfo()}</View>;
  }
  renderInfo = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
    return (
      <ScrollView>
        <View style={{padding: 4}}>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              fontSize: 25,
              textAlign: 'center',
            }}>
            {this.state.movieinfo.title}
          </Text>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: this.state.movieinfo.images.large}}
              style={{width: 200, height: 280}}></Image>
          </View>
          <Text style={{lineHeight: 30, marginTop: 20}}>
            {this.state.movieinfo.summary}
          </Text>
        </View>
      </ScrollView>
    );
  };
}
