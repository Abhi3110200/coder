import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<AntDesign key={i} name="star" size={24} color="#FFD700" />);
  }


  if (hasHalfStar) {
    stars.push(<AntDesign key="half" name="staro" size={24} color="#FFD700" />);
  }

  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    stars.push(<AntDesign key={i} name="staro" size={24} color="#FFD700" />);
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
