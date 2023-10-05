import { createSlice } from "@reduxjs/toolkit"; 


export const checklistSlice = createSlice({
    name:'tasks',
    initialState:[],  
    reducers:{
        addTask: (state,action) => {
            state.push(action.payload);
        },
        delTask: (state,action) => {
            return state.filter(task => task.id !== action.payload);
        },
    }
});
export const {addTask,delTask} = checklistSlice.actions;

export default checklistSlice.reducer;
