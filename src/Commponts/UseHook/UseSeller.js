import { useState } from "react";


const useSeller = (email) => {
    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setSellerLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`http://localhost:5000/seller/admin/${email}`)
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