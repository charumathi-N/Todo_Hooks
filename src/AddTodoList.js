import { useContext } from "react";
import { TodoContext } from "./context";
import { Alert, Button } from "@mui/material";
import { DELETE_TODO } from "./Action.type";
import { ADD_TO_WORKINPROGRESS } from "./Action.type";

export default function AddTodoList() {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.addTodo.map((value) => (
        <Alert
          key={value.id}
          severity={value.priority}
          action={
            <>
             <Button
              color="inherit"
              size="small"
              onClick={() => dispatch({ type: DELETE_TODO, payload: value.id })}
            >
              DELETE
            </Button>
            <Button
              color="inherit"
              size="small"
              onClick={() => dispatch({ type: ADD_TO_WORKINPROGRESS, payload: value.id })}
            >
              Move to wip
            </Button></>
          }
        >
          {value.content}
        </Alert>
      ))}
    </div>
  );
}