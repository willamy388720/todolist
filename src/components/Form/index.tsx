import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  addTasks: (value: string) => void;
  task: string;
  onChange: (value: string) => void;
};

export function Form({ addTasks, task, onChange }: Props) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, focused ? { borderColor: "#5E60CE" } : {}]}
        value={task}
        onChangeText={(text) => onChange(text)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <TouchableOpacity
        style={styles.buttonAdd}
        activeOpacity={0.7}
        onPress={() => addTasks(task)}
      >
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
}
