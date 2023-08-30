import React,{useEffect, useState} from 'react';
import axios from "axios";
import {useFormik} from "formik";


function Books() {
    const [book,setBook]=useState({})
    useEffect({
        axios.get("http://localhost:4000").then((res)=>
       setBook(res.data) )
    },[])
  return (
    <>
    <div></div>
    </>
  )
}

export default Books