import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  сontainer: {
    marginHorizontal: 6,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 5,
  },

  checkedContainer: {
    backgroundColor: '#FFD511',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  checkedButton: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },

  taskContainer: {
    position: 'relative',
    padding: 5,
    width: '90%',
    borderRadius: 5,
  },

  taskText: {
    textAlign: 'left',
    fontSize: 16,
  },

  deadlineText: {
    fontSize: 14,
    textAlign: 'right',
  },

  addButtonContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    width: 180,
    height: 48,
    padding: 10,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: '#FFD511',
  },
  addButtonText: {
    fontSize: 20,
    color: '#000',
  },
});

export default styles;
