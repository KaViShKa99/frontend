import React, {useEffect, useState} from 'react'
import styles from '../style/home.module.css';
import axios from "axios";
import ProductViews from "./productViews";

const Home = ()=>{

    const [data,setData] = useState(null)

    useEffect(()=>{

        const token = JSON.parse(localStorage.getItem('user'))
        const url = "http://52.66.243.9:3000/products"

        const config = {
            headers: {
                "Content-Type": "application/json",
                "x_access_token": token,
            },
        };

        axios.get(url , config)
            .then(res => {
                setData(res.data)
            })
            .catch((error) => {
                    console.log(error)
                });

    },[])


    return(
        <div>
            <div className={styles.navbar}>
                <span className={styles.list_style}>Home</span>
                <span className={styles.list_style}>About</span>
                <span className={styles.list_style}>Profile</span>
                <span className={styles.list_style}>Cart</span>
            </div>

            <div>
                {/*{console.log(data.products[0])}*/}
                {data && <ProductViews products={data.products} /> }
            </div>
        </div>
    )
}

export default  Home