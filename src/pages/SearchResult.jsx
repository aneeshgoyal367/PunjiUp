import React from 'react'
import Result from '../Components/SearchResult/Result'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
export default function SearchResult(){
  const location = useLocation();
  console.log(location.state.data)
    return (
        <>
          <Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}></Header>
          <Result data={location.state.data}></Result>
        </>
    )
} 