import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {doubanAPI} from '../../app.json';
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nowPage: 1,
      totalPage: 0,
      pageSize: 15,
      isLoading: true,
    };
  }
  UNSAFE_componentWillMount() {
    this.getMoviesByPage();
  }
  render() {
    return <View>{this.renderListHandle()}</View>;
  }
  getMoviesByPage = () => {
    const start = (this.state.nowPage - 1) * this.state.pageSize;
    const url = `${doubanAPI}top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          movies: this.state.movies.concat(data.subjects),
          totalPage: Math.ceil(data.total / this.state.pageSize),
        });
      })
      .catch((err) => console.log(err));
  };
  renderListHandle = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
    return (
      <FlatList
        data={this.state.movies}
        renderItem={({item}) => this.renderItemHandle(item)}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={this.renderSeparatorHandle} // 渲染分割线属性
        onEndReachedThreshold={0.5} // 距离底部多远触发加载更多事件
        onEndReached={this.loadNextPageHandle}
      />
    );
  };
  renderItemHandle = (item) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => {
          Actions.moviedetail({id: item.id});
        }}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            source={{uri: item.images.small}}
            style={{width: 100, height: 140, marginRight: 10}}></Image>
          <View style={{justifyContent: 'space-around'}}>
            <Text>
              <Text style={styles.movieTitle}>电影名称：</Text>
              {item.title}
            </Text>
            <Text>
              <Text style={styles.movieTitle}>电影类型：</Text>
              {item.genres.join(',')}
            </Text>
            <Text>
              <Text style={styles.movieTitle}>制作年份：</Text>
              {item.year}
            </Text>
            <Text>
              <Text style={styles.movieTitle}>豆瓣评分：</Text>
              {item.rating.average}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  renderSeparatorHandle = () => {
    return (
      <View
        style={{
          borderColor: '#ccc',
          borderWidth: 1,
          marginLeft: 10,
          marginRight: 10,
        }}></View>
    );
  };
  loadNextPageHandle = () => {
    if (this.state.nowPage + 1 > this.state.totalPage) {
      return;
    }
    this.setState(
      {
        nowPage: this.state.nowPage + 1,
      },
      function () {
        this.getMoviesByPage();
      },
    );
  };
}

const styles = StyleSheet.create({
  movieTitle: {
    fontWeight: 'bold',
  },
});
