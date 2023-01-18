import React from "react";
import {Modal, View, Text, Button} from 'react-native'
import {styles} from "./styles"


const CustomModal = ({isModalVisible,onHandleCancel,onHandleDelete,selectedTask}) => {
    return (
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
    )
}

export default CustomModal
