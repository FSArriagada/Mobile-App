import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import TaskItem from "./item"

const TaskList = ({tasks, onHandlerModal}) => {
    
    const renderItem = ({item}) => (
        <TaskItem
          item={item}
          onHandlerModal={onHandlerModal}
        />
      )
    
    const keyExtractor = (item) => item.id;
    
    return(
        <FlatList
        data= {tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    )
}
export default TaskList;