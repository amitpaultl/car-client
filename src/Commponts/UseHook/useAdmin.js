import { useState } from "react";


const useAdmin = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setAdminLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`https://car-server-amitpaultl.vercel.app/admin/admin/${email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                   
                    setAdmin(data.isAdmin)
                    setAdminLoding(false)
                })
        }
    }, [email])
    return [isAdmin,isAdminLoading]
};

export default useAdmin;