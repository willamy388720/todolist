import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2.5,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  addTasks: {
    position: "absolute",
    top: 160,
    width: "100%",
    paddingHorizontal: 20,
  },
  tasks: {
    flex: 8,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#4EA8DE",
    borderWidth: 2,
    // marginRight: 12,
  },
  concluded: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    justifyContent: "center",
    alignItems: "center",
  },
  taskItemComponent: {
    flexDirection: "row",
    marginBottom: 8,
    backgroundColor: "#262626",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  taskItem: {
    fontSize: 16,
    color: "#F2F2F2",
    width: 235,
  },
  tasksComponent: {
    marginTop: 56,
  },
});
