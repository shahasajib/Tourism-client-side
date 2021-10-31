import React from 'react';
import './AddPackage.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import banner2 from '../../Images/Banner/banner3.jpg'
const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Package added sucessfully")
                    reset()
                }
            })
    }
    return (
        <div className="bg-secondary bg-opacity-25">
            <div>
                <img src={banner2} className="img-fluid h-50" alt="" />
            </div>
            <h2 className="display-3">Add a Package</h2>
            <div className="d-flex justify-content-center" >
                <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("stay")} placeholder="Stay" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input  {...register("img")} placeholder="Img Url" />
                    <input type="submit" />
                </form>
            </div>
            <br /><br />

        </div>
    );
};

export default AddPackage;