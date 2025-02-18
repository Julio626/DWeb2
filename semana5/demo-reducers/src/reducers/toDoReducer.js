
export const initialState={
    todos:[
        {
            id: new Date().getTime(),
            name: "Estudiar para el corto",

        }
    ]
}

export function toDoReducer(state, action){

    switch(action.type){
        case "add":
            return {...state, todos:[...state.todos,action.payload]}
        default:
            return state;
    }
}