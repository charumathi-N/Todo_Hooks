import { useContext } from "react";
import { TodoContext } from "./context";
import { Alert, Button } from "@mui/material";
import DELETE_FROM_WORKINPROGRESS from "./Reducer.js";

export default function WipTodoList() {
  const { state,dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.wipTodo.map((value) => (
        <Alert key={value.id} severity={value.priority} action={
       <>
        <Button color="inherit" size="small" onClick={()=>dispatch({type:DELETE_FROM_WORKINPROGRESS , payload: value.id})}>
          Move to Add
        </Button>
       <Button color="inherit" size="small">
       Move to Completed
     </Button>
      
       </>
      }>          
        {value.content}
        </Alert>
      ))}
    </div>
  );
}
