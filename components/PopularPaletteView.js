/**
 * PopularPaletteView.js
 * View with the categories of palettes corresponding to data in config folder.
 * Should give palette suggestions based on category, corresponds with the PaletteView page.
 */
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appearance } from 'react-native';
import { SG_Color, DATA, HSVTORGB } from "../utils/colorHelpers";
import { toHsv } from 'react-native-color-picker'



export default function RecommendationView({ route }) {
  const [selectedId, setSelectedId] = useState(null);
  var SelectedColor = route.params.SelectedColor
  console.log(route)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi :)</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#121212'
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
});