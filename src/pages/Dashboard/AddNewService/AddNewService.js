import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import img1 from '../../../images/about/cox1.jpg';
import img2 from '../../../images/about/guliakhali1.jpg';
import img3 from '../../../images/about/sundor4.jpg';
import img4 from '../../../images/about/vola3.jpg';
import img9 from '../../../images/offerings/Dhaka/ahsan1.jpg';
import img7 from '../../../images/offerings/Dhaka/shohid1.jpg';
import img17 from '../../../images/offerings/Rangamati/sajek2.jpg';
import img24 from '../../../images/offerings/Srimongol/srimon3.jpg';
import './AddNewService.css';

const AddNewServices = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        fetch('https://holiday-planner-server-side.onrender.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Service Added successfully.');
                    reset();
                }
            });
    };


    return (
        <div id='add-new-service' className="add-new-service-bg text-dark">
            <div className="add-new-service-content d-flex justify-content-center align-items-start">
                <div className="container px-lg-0 px-4 py-5">
                    <div className="row g-5">
                        <div className="col-12 col-lg-2">
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-add-new-service me-3" to="/myBookings"><i className="fas fa-check-circle me-2"></i>My bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-add-new-service me-3" to="/manageAllBookings"><i className="fas fa-tasks me-2"></i>Manage All Bookings</NavLink>
                            <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link text-black border-bottom-design-add-new-service me-3" to="/addNewService"><i className="fas fa-plus me-2"></i>Add New Service</NavLink>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="ms-lg-5">
                                <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">Add New Service</h4>
                                <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                                    <div className="mb-3">
                                        <input type="text" className="border-radius form-control add-new-service-input-bg py-3" placeholder="Destination Name" {...register("destination")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Destination Image Link" {...register("destinationImg")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Destination Short Description" {...register("short_description")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Hotel Name" {...register("hotelName")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Hotel Image Link" {...register("hotelImg")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="First Destination Spot" {...register("spotNoOne")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Second Destination Spot" {...register("spotNoTwo")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Third Destination Spot" {...register("spotNoThree")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Fourth Destination Spot" {...register("spotNoFour")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Fifth Destination Spot" {...register("spotNoFive")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Destination Duration" {...register("duration")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Group Size" {...register("groupSize")} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control add-new-service-input-bg py-3 border-radius" placeholder="Price" {...register("price")} required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-outline-dark border-radius mt-4">Add the Service</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="mb-4 border-start border-3 ps-3 border-dark text-uppercase">Instagram</h4>
                            <div className="row g-3">
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">C O X' S B A Z A R</h5>
                                            <img src={img1} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">G U L I A K H A L I</h5>
                                            <img src={img2} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">S U N D A R B A N</h5>
                                            <img src={img3} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">V O L A G A N J</h5>
                                            <img src={img4} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">S H O H I D - M I N A R</h5>
                                            <img src={img7} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">S A J E K</h5>
                                            <img src={img17} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">A H S A N - M A N J I L</h5>
                                            <img src={img9} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="img-content border border-2 p-2 border-dark border-radius overflow-hidden">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="position-absolute text-white">S R I M O N G O L</h5>
                                            <img src={img24} alt="" className="img-fluid border-radius" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewServices;