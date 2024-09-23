// context creation 

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";



const API = "http://hn.algolia.com/api/v1/search?"

const initialState={
 isLoading: true,
 query:"",
 nbPages:0,
 page:0,
 hits:[],

};

const AppContext = React.createContext(); 

// provider function 

const AppProvider = ({children})=>{
    
const[state, dispatch] = useReducer(reducer, initialState)

const fetchData = async (url)=>{

    try {  
        const res = await fetch(url)
        const data = await res.json();
        console.log(data)

        dispatch({
            type:"SET_LOADING"
        })


        dispatch({
            type: "GET_DATA",
            payload: {
                hits:data.hits,
                nbPages:data.nbPages,
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const handleDelete=(post_id)=>{
    dispatch({
        type:"REMOVE_DATA",
        payload: post_id,
    })
}


const searchPost=(searchQuery)=>{
    dispatch({
        type: "SEARCH_QUERY",
    payload: searchQuery,
})
}

const getnxtPage=()=>{
    dispatch({
        type:"NEXT_PAGE",
    })
}

const getprevPage=()=>{
    dispatch({
        type:"PREV_PAGE",
    })
}


useEffect(()=>{
    const url = (`${API}query=${state.query}&page=${state.page}`);
    fetchData(url)
},[state.query, state.page])

    return (
        <AppContext.Provider value={{...state, handleDelete, searchPost,getnxtPage,getprevPage}}>{children}</AppContext.Provider>
    )
}


// custom Hook creat 

const useGlobalContext = ()=>{
    return  useContext(AppContext)
}

 
export {AppContext, AppProvider, useGlobalContext}

