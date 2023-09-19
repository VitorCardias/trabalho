import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

export default function UsersList({ data }) {
  const navigation = useNavigation();

  function handlePress(data) {
    navigation.navigate("Details", { data: data });
  }

  function handlePress(data) {
    navigation.navigate("Details", { data: data });
  }

  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{ uri: data.image }}
          style={styles.perfil}
        />
        <Text style={styles.titulo}>{data.name}</Text>

        <LinearGradient
          colors={["#179AC3", "#4A4A3A"]}
          style={styles.botao}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <TouchableOpacity style={styles.botao} onPress={() => handlePress(data)}>
            <Text style={styles.botaoTexto}>Details</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}