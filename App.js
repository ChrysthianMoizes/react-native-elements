import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { 
  Button, 
  Avatar, 
  Badge, 
  ButtonGroup, 
  CheckBox, 
  Header, 
  Icon,
  PricingCard,
  SearchBar,
  Slider,
  SocialIcon,
} from 'react-native-elements';

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      selectedIndex: 2,
      checked: false,
      value: 20,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render() {

    const buttons = ['Hello', 'World', 'Buttons'];
    const { selectedIndex } = this.state;

    return (

      <View style={styles.container}>

        <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#da552f' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            backgroundColor={'#da552f'}
        />

        <View>

          <Avatar
            large
            containerStyle={{alignSelf: 'center', marginTop: 10}}
            rounded={true}
            source={
              {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}/>

          <SearchBar
            containerStyle={{marginTop: 10, marginStart: 40, marginEnd: 40}}
            round={true}
            lightTheme={true}
            showLoadingIcon={true}
            clearIcon={{ color: 'white' }}
            placeholder='Aonde vamos hoje?' />

          <View style={{
            flex: 1, 
            alignItems: 'stretch', 
            justifyContent: 'center',
            marginTop: 40,
            marginStart: 40,
            marginEnd: 40}}>
            <Slider
              value={this.state.value}
              minimumValue={0}
              maximumValue={50}
              disabled={false}
              maximumTrackTintColor={'#ddd'}
              minimumTrackTintColor={'#000'}
              thumbTintColor={'#da2'}
              step={1}
              onValueChange={(value) => this.setState({value})} />
            <Text>Value: {this.state.value}</Text>
          </View>

        <View style={{
          flexDirection: 'row', 
          marginTop: 30, 
          justifyContent: 'center'
        }}>

        </View>

        <SocialIcon 
          title='Sign In With Google'
          style={{
            backgroundColor: '#da552f', 
            width: 250, 
            alignSelf: 'center'}} 
          button 
          type='google'/>

        <SocialIcon title='Sign In With Facebook' 
          style={{alignSelf: 'center', width: 250}} 
          button type='facebook'/>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{height: 25, marginTop: 40}}
        />

        <View style={{
          flexDirection: 'row', 
          marginBottom: 20, 
          marginTop: 20, 
          alignSelf: 'center'}}>

          <SocialIcon type='twitter'/>
          <SocialIcon type='instagram'/>
          <SocialIcon type='github'/>
          <SocialIcon type='facebook'/>
          <SocialIcon type='youtube'/>

        </View>

        </View>

      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
