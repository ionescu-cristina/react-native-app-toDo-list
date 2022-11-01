import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";
import React ,  {useState} from 'react';

export default function App() {
  const [enteredTasks, setEnteredTasks] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {addTaskHandler
    setEnteredTasks(enteredText);
  }

  const addTaskHandler = () => {
    setTasks(currentTask => [...currentTask, enteredTasks])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new words"
          style={styles.input}
          onChangeText= {taskInputHandler}
          value = {enteredTasks}
        />
        <Button title="ADD" onPress={addTaskHandler} />
      </View>
      <ScrollView>{ tasks.map((task) =><View key="{task}"   style={styles.listItem}><Text >{task}</Text></View>)  }</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding:10,
    borderColor:'black',
    borderWidth: 1,
    marginVertical:5
  }
});
