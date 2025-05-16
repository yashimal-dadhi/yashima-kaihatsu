import { useState, useEffect } from 'react';
import { Button, Typography, Container, TextField, List, ListItem, ListItemText } from '@mui/material';
import { supabase } from '../utils/supabaseClient';



export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const fetchTodos = async () => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    console.error('Error fetching todos:', error.message, error.details, error.hint);
  } else {
    console.log('Fetched data:', data);
    setTodos(data.map((todos: { text: string }) => todos.text));
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (input.trim()) {
      const { error } = await supabase.from('todos').insert([{ text: input }]);
      if (error) {
        console.error('Error adding todo:', error);
      } else {
        setTodos([...todos, input]);
        setInput('');
      }
    }
  };

  const handleDelete = async (index: number) => {
    const todoToDelete = todos[index];
    const { error } = await supabase.from('todos').delete().eq('text', todoToDelete);
    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };
  
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Todoリスト
      </Typography>
      <TextField
        label="Todo"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        追加
      </Button>
      <List>
        {todos.map((todos, index) => (
          <ListItem key={index}
                        secondaryAction={
              <Button
                color="secondary"
                onClick={() => handleDelete(index)}
              >
                削除
              </Button>
            }
          >
            <ListItemText primary={todos} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}