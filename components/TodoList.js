import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import TodoInsert from './TodoInsert';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onToggle = id => e => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <View style={styles.card}>
      <TodoInsert onAddTodo={addTodo} />
      <ScrollView>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            {...todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TodoList;
