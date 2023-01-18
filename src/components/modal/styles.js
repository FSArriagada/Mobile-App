import {StyleSheet} from "react-native";

export const styles = StyleSheet.create ({

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

  })