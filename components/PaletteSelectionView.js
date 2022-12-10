import { StyleSheet, Text, useWindowDimensions, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Carousel, Pagination } from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
import appcolors from "../config/appcolors";


// Expects a list of Items formated like palettes.js
const PaletteSelectionView = (route) => {
  const navigation = useNavigation();
  let palette_list = route.route.params.palette_list
  const { width } = useWindowDimensions();

  const Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PaletteView', {
      SelectedPalette: palette_list[index]
    })}>
      <Text style={styles.palettetitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = (item, index) => {
    console.log(index)
    return (
      <Item
        item={item}
        index={index}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={palette_list}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => 'key' + index}
      />
    </SafeAreaView>
  );
};


export default PaletteSelectionView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appcolors.d_background
  },
  palettetitle: {
    position: "relative",
    width: '100%',
    fontSize: 30,
    height: 60,
    fontWeight: "500",
    textAlignVertical: "bottom",
    color: appcolors.d_primarytext
  },
})