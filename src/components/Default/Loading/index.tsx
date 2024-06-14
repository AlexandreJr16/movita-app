import React from "react";
import { Modal, ActivityIndicator, StyleSheet, View, Text } from "react-native";
import styles from "./style";

const LoadingIndicator = ({ visible }: any) => (
  <Modal
    transparent
    animationType="slide"
    visible={visible}
    onRequestClose={() => {}}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    </View>
  </Modal>
);

export default LoadingIndicator;
