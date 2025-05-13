import { useState } from 'react';
import { Button, Typography, Container, TextField, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
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
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}