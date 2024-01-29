import { StyleSheet } from "react-native";


export const S = StyleSheet.create({
  modalContainer: {
    width: '90%',
    backgroundColor: '#399393',
    borderRadius: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ddd',
    marginTop: -50,

  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%',
    position: 'absolute',
    bottom: 20
  },
  buttonModal: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10,
    backgroundColor: '#eee', 
    padding: 10,
    borderRadius: 10
  },
  labelButton: {
    fontSize: 16,
  }
})