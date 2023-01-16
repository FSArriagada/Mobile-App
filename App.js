import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const onHandlerChange = (text) =>{
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      { id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item)
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id; 

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null)

  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);

  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Add a new task' autoComplete='off' autoCorrect={false} autoCapitalize='none' value={task} onChangeText={onHandlerChange}/>
        <Button disabled ={!task} title='Add' color='#401A5D' onPress={onHandlerSubmit}/>
      </View>
      <FlatList
        data= {tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}> Task detail.</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
            title='Cancel'
            color='#626893'
            onPress={onHandleCancel}>
            </Button>
            <Button
            title='Delete'
            color='red'
            onPress={onHandleDelete}>
            </Button>

          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66256B',
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: '#66256B',
    borderBottomWidth: 1,
    height: 40,
    width: '75%' ,

  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40
  },
  itemList: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 15,
    backgroundColor:'#66256B',
    marginBottom: 10,
    borderRadius: 10
  },
  modalContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer:{
    paddingVertical:20,
  },
  modalDetailMessage:{
    fontSize: 14,
    color: '#212121'
  },
  modalButtonContainer:{
    width: '75%',
    justifyContent: 'space-around',
    flexDirection:'row',
    marginHorizontal:20,
  },
  selectedTask:{
    fontSize: 14,
    color:'#212121',
    fontWeight:'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20
  }
});

