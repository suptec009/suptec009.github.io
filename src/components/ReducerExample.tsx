import React, { useReducer } from 'react'
import { Todo } from '../models'

type Actions = 
   | {type:'add',payload:string}
   | {type:'remove',payload:number}
   | {type:'done',payload:number}

const TodoReducer = (state:Todo[],action:Actions) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {id: Date.now(), todo: action.payload, isDone:false}
            ];
        case "remove":
            return state.filter((todo) => todo.id !== action.payload);
        case "done":
            return state.map((todo) => todo.id !==action.payload ? { ...todo, isDone: !todo.isDone}:todo.isDone);
    }
}

const ReducerExample = () => {

    // const [state, dispatch] = useReducer(TodoReducer(todos,), [])


  return (
    <div>ReducerExample</div>
  )
}

export default ReducerExample