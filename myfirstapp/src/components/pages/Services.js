import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Services() {

  const [users, setuser] = useState([])

  async function fetchData(){
    const result = await axios.get('http://localhost:5000/users')
    setuser(result.data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <center>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ROLL</th>
            <th>NAME</th>
            <th>MARKS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((obj)=>{
              return(
                <tr>
                  <td>{obj.roll}</td>
                  <td>{obj.name}</td>
                  <td>{obj.marks}</td>
                  <td>
                    <NavLink to={`/update/${obj.id}`}><button class="btn btn-success">UPDATE</button></NavLink>
                  </td>
                  <td>
                  <NavLink to={`/delete/${obj.id}`}><button class="btn btn-danger">Delete</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </center>
  )
}

export default Services