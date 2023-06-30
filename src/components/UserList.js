import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const cardContainer={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  border: '1px solid black',
  width :300,
  margin: '20px auto',
  borderRadius: '10px',
}

const navbar={
  position: 'sticky', 
  zIndex:1, 
  top: 0, 
  display: 'flex', 
  justifyContent:'center', 
  padding:10,
  backgroundColor: '#d3eaf2'

}
const input={
  maxwidth:200,
  height:25,
  border: '2px solid black',
  borderRadius:20,
  textAlign: 'center',
}

function UserList() {

    const [userData,setUserData] =useState([]);
    const [searchUser,setSearchUser] =useState('');

    const api =`https://reqres.in/api/users?page=2`;

    useEffect(()=>{
        getUserList();
    }, []);


    const getUserList = async () => {
        try {
        const res = await axios.get(api)
        setUserData(res.data.data);
    }   catch (error) {
        console.log("error occured :",error);
    }
  }


  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  }


  const filterUser = userData.filter((user) => 
        user.first_name.toLowerCase().includes(searchUser.toLowerCase())
    )


  return (
    <div>
        <div style={navbar}>
          <input style={input}
              className="input-field"
              type='text'
              value={searchUser}
              onChange={handleSearchUser}
          />
        </div>

        <div style={cardContainer}>
          {filterUser.map((user) =>(
              <UserCard key={user.id} user={user}/>
            ))}
        </div>
    </div>
  )
}

export default UserList