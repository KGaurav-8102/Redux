import {createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        //actions => action handlers

        bugAdded : (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved : (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true
        }
    }
})

export const { bugAdded, bugResolved} = slice.actions;
export default slice.reducer;
//Action Types

//Actions Creators
/* export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

//Reducer

export default createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true
    }
}) */

/* export default function reducer(state=[], action) {
    switch(action.type) {
        case bugAdded.type :
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case bugRemoved.type :
            return state.filter(bug => bug.id !== action.payload.id);
        case bugResolved.type :
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true});
        default :
            return state;
    }
} */