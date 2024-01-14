import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./styles";
import DDCadDTO from "./DDCadDTO";
import { View } from "react-native";
import Texto from "../../Default/texto/Texto";

const DropDCadastro = ({
  data,
  styleContainer,
  children,
  func,
  selectedValue,
  text,
}: DDCadDTO) => {
  // Atualiza o valor interno quando a propriedade selectedValue muda
  useEffect(() => {}, [selectedValue]);

  // const handleChange = (item) => {
  //   setValue(item.value);

  //   if (func && typeof func === "function") {
  //     func(item.value);
  //   }
  // };

  return (
    <View style={styleContainer}>
      {children != undefined ? (
        <Texto weight="regular" style={styles.text}>
          {children}
        </Texto>
      ) : null}
      <Dropdown
        style={styles.dropdown}
        data={data}
        placeholderStyle={styles.placeholderStyle}
        itemContainerStyle={styles.itemContainer}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemText}
        activeColor="#1f1f1f"
        maxHeight={300}
        placeholder=""
        labelField="label"
        valueField="value"
        value={text}
        onChange={func}
      />
    </View>
  );
};

export default DropDCadastro;
