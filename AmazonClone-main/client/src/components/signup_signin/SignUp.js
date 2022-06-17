import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
const [udata,setUdata]=useState({
    fname:'',
    email:'',
    mobile:'',
    password:'',
    cpassword:''
});

const adddata=(e)=>{
    const {name,value} = e.target;

    setUdata(()=>{
        return{
            ...udata,
            [name]:value
        }
    })
}

    return (
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src="./blacklogoamazon.png" alt='amazonlogo' />
                </div>
                <div className='sign_form'>
                    <form>
                        <h1> Create Account </h1>
                        <div className='form_data'>
                            <label htmlFor='fname'>Your Name</label>
                            <input type='text' name='fname' 
                            onChange={adddata} value={udata.fname} id='fname' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email'
                            onChange={adddata} value={udata.email} id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='number'>Mobile</label>
                            <input type='text' name='mobile'
                            onChange={adddata} value={udata.mobile} id='mobile' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'> Set Password</label>
                            <input type='password' name='password'
                            onChange={adddata} value={udata.password} id='password' placeholder='At least 6 characters' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input type='password' name='cpassword'
                            onChange={adddata} value={udata.cpassword} id='cpassword' />
                        </div>
                        <button className='signin_btn'>Continue</button>
                        <div className='signin_info'>
                            <p>Already Have An Account?<NavLink to='/login'>Sign in</NavLink></p>
                            
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default SignUp
