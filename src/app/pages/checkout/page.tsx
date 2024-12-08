'use client'
import PrimaryButton from '@/app/components/Button/PrimaryButton'
import './checkout.css'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from '@/app/components/Footer/Footer'
type Inputs = {
    firstName: string,
    lastName: string,
    companyName: string,
    country: string,
    streetAddress: string,
    town: string,
    province: string,
    zipCode: number,
    phone: string,
    email: string,
    additionalInfo: string,
};


const Checkout = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <div className='Checkout'>
            <Header />
            <HeroSecondary page='Checkout' />

            <div className="checkoutSection">

                <h1 className='headingH2 mb-5'>Billing Details</h1>
                <div className="checkoutContent">

                    {/* =============================== billing details with react hook form ========================== */}
                    <div className="billingDetails col">
                        <div className="formContainer">

                            <form >

                                <div className="field">
                                    <label htmlFor="firstName">First Name</label>
                                    <input {...register("firstName", { required: true })} />
                                    {errors.firstName && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input {...register("lastName", { required: true })} />
                                    {errors.lastName && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="companyName">Company Name {'(optional)'}</label>
                                    <input {...register("companyName")} />
                                    {errors.companyName && <span>This field is required</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="country">Country / Region</label>
                                    <input {...register("country", { required: true })} />
                                    {errors.country && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="streetAddress">Street Address</label>
                                    <input {...register("streetAddress", { required: true })} />
                                    {errors.streetAddress && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="town">Town / City</label>
                                    <input {...register("town", { required: true })} />
                                    {errors.town && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="province">Province</label>
                                    <input {...register("province", { required: true })} />
                                    {errors.province && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="zipCode">Zip Code</label>
                                    <input {...register("zipCode", { required: true })} />
                                    {errors.zipCode && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="phone">Phone</label>
                                    <input {...register("phone", { required: true })} />
                                    {errors.phone && <span>This field is required</span>}

                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email Address</label>
                                    <input {...register("email", { required: true })} />
                                    {errors.email && <span>This field is required</span>}

                                </div>
                            </form>
                        </div>

                    </div>

                    {/* =============================== billing details with react hook form ========================== */}
                    <div className="cartDetails col">
                        <h1 className='paragraphP3'>Product Details</h1>
                        <div className="item section">
                            <p>Asgaard x 1</p> <p>Rs. 250,0000</p>
                        </div>
                        <div className="subTotal section">
                            <p>Sub Total</p> <p>Rs. 250,0000</p>
                        </div>
                        <div className="total section">
                            <p>Total</p> <p className=' paragraphP3 text-[var(--secondaryColor)]'>Rs. 250,0000</p>
                        </div>

                        <div className="privacyPolicy">
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
                        </div>

                        <div className="button text-center" onClick={handleSubmit(onSubmit)}><PrimaryButton text='Place Order' width={318} height={64} radius={20} /></div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default Checkout