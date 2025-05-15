import {
	configureStore,
	ConfigureStoreOptions,
	CreateSliceOptions,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { stateVariables } from "./stateVariables";
import { stateSetters } from "./stateSetters";

const sliceOptions: CreateSliceOptions = {
	//Declare the options that this slice will have
	name: "global", //Describe the state
	initialState: stateVariables, //Set the location of the state variable definitions
	reducers: stateSetters, //Declare the reducer(s) that will manage the state variables for this slice
};

const slice = createSlice(sliceOptions); //Create the slice using the declared options
export const set = slice.actions;

const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer }; //Declare the reducer that will store the state variables for this slice
export const store = configureStore(storeOptions); //Configure the store using the declared options
