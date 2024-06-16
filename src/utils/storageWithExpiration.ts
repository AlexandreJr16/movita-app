import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Função para salvar um item no AsyncStorage com tempo de expiração.
 * @param {string} key - A chave do item.
 * @param {any} value - O valor a ser salvo.
 * @param {number} expirationInMinutes - Tempo de expiração em minutos.
 */
const setItemWithExpiration = async (dto: {
  key: string;
  value: any;
  expirationInMinutes: number;
}) => {
  const { key, expirationInMinutes, value } = dto;
  try {
    const expirationDate = new Date().getTime() + expirationInMinutes * 60000;
    const item = {
      value,
      expirationDate,
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error("Erro ao salvar item com expiração:", error);
  }
};

/**
 * Função para obter um item do AsyncStorage, verificando se ainda é válido.
 * @param {string} key - A chave do item.
 * @returns {any} O valor armazenado ou null se expirado ou não encontrado.
 */
const getItemWithExpiration = async (key: string) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (!itemString) {
      return null;
    }

    const item = JSON.parse(itemString);
    const currentTime = new Date().getTime();

    if (currentTime > item.expirationDate) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error("Erro ao obter item com expiração:", error);
    return null;
  }
};

export { setItemWithExpiration, getItemWithExpiration };
