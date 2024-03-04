import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  //   console.log("isAdmin", isAdmin);
  useEffect(() => {
    if (email) {
      fetch(
        `https://food-restuarant-server.vercel.app/api/v1/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAdmin(data.isAdmin);
            setAdminLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching admin data:", error);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
