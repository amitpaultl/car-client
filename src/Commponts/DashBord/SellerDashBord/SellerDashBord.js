import React from 'react';
import './SellerDashBord.css'

const SellerDashBord = () => {

    const productHandler=(e)=>{
        e.preventDefault()
        const common = e.target;
        const productname = common.productname.value
        const location = common.location.value
        const category = common.category.value
        const conation = common.conation.value
        const resalePrice = common.resalePrice.value
        const originalPrice = common.originalPrice.value
        const phone = common.phone.value
        const year = common.year.value
        const description = common.description.value

        const product = {
            productname,
            location,
            category,
            conation,
            resalePrice,
            originalPrice,
            phone,
            year,
            description,

        }

        console.log(product);
    }

    return (
        <div className='SellerDashBord'>
            <div className="featured-title">
                <div className="main-title">
                    <h1>Add Featured <span>Cars </span></h1>
                    <p>Consectetur adipisicing elit, sed do eiusmod</p>
                </div>
            </div>
            <div className="container">
                <form onSubmit={productHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="add-product">
                                <div className="form-group clearfix">
                                <label htmlFor="">Product name</label>

                                    <input name="productname" type="text" className="form-control" placeholder="Product Name " aria-label="ProductName" />
                                </div>
                                <div className="form-group clearfix">
                                <label htmlFor="">Location</label>
                                    <input name="location" type="text" className="form-control" placeholder="Location / Address" aria-label="Location" />
                                </div>
                                <div className="form-group clearfix">
                                    <label htmlFor="">Category</label>
                                    <select name="category" id="">
                                        <option value="toyota">TOYOTA</option>
                                        <option value="bmw">BMW</option>
                                        <option value="bentley">BENTLEY</option>
                                    </select>
                                </div>
                                <div className="form-group clearfix">
                                    <label htmlFor="">Conation</label>
                                    <select name="conation" id="">
                                        <option value="Good">Good</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Bad">Bad</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="add-product">
                                <div className="form-group clearfix">
                                <label htmlFor="">Resale Price </label>

                                    <input name="resalePrice" type="text" className="form-control" placeholder="Resale Price " aria-label="Name" />
                                </div>
                                <div className="form-group clearfix">
                                <label htmlFor="">Original Price</label>

                                    <input name="originalPrice" type="text" className="form-control" placeholder="Original Price" aria-label="Name" />
                                </div>
                                <div className="form-group clearfix">
                                <label htmlFor="">Phone Number</label>
                                    
                                    <input name="phone" type="text" className="form-control" placeholder="Phone Number" aria-label="Name" />
                                </div>
                                <div className="form-group clearfix">
                                <label htmlFor="">Years of Use</label>

                                    <input name="year" type="text" className="form-control" placeholder="Years of Use" aria-label="Name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group clearfix">
                                <label htmlFor="">Product Description</label>
                                <textarea placeholder='Description' className='product-dis' name="description" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="addProduct ">

                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerDashBord;