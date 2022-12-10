/**
 * PaletteView.js
 * General purpose Palette viewing page. Should enter here with a palette json already in route.
 * Can be used to more closely examine a palette from...
 *      PopularPaletteView (Selecting one of the palettes in there)
 *      Recommendation (Selecting one of the custom generated Palettes there)
 */
import React, { useState } from "react";
import { FlatList, SafeAreaView, View, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { Appearance } from 'react-native';
import { SG_Color, DATA, HSVTORGB } from "../utils/colorHelpers";
import { toHsv } from 'react-native-color-picker'
import appcolors from "../config/appcolors";
import ItemsCarousel from "./ItemsCarousel";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { categories } from "../config/categories";


// Expects the same format as in config/palettes.js (only one palette)
export default function PaletteView({ route }) {
  // Check if we got here without any selection
  if (typeof route.params === "undefined") {
    console.log("No selected color");
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.AbText}>No Selected Colors</Text>
      </SafeAreaView >
    );
  }
  let display_palette = route.params.SelectedPalette
  const [selectedId, setSelectedId] = useState(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const { width } = useWindowDimensions();

  const renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <View>
        <View style={[styles.colorsquare, { backgroundColor: item }]}></View>
        <Text style={styles.colortext}>{item}</Text>
      </View>
    );
  };


  console.log(display_palette.colors);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{display_palette.name}</Text>
      <View>
        <Carousel
          activeSlideAlignment="center"
          data={display_palette.colors}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.58}
          inactiveSlideScale={0.75}
          onSnapToItem={index => setActiveDotIndex(index)}
        />
        <Pagination activeDotIndex={activeDotIndex} dotsLength={categories.length} />
      </View>
      <Text style={styles.footer}>{display_palette.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#121212',
    position: "relative"
  },
  item: {
    padding: 50,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    flex: 1,
    paddingTop: 40,
    fontSize: 32,
    textAlign: "center",
    color: appcolors.d_primarytext,
    fontWeight: "800",
  },
  footer: {
    // backgroundColor: 'grey',
    flex: 1,
    width: '100%',
    textAlign: "center",
    fontWeight: '500',
    fontSize: 25,
    color: appcolors.d_primarytext
  },
  AbText: {
    color: 'white',
    textAlign: "center",
    width: '100%',
    position: "absolute",
    bottom: 0,
    fontSize: 15,
  },
  colorsquare: {
    width: '100%',
    overflow: "hidden",
    position: "relative",
    borderRadius: 15,
    padding: 10,
    height: 200
  },
  colortext: {
    color: appcolors.d_secondarytext,
    textAlign: "center",
    width: '100%',
    fontWeight: '400',
    fontSize: 15
  }
});
