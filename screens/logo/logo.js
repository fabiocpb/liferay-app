import React from 'react';
import { Image } from 'react-native';


export default function LogoLiferay() {
    return (
      <Image
        style={{ width: 120, height: 35, alignContent: 'left'}}
        source={require('../../assets/images/liferay-logo-small.png')}
      />
    );
  }