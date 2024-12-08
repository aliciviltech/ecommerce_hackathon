'use client'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React from 'react'
import './account.css'
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from '@/app/components/Button/PrimaryButton';
import Footer from '@/app/components/Footer/Footer'
type LoginInputs = {
    email: string,
    password: string,
};
type RegisterInputs = {
    email: string,
};
const Account = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = data => console.log(data);
    return (
        <div className='Account'>
            <Header />
            <HeroSecondary page='Account' />

            <div className="accountSection">
                <div className="login section">
                    <h1 className='headingH2'>Login</h1>
                    <div className="form">
                        <form >

                            <div className="field">
                                <label htmlFor="email">Email Address</label>
                                <input {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <div className="rememberMe">
                                <input type="checkbox" className='mr-4' />
                                Remember me
                            </div>

                            <div className="button">
                                <PrimaryButton text='Log In' width={215} height={64} radius={15}/>
                            </div>
                            <div className="forgetPassword">
                                <p>Lost your password?</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="register section">
                    <h1 className='headingH2'>Register</h1>
                    <div className="form">
                        <form >

                            <div className="field">
                                <label htmlFor="email">Email Address</label>
                                <input {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div >
                                <p>A link to set a new password will be sent to your email address.</p>
                            </div>

                            <div className="privacyPolicy">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.
                            </div>

                            <div className="button">
                                <PrimaryButton text='Register' width={215} height={64} radius={15}/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Account