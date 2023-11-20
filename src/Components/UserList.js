// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UserList.css';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [userName, setUserName] = useState("");

//     useEffect(() => {
//         axios.get('https://dummyjson.com/users')
//         .then(res => setUsers(res.data.users));
//     }, []);
//     console.log(users);

//     const searchButtonHandler = () => {
//         // document.querySelector('.userData').style.display = 'none';
//     }
            
//     return (
//         <>
//             <h1>User List</h1>
//             <div className="userInfo">
//                 <div className='searchTags'>
//                     <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='Search for users' />
//                     <button onClick={searchButtonHandler}>Search</button>
//                 </div>
//                 <table>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                 </table>
//                 <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>City</th>
//                     </tr>
//                     {users.map(user => (
//                         <tr key={user.firstName}>
//                             <td>{user.firstName} {user.lastName}</td>
//                             <td>{user.email}</td>
//                             <td>{user.address.city}</td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>
//         </>
//     );
// }

// export default UserList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
        .then(res => {
            setUsers(res.data.users);
            setFilteredUsers(res.data.users);
        });
    }, []);

    const searchButtonHandler = () => {
        const filteredData = users.filter(user =>
            user.firstName.toLowerCase().includes(userName.toLowerCase()) ||
            user.lastName.toLowerCase().includes(userName.toLowerCase())
        );
        setFilteredUsers(filteredData);
    }

    const enterButtonHandler = (e) => {
        if(e.key === 'Enter') {
            searchButtonHandler();
        }
    };

    return (
        <>
            <h1>User List</h1>
            <div className="userInfo">
                <div className='searchTags'>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} onKeyDown={enterButtonHandler} placeholder='Search for users' />
                    <button onClick={searchButtonHandler}>Search</button>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                    {filteredUsers.map(user => (
                        <tr key={user.firstName}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default UserList;