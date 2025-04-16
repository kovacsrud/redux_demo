import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import usersReducer from "./reducers/userSlice";

import cocktailReducer from "./reducers/cocktailSlice"
import alcoholismReducer from "./reducers/alcoholismSlice"

import charactersReducer from "./reducers/characterSlice"
import kepekReducer from "./reducers/kepekSlice"

import koktelSlice from "./reducers/koktelSlice";

export default configureStore({
    reducer:{
        szamlalo:counterReducer,
        users:usersReducer,

        cocktail: cocktailReducer,
        alcohol: alcoholismReducer,

        characters:charactersReducer,
        kepek:kepekReducer,

        koktelok:koktelSlice

    }
});