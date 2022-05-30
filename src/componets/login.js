import React, {useState} from 'react'
import styles from '../style/login.module.css';
import axios from "axios";
import {authenticate, isAuth} from "../helpers/auth";
import {useNavigate} from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();

    const[formData,setFormData] = useState({
        email:'',
        password:''
    })

    const Handle=(e)=>{
        const addData ={...formData}
        addData[e.target.id]=e.target.value;
        setFormData(addData)
    }

    const Submit=(e)=> {
        e.preventDefault();

        axios.post("http://52.66.243.9:3000/login",{
            email:formData.email,
            password:formData.password
        })
            .then(response=>{
                authenticate(response,()=>{
                    setFormData({
                        email:'',
                        password:'',
                    })
                })
                isAuth() ? navigate('/home'):navigate('/');
            })
            .catch(err=>{
                setFormData({
                    email:'',
                    password:'',
                })
            })
    }


       return(
           <div className={styles.background}>
                <div className={styles.box_container}>
                    {/*<span className={styles.login_txt}>Login</span>*/}
                    <div className={styles.form}>
                        <form onSubmit={e=>{Submit(e)}} >

                            <ul className={styles.list}>
                                <li style={{paddingBottom:"80px"}}><span className={styles.login_txt}>Login</span></li>
                                <li><span  className={styles.email_txt}> Email</span></li>
                                <li style={{paddingBottom:"20px"}}><input id="email" value={formData.email} onChange={e=>{Handle(e)}} /></li>
                                <li><span className={styles.password_txt}> Password</span></li>
                                <li className={styles.list_style}><input id="password" value={formData.password} onChange={e=>{Handle(e)}}/></li>
                                <li style={{paddingBottom:"40px"}}><span className={styles.forgot_password}> forgot password?</span></li>
                                <li className={styles.list_style}><button className={styles.btn} type="submit">Login</button></li>
                            </ul>

                        </form>
                    </div>

                </div>
           </div>
       )
}

export default  Login