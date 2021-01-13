import database from '@react-native-firebase/database';
import _ from "lodash"
import {ADD,FETCH_ITEMS} from "./types"
const reference = database().ref('/items')


export const add=(item)=>async(dispatch)=>{
   
const res=await reference.push({item});


}

export const fetchItems=()=>async(dispatch)=>{
     
    const res=await reference.on('value',snap=>{

        const ar=[];
        snap.forEach(snap=>{
            ar.push(snap.val())
        })
        console.log('arr',ar)
        
        dispatch({
            type:FETCH_ITEMS,
            payload:snap.val()
        })
    });
}

export const deleteItem=(id)=>async(dispatch)=>{
    console.log(id)
    await database().ref(`/items/${id}`).remove();
}

export const editItem=(id,val)=>async(dispatch)=>{
    console.log(id)
    await database().ref(`/items/${id}`).update({
        item:val
    })
}