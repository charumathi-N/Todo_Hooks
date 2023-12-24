import { ADD_TODO, ADD_TO_WORKINPROGRESS,DELETE_FROM_WORKINPROGRESS,DELETE_TODO } from "./Action.type";

export default (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        addTodo: [...state.addTodo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        addTodo: state.addTodo.filter((value) => value.id !== action.payload),
      };
      case ADD_TO_WORKINPROGRESS:
        let ADD_TO_DO = state.addTodo.filter((value) => value.id === action.payload)
        return{
           ...state,
           addTodo: state.addTodo.filter((value) => value.id !== action.payload),
           wipTodo:[...state.wipTodo, ...ADD_TO_DO]
        };
        case DELETE_FROM_WORKINPROGRESS:
          let WIP_TO_DO = state.addTodo.filter((value) => value.id === action.payload)
        return{
           ...state,
           addTodo:  [...state.wipTodo, ...WIP_TO_DO],
           wipTodo:state.addTodo.filter((value) => value.id !== action.payload)
        };
    default:
      break;
  }
};
