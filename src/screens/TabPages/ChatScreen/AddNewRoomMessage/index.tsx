import React, { Suspense, useContext, useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";
import HeaderMyProduct from "../../../../components/MeusProjetos/Header";
import styles from "../styles";
import Texto from "../../../../components/Default/texto/Texto";
import ChatComponent from "../../../../components/Chat/ChatComponent";
import socket from "../../../../utils/socket";
import AddContatoComponent from "../../../../components/Chat/AddContato";
import AuthContext from "../../../../contexts/auth.context";
import VitaNotFound from "../../../../assents/Vita/VitaNotFound";

type ResponseEmpresa = {
  id: number;
  imagem: ArrayBuffer;
  nome: string;
};
type EmpresaData = {
  id: number;
  imagem: ArrayBuffer;
  nome: string;
};

const AddRoomMessage = ({ navigation }) => {
  const [empresa, setEmpresa] = useState<EmpresaData[]>([] as EmpresaData[]);
  const { findEmpresasByName } = useContext(AuthContext);

  //Debounce pra melhorar o processamento
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  //handle de Pesquisa
  const handleSearch = async (value: string) => {
    //Verifica se a string for vazia e se for pesquisa a letra "A"
    const str = value == "" ? "A" : value;
    const empresas: ResponseEmpresa[] = await findEmpresasByName(str);
    setEmpresa(empresas);
  };

  //Debounce efetivado no handleSearch
  const debouncedHandleSearch = debounce(handleSearch, 500); // 0.5 segundos de debounce

  //Transforma number para string
  const keyExtractor = (item) => item.id.toString();

  //Renderização dos componenetes de adicionar
  const renderChatItem = ({ item }: { item: EmpresaData }) => {
    return (
      <AddContatoComponent
        navigation={navigation}
        id={item.id}
        nome={item.nome}
        imagem={item.imagem}
      />
    );
  };

  //Funçção de ativar ao iniciar
  const onInit = async () => {
    await handleSearch("A");
  };

  useEffect(() => {
    onInit();
  }, []);

  return (
    <View style={styles.chatscreen}>
      <StatusBar backgroundColor={"#2f2f2f"} barStyle="light-content" />
      <HeaderMyProduct
        textoSearch="Procurar conversas"
        navigation={navigation}
        color={"blue"}
        title={"Mensagens"}
        handleSearch={debouncedHandleSearch}
      />

      <View style={styles.chatlistContainer}>
        {empresa.length > 0 ? (
          <FlatList
            data={empresa}
            renderItem={renderChatItem}
            keyExtractor={keyExtractor}
          />
        ) : (
          <View style={styles.chatemptyContainer}>
            <Texto
              weight="bold"
              style={{
                ...styles.chatemptyText,
              }}
            >
              Não conseguimos encontrar esta empresa.
            </Texto>
            <VitaNotFound />
          </View>
        )}
      </View>
    </View>
  );
};

export default AddRoomMessage;
