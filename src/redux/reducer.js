import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const addTodoReducer = createSlice({
    name: "todo",
    initialState,
    reducers:{
        // write our manual reducer here

        //Add todo item
        addTodo:(state,action) => {
            state.push(action.payload);
            return state;
        },

        //remove todo item
        removeTodo: (state, action) =>{
            return state.filter(item => item.id !== action.payload);
        },

        //update todo item
        updateTodo:  (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return{
                        ...todo,
                        item: action.payload.item,
                    }
                }
                return todo;

            })
        },

        // completed
        completedTodo: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                       completed: true,
                    }
                }
                return todo;

            })
        }

    }
})


export const {addTodo, removeTodo, updateTodo, completedTodo} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;