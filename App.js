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
      checked: false
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

          <SearchBar
            containerStyle={{marginTop: 10}}
            round
            lightTheme
            showLoadingIcon
            cancelButtonTitle="Cancel"
            clearIcon={{ color: 'white' }}
            placeholder='Type Here...' />

          <View style={{
            flex: 1, 
            alignItems: 'stretch', 
            justifyContent: 'center',
            marginTop: 40}}>
            <Slider
              value={this.state.value}
              onValueChange={(value) => this.setState({value})} />
            <Text>Value: {this.state.value}</Text>
          </View>

        <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center'}}>
          <Icon name='android' reverse raised size={30} color='#da552f'/>
          <Icon name='g-translate' color='#00aced' size={40} />
          <Button
            textStyle={{color: '#FFF'}}
            backgroundColor={'#da552f'}
            title='Voltar'
            icon={{name: 'arrow-left', type: 'font-awesome'}}
          />
        </View>

        <View style={{flexDirection: 'row'}}>

          <CheckBox
            title='Marque aqui!'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />

          <Avatar
          size='medium'
          rounded
          activeOpacity={0.7}
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}/>

          <Badge
            value={3}
            textStyle={{ color: 'orange', fontWeight: 'bold' }}
          />
        </View>

        <SocialIcon 
          title='Sign In With Google'
          style={{backgroundColor: '#da552f', width: 250}} 
          button 
          type='google'/>

        <SocialIcon title='Sign In With Facebook' 
          style={{width: 250}} 
          button type='facebook'/>

        <View style={{flexDirection: 'row'}}>

          <SocialIcon type='twitter'/>
          <SocialIcon type='instagram'/>
          <SocialIcon type='github'/>
          <SocialIcon type='facebook'/>
          <SocialIcon type='youtube'/>

        </View>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{height: 25}}
        />

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
