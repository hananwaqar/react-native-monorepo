import { View, Text, Dimensions, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

interface Data {
  title: string;
  subtitle: string;
}

interface CardListProps {
  colors: any; // Replace 'any' with the appropriate type for the 'colors' prop
  t: (key: string) => string;
  data: Data[]; // Data as a prop
}

const CardList: React.FC<CardListProps> = ({ colors, t, data }) => {
  const renderItem = ({ item }: { item: Data }) => (
    <View style={{ backgroundColor: colors.bottomBarBackground }}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={[styles.nameText, { color: colors.bottomBarIcon }]}>{item.title}</Text>
          <Text style={{ color: colors.bottomBarIcon }}>{item.subtitle}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data} // Use the provided Data prop
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
  },
  emailText: {},
  phoneText: {},
  image:{
    width: 60, height: 60, backgroundColor: 'black'
  }
});

export default  CardList;