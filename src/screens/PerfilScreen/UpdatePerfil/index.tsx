import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderPerfil from "../../../components/Perfil/HeaderPerfil";
import ShowPerfil from "../../../components/Perfil/ShowPerfil";
import styles from "./styles";
import TitleTextPerfil from "../../../components/Perfil/TitleText";
import InputPerfil from "../../../components/Perfil/Input";

const UpdatePerfil = () => {
  return (
    <SafeAreaView style={{ ...styles.background, backgroundColor: "#1f1f1f" }}>
      <ScrollView style={styles.bg}>
        <HeaderPerfil />
        <ShowPerfil />
        <View style={styles.container}>
          <TitleTextPerfil>Detalhes da conta</TitleTextPerfil>
          <InputPerfil title="Nome:" func={() => {}} />
          <InputPerfil title="E-mail:" func={() => {}} />
          <InputPerfil title="Telefone:" func={() => {}} />
          <InputPerfil title="Endereço:" func={() => {}} />
          <InputPerfil title="CPF/CNPJ:" func={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdatePerfil;
