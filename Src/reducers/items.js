import {
    ADD,
    FETCH_ITEMS
} from "../actions/types";

const intialState={};


export default function items(state=intialState,action){
    switch(action.type){
        case FETCH_ITEMS:
            return action.payload
        default:
            return state

    }

}