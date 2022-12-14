import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TriangleColorPicker, toHsv } from 'react-native-color-picker'
import { SG_Color, SGCFromHSV, HSVTORGB } from '../utils/colorHelpers'

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
        // HERE
        onColorSelected={color => navigation.navigate('Recommendations', {
          SelectedColor: toHsv(color)
        })}
        style={{ flex: 1 }}
      />
    </View>
  )
}


