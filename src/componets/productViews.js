import React from 'react'
import styles from '../style/productViews.module.css';
import axios from "axios";
import {authenticate, isAuth} from "../helpers/auth";
import {useNavigate} from "react-router-dom";

const ProductViews =({products})=>{

    const navigate = useNavigate();
    const view = (view) => {

        const token = JSON.parse(localStorage.getItem('user'))
        const url = `http://52.66.243.9:3000/products/${view.id}`


        const config = {
            headers: {
                "Content-Type": "application/json",
                "x_access_token": token,
            },
        };

        axios.get(url , config)
            .then(response=>{
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });


    }

    return<>
        {
            products.map((product)=>{

                const {description,id,image,name,price,smallDes} = product

                return(
                    <div className={styles.box_position}>
                        <div className={styles.box_container}>
                            <span className={styles.product_name}>{smallDes}</span>
                            <h4>{description}</h4>
                            {/*<h4>{id}</h4>*/}
                            {/*<img src={image} alt={image}/>*/}
                            {/*<img src=${image}/>*/}
                            <h4>{name}</h4>
                            <h4>{price}</h4>
                            <button className={styles.view_btn} value={id} onClick={e=>{view({id})}}>View Product</button>
                        </div>
                    </div>

                )
            })
        }
    </>
}
export default ProductViews