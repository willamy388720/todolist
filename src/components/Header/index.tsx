import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  qtyTasks: number;
  qtyCompletedTasks: number;
};

export function Header({ qtyTasks, qtyCompletedTasks }: Props) {
  return (
    <View style={styles.headerComponent}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.headerTitles}>Criadas</Text>
        <Text style={styles.qtyTasks}>{qtyTasks}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.headerTitles, { color: "#8284FA" }]}>
          Concluídas
        </Text>
        <Text style={styles.qtyTasks}>{qtyCompletedTasks}</Text>
      </View>
    </View>
  );
}
