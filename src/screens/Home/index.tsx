import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

type Task = {
  concluded: boolean;
  task: string;
};

export function Home() {
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboard(true);
  };

  const _keyboardDidHide = () => {
    setKeyboard(false);
  };

  const handleAddTasks = (value: string) => {
    setTasks((prevState) => [...prevState, { concluded: false, task: value }]);
    setTask("");
  };

  const handleRemoveTasks = (value: string) => {
    setTasks((prevState) => prevState.filter((item) => item.task !== value));
    setCompletedTasks((prevState) =>
      prevState.filter((item) => item !== value)
    );
  };

  const handleConcluded = (value: string) => {
    let dados = [...tasks];
    dados.map((item) => {
      if (item.task === value) {
        item.concluded = !item.concluded;
        if (item.concluded) {
          setCompletedTasks((prevState) => [...prevState, item.task]);
        } else {
          setCompletedTasks((prevState) =>
            prevState.filter((completedTask) => completedTask !== value)
          );
        }
      }
    });
    setTasks(dados);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, keyboard ? { flex: 3.2 } : {}]}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={[styles.tasks, keyboard ? { flex: 5 } : {}]}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.task}
          renderItem={({ item }) => (
            <View style={styles.taskItemComponent}>
              <TouchableOpacity
                style={[
                  styles.checkBox,
                  item.concluded ? styles.concluded : {},
                ]}
                activeOpacity={0.7}
                onPress={() => handleConcluded(item.task)}
              >
                {item.concluded && (
                  <Image source={require("../../../assets/Vector.png")} />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskItem,
                  item.concluded
                    ? { textDecorationLine: "line-through", color: "#808080" }
                    : {},
                ]}
              >
                {item.task}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleRemoveTasks(item.task)}
              >
                <Image source={require("../../../assets/trash.png")} />
              </TouchableOpacity>
            </View>
          )}
          style={styles.tasksComponent}
          ListHeaderComponent={() => (
            <View style={styles.headerComponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerTitles}>Criadas</Text>
                <Text style={styles.qtyTasks}>{tasks.length}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.headerTitles, { color: "#8284FA" }]}>
                  Concluídas
                </Text>
                <Text style={styles.qtyTasks}>{completedTasks.length}</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyComponent}>
              <Image source={require("../../../assets/Clipboard.png")} />
              <Text
                style={[
                  styles.emptyText,
                  { fontWeight: "bold", marginTop: 16 },
                ]}
              >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.addTasks}>
        <TextInput
          style={[styles.input, focused ? { borderColor: "#5E60CE" } : {}]}
          value={task}
          onChangeText={setTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          activeOpacity={0.7}
          onPress={() => handleAddTasks(task)}
        >
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
