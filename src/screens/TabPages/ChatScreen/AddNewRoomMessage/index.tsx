import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";
import HeaderMyProduct from "../../../../components/MeusProjetos/Header";
import styles from "../styles";
import Texto from "../../../../components/Default/texto/Texto";
import ChatComponent from "../../../../components/Chat/ChatComponent";
import socket from "../../../../utils/socket";
import AddContatoComponent from "../../../../components/Chat/AddContato";

const AddRoomMessage = ({ navigation }) => {
  const [empresa, setEmpresa] = useState([]);

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
  const handleSearch = (value) => {
    socket.emit("searchEmpresa", { nome: value });
  };

  //Debounce efetivado no handleSearch
  const debouncedHandleSearch = debounce(handleSearch, 500); // 0.5 segundos de debounce

  //Transforma number para string
  const keyExtractor = (item) => item.id.toString();

  //Renderização dos componenetes de adicionar
  const renderChatItem = ({ item }) => (
    <AddContatoComponent id={item.id} nome={item.nome} imagem={item.img} />
  );

  const handleNewFilter = (empresa) => {
    const data = empresa.map((empresa) => {
      return {
        id: empresa.user.id,
        imagem: empresa.user.imagem,
        nome: empresa.nomeFantasia,
      };
    });
  };
  const listenFilterRoom = () => {
    socket.on("foundEmpresa", (empresa) => {
      handleNewFilter(empresa);
    });
  };

  useEffect(() => {
    listenFilterRoom();
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
            <Texto weight="bold" style={styles.chatemptyText}>
              Nenhum contato encontrada.
            </Texto>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddRoomMessage;
