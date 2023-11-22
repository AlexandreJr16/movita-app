import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./styles";
import DDCadDTO from "./DDCadDTO";
import { View } from "react-native";
import Texto from "../../texto/Texto";

const DropDCadastro = ({
  data,
  styleContainer,
  children,
  func,
  selectedValue,
}: DDCadDTO) => {
  const [value, setValue] = useState(null);

  // Atualiza o valor interno quando a propriedade selectedValue muda
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  const handleChange = (item) => {
    setValue(item.value);

    // Verifica se a propriedade func foi passada e se é uma função antes de chamar
    if (func && typeof func === "function") {
      func(item.value);
    }
    console.log(item.value);
  };

  return (
    <View style={styleContainer}>
      <Texto weight="regular" style={styles.text}>
        {children}
      </Texto>
      <Dropdown
        style={styles.dropdown}
        data={data}
        placeholderStyle={styles.placeholderStyle}
        itemContainerStyle={styles.itemContainer}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemText}
        maxHeight={300}
        placeholder=""
        labelField="label"
        valueField="value"
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

export default DropDCadastro;
