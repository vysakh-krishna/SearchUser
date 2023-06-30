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

    // Calls the function that gets the data of the users.
    useEffect(()=>{
        getUserList();
    }, []);

    // Async function that gets the data from tha api given.
    const getUserList = async () => {
        try {
        const res = await axios.get(api)
        setUserData(res.data.data);
    }   catch (error) {
        console.log("error occured :",error);
    }
  }

  // Function to handle the search bar changes 
  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  }

  // Function that enables the data search using first_name and filter the users that matches.
  // to do so, we  are converting the string to lowercase
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
    {/* 
    Map function to map alla the users that matches the search value, by default it is blank, thus it shows all the users
    then it is passed to another component UserCard.
    */}
        <div style={cardContainer}>
          {filterUser.map((user) =>(
              <UserCard key={user.id} user={user}/>
            ))}
        </div>
    </div>
  )
}

export default UserList