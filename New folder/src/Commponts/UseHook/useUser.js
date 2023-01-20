import { useState } from "react";


const useUser = (email) => {
    const [isUser, setUser] = useState(false);
    const [isUserLoading, setuserLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`https://car-server-amitpaultl.vercel.app/user/admin/${email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                   
                    setUser(data.isUser)
                    setuserLoding(false)
                })
        }
    }, [email])
    return [isUser,isUserLoading]
};

export default useUser;