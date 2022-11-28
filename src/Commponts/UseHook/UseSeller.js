import { useState } from "react";


const useSeller = (email) => {
    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setSellerLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`https://car-server-amitpaultl.vercel.app/seller/admin/${email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                   
                    setSeller(data.isSeller)
                    setSellerLoding(false)
                })
        }
    }, [email])
    return [isSeller,isSellerLoading]
};

export default useSeller;