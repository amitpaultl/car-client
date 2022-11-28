import { useState } from "react";


const useUser = (email) => {
    const [isUser, setUser] = useState(false);
    const [isUserLoading, setuserLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`http://localhost:5000/user/admin/${email}`)
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