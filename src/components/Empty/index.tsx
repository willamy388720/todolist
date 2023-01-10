import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.emptyComponent}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <Text style={[styles.emptyText, { fontWeight: "bold", marginTop: 16 }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
