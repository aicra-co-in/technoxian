import React from 'react';
import { Text } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';

const GradientText = () => {
  return (
    <LinearTextGradient
      style={{ fontWeight: 'bold', fontSize: 45 }}
      locations={[0, 0.01, 0.99, 1]}
      colors={['#705FAA', '#705FAA', '#FF3D00', '#FF3D00']}
      start={{x: 0.0, y: 0.34}}
      end={{x: 0.9, y: 1.0}}
    >
      <Text>Technoxian</Text>
    </LinearTextGradient>
  );
};

export default GradientText;
