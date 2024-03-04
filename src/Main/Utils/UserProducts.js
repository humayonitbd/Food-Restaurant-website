
import { useEffect, useState } from 'react';

const UserProducts = (email) => {
  const [userInfoDetails, setUserInfoDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://food-restuarant-server.vercel.app/api/v1/users/?email=${email}`);
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
