import React, { useState } from "react";
import {TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";

const TaskItem = ({item, onHandlerModal}) => {
    const [options,setOptions] = useState([]);

    function check (selectedOption){
    
        if (options.includes(selectedOption)){
            setOptions(options.filter (option => option !== selectedOption))
            return;
        }

        setOptions(options => options.concat(selectedOption))
    }
    
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
            {options.map (option => (
                <TouchableOpacity style={styles.checkbox} onPress={()=>check(option)}>
                    {options.includes(option) && <Text>✔</Text>}
                </TouchableOpacity>
            ))}
            
            <Text style={styles.itemList}>{item.value}</Text>
        </TouchableOpacity>
    )
}
export default TaskItem;