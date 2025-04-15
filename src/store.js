import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import usersReducer from "./reducers/userSlice";
import charactersReducer from "./reducers/characterSlice"

export default configureStore({
    reducer:{
        szamlalo:counterReducer,
        users:usersReducer,
        characters:charactersReducer
    }
});