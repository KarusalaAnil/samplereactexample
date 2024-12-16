// import { configureStore, createSlice } from "@reduxjs/toolkit"

import { createStore } from "@reduxjs/toolkit";

// const data = {
//     loginStatus: false
// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState: data,
//     reducers: {
//         updateLoginStatus: (state, action) => {
//             console.log(state,action);
//             state.loginStatus = action.payload;
//             // state.loginStatus = true;
//         }
//     }
// })

// const store = configureStore({
//     reducer: {
//         user: userSlice.reducer
//     }
// })

// export const { updateLoginStatus } = userSlice.actions;
// export default store;

const initialState = {
    loginStatus: false
}
function commonReducer(state = initialState, action) {
    switch(action.type){
        case "updateLoginStatus":
            return { ...state, loginStatus : action.payload }
        default:
            return state;

    }
}
const store = createStore(commonReducer);
export default store;
