import React, { useContext, useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";
import HeaderMyProduct from "../../../../components/MeusProjetos/Header";
import styles from "../styles";
import Texto from "../../../../components/Default/texto/Texto";

import AddContatoComponent from "../../../../components/Chat/AddContato";
import AuthContext from "../../../../contexts/auth.context";
import VitaNotFound from "../../../../assents/Vita/VitaNotFound";
import { ScrollView } from "react-native-gesture-handler";

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

const AddRoomMessage = ({ navigation }: { navigation: any }) => {
  const [empresa, setEmpresa] = useState<EmpresaData[]>([] as EmpresaData[]);
  const { findEmpresasByName } = useContext(AuthContext);

  //Debounce pra melhorar o processamento
  const debounce = (
    func: { (value: string): Promise<void>; apply?: any },
    delay: number | undefined
  ) => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(debounce, args);
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
  const keyExtractor = (item: { id: { toString: () => any } }) =>
    item.id.toString();

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
      {empresa != null && empresa && empresa[0] && (
        <View style={styles.chatlistContainer}>
          {empresa[0] ? (
            // <FlatList
            //   data={empresa}
            //   renderItem={renderChatItem}
            //   keyExtractor={keyExtractor}
            //   scrollEnabled={true}
            // />
            <ScrollView>
              {empresa.map((item) => {
                return renderChatItem({ item });
              })}
            </ScrollView>
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
      )}
    </View>
  );
};

export default AddRoomMessage;
