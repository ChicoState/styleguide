import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TriangleColorPicker, toHsv } from 'react-native-color-picker'
import { SG_Color, GenerateCustomPaletteSpreadFromSGCol, HSVTORGB, SGCFromRGB } from '../utils/colorHelpers'

export default function ColorPickerView({ navigation }) {
  const [SelColor, SetSelColor] = useState(toHsv('green')) // initalize with green

  // onColorChange = (color) => {
  //   SetSelColor(color);
  // }

  return (
    <View style={{ flex: 1, padding: 45, backgroundColor: '#121212' }}>
      <Text style={{ color: 'white' }}>React Native Color Picker - Controlled</Text>
      <TriangleColorPicker
        oldColor='black'
        color={SelColor}
        onColorChange={(color) => SetSelColor(color)}
        onColorSelected={(color) => {
          let SelectedColor = toHsv(color);
          let rgb_col = HSVTORGB(SelectedColor.h, SelectedColor.s, SelectedColor.v)
          let sg1 = SGCFromRGB(rgb_col[0], rgb_col[1], rgb_col[2])
          let possible_palettes = GenerateCustomPaletteSpreadFromSGCol(sg1);
          navigation.navigate('PaletteSelectionView', { palette_list: possible_palettes })
        }}
        style={{ flex: 1 }}
      />
    </View>
  )
}


