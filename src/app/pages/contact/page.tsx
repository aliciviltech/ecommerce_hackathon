'use client'
import PrimaryButton from '@/app/components/Button/PrimaryButton'
import './contact.css'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from '@/app/components/Footer/Footer'
type Inputs = {
    yourName: string,
    email: string,
    subject: string,
    message: string,
};


const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <div className='Contact'>
            <Header />
            <HeroSecondary page='Contact' />

            <div className="ContactSection">

                <h1 className='headingH2 mb-5 text-center'>Get In Touch With Us</h1>
                <p className='paragraphP2  lg:w-[60%] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

                <div className="ContactContent">

                    <div className="myContact">
                        <div className="address">
                            <i className="fa-solid fa-location-dot"></i>
                            <div className="addressText">
                                <p className='paragraphP3'>Address</p>
                                <p >236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="address">
                        <i className="fa-solid fa-phone"></i>
                            <div className="addressText">
                                <p className='paragraphP3'>Phone</p>
                                <p >Mobile: {'+(84)'} 546-6789 <br />Hotline: {`+(84)`} 456-6789</p>
                            </div>
                        </div>
                        <div className="address">
                        <i className="fa-solid fa-clock"></i>
                            <div className="addressText">
                                <p className='paragraphP3'>Working Hours</p>
                                <p >Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>


                    {/* ===============================  react hook form ========================== */}

                    <div className="yourDetails">
                        <div className="formContainer">

                            <form >

                                <div className="field">
                                    <label htmlFor="yourName">Your Name</label>
                                    <input {...register("yourName", { required: true })} />
                                    {errors.yourName && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email Address</label>
                                    <input {...register("email", { required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="subject">Subject</label>
                                    <input {...register("subject")} />
                                    {errors.subject && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <input {...register("message", { required: true })} />
                                    {errors.message && <span>This field is required</span>}

                                </div>

                                <div className="button">
                                    <PrimaryButton text='Submit' width={237} height={48} radius={15}/>
                                </div>
                                
                            </form>
                        </div>

                    </div>


                </div>
            </div>
            
            <Footer/>

        </div>
    )
}

export default Contact