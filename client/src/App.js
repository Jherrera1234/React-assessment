import { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from './services/services';
import Route from 'react-router-dom';
function App() {
  const [user, setUser] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault()
  }


  const handleUser = async (userName) => {

    const resp = await axios.get(`${baseURL}/${userName}`)

    setUser(resp.data)
    console.log(user.name)
  }




  return (
    <div className='main-div'>
      <>

        <form className='form-sub' onSubmit={handleSubmit}>
          <label className='input-label'>Please type in the GitHub User:</label>
          <input className='userName-input' type='text' onChange={(e) => handleUser(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
        <div>
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>
          <h2>{user?.login}</h2>
          <h3>{user?.email}</h3>
          <img src={user?.avatar_url} />
        </div>



      </>
    </div>
  );

}

export default App;
