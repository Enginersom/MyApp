import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    color: 'yellow',
  },
});

const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  },
  TodoList = ({todos, onRemove}) => {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        {todos.map(todo => (
          <TodoListItem key={todo.id} {...todo} onRemove={onRemove} />
        ))}
      </ScrollView>
    );
  };

const TodoListItem = ({textValue, id, checked, onRemove}) => {
  return (
    <View style={styles.container}>
      ...
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default TodoList;
