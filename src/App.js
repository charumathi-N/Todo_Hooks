// whenever my state changes my component renders
//to avoid frequent rendering we have use useref
//when ever you need the current value use userref
//Use reducer - contains all the states in a container

import logo from "./logo.svg";
import "./App.css";
import { useReducer, useRef } from "react";
import Reducer from "./Reducer";
import { TodoContext } from "./context";
import InputText from "./InputText";
import AddTodoList from "./AddTodoList";
import { Grid, Item, Typography } from "@mui/material";
import WipTodoList from "./wipTodoList.js";

const initialState = {
  addTodo: [],
  wipTodo: [],
  completeTodo: [],
};

export default function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <InputText />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" component="h2" align="center">
              ADDED TODOS
            </Typography>
            <AddTodoList />
          </Grid>
          <Grid item xs={4}>
          <Typography variant="h6" component="h2" align="center">
              WIP TODOS
            </Typography>
            <WipTodoList />
          </Grid>
        </Grid>
      </TodoContext.Provider>
    </div>
  );
}
