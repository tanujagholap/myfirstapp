import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Register() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users', data)
    // alert('ok')
    navi('/show')
  }

  return (
    <center>
      <h3><ul>Student Registration Form</ul></h3>
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
          <button type='submit' className='btn btn-success'>SUBMIT</button>&nbsp;&nbsp;
          <button type='reset' className='btn btn-warning'>RESET</button>
      </form>
    </center>
  )
}

export default Register