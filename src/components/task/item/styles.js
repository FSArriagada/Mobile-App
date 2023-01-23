import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

itemList: {
    fontSize: 15,
    color: '#ffffff',
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
  checkbox: {
    width:25,
    height:25,
    borderWidth:2,
    borderColor:'#1A183F',
    marginRight:5,
  },
  check: {
    alignSelf:'center',
  }
})