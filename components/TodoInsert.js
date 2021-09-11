import React from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [text, setText] = React.useState('');
  const addTodo = () => {
    onAddTodo(text);
    setText('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'Add'} onPress={addTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
