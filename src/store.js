import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import usersReducer from "./reducers/userSlice";
import cocktailReducer from "./reducers/cocktailSlice"
import alcoholismReducer from "./reducers/alcoholismSlice"

export default configureStore({
    reducer:{
        szamlalo:counterReducer,
        users:usersReducer,
        cocktail: cocktailReducer,
        alcohol: alcoholismReducer
    }
});