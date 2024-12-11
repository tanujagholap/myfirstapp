import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm} from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';


function Update() {

    const {register, setValue, handleSubmit} = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

    const {userId} = useParams();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('roll', result.data.roll)
        setValue('name', result.data.name)
        setValue('marks', result.data.marks)
    }

    useEffect(()=>{
        fetchData()
    }, [])
    
  return (
    <center>
      <form className='mt-5' onSubmit={handleSubmit(saveData)}>
          <label htmlFor='r'>ROLL : </label>
          <input type='number' id='r' {...register('roll')}/>
          <br/><br/>
          <label>NAME :</label>
          <input type='text' {...register('name')}></input>
          <br/><br/>
          <label>MARKS :</label>
          <input type='float' {...register('marks')}></input>
          <br/><br/>
          <button type='submit' className='btn btn-success'>UPDATE</button>
      </form>
    </center>
  )
}

export default Update