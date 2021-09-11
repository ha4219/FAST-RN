import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

const TodoListItem = ({id, textValue, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="check" size={30} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text style={[styles.item, styles.strikeText]}>{textValue}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={onRemove(id)}>
        <Icon name="delete" size={30} color="#e33057" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 5,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
    width: 100,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

TodoListItem.propTypes = {
  id: PropTypes.string,
  textValue: PropTypes.string,
  check: PropTypes.boolean,
  onPress: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TodoListItem;
