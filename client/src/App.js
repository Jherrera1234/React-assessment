import { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from './services/services';
import './App.css'
import { Icon } from '@iconify/react';
function App() {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState(null)


  const handleSubmit = async (e) => {

    e.preventDefault()
    const names = {
      user
    }



    try {
      const resp = await axios.get(`${baseURL}/${names.user}`)
      setUserData(resp.data)
    } catch (error) {
      window.alert('No match found!')
    }





  }







  return (
    <div className='main-div'>
      <h1 className='title'>Welcome to Github Finder</h1>
      <div className='container'>
        <div className='container-2' >

          <form className='form-sub' onSubmit={handleSubmit}>
            <label className='input-label'>Please type in the GitHub User:</label>
            <input className='userName-input' type='text' onChange={(e) => setUser(e.target.value.toLowerCase())} />
            <button className='submit-button' type='submit'>Submit</button>
          </form>
          <div className='user-info' >

            <h1>Name: {userData?.name}</h1>
            <p className='bio'>Bio: {userData?.bio}</p>
            <h2>Login: {userData?.login}</h2>
            <h3>Email: {userData?.email}</h3>
            <img className='git-img' src={userData?.avatar_url} />
          </div>
        </div>


      </div>
    </div>
  );

}

export default App;
