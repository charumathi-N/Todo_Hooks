import { TextField , FormControl, Button,InputLabel,Select,MenuItem} from "@mui/material";
import { useContext, useState } from "react";
import  {v4 as uuid} from  'uuid';
import { TodoContext } from "./context";
let initialTodo = {
    id: '',
    content : '',
    priority : ''
}
export default function InputText() {
  const [todo,setTodo] = useState(initialTodo);
  const {dispatch} = useContext(TodoContext);
  const handleChange = (e)=> {
     setTodo({...todo, [e.target.name]: e.target.value})
     console.log(todo);
    };
    
    const handleClick = ()=>{
         dispatch({type:"ADD_TODO",payload:{...todo,id:uuid()}});
         setTodo(initialTodo);
        };
 
  return (
    <div>
      <TextField name="content" type="text" label="Addtodo"  value = {todo.content} onChange={handleChange} />
      <FormControl >
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={todo.priority}
          label="Age"
          name="priority"
          onChange={handleChange}
          style={{width:250}}
        >
          <MenuItem value='error'>P0</MenuItem>
          <MenuItem value='warning'>P1</MenuItem>
          <MenuItem value='info'>P2</MenuItem>
          <MenuItem value='success'>P3</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClick}>Add Todo</Button>
    </div>
  );
}
