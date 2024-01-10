// import { useEffect, useState } from 'react';

// export const UserProducts = (email) => {
//     const [userInfoDetails, setUserInfoDetails] = useState({});

//     useEffect(() => {
//         fetch(`http://localhost:5000/api/v1/users/?email=${email}`)
//             .then(res => res.json())
//             .then(data => setUserInfoDetails(data.data));
//     }, [email]);

//     return userInfoDetails;
// };


import { useEffect, useState } from 'react';

const UserProducts = (email) => {
  const [userInfoDetails, setUserInfoDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/users/?email=${email}`);
        const data = await response.json();
        setUserInfoDetails(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [email]);

  return userInfoDetails;
};

export default UserProducts;
