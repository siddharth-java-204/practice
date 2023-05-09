import React, { useState } from "react"
import Product_Service from "../service/Product_Service";

function AddProduct() {
    {/**/ }
    {/*here we need to declear const becous we need to feach all the data from our api */ }
    {/*here we need to use usesatate this is the lifecycl method .*/ }


    {/*here we  created one object for product it will having initial satate and set state
2) here we are useing useState wich is function hook it will hold the initial value of the object it will return the updated object */}
    const [Product, setProduct] = useState({

        productName: "",
        description: "",
        price: "",
        status: ""

    });

    const [msg, setMsg] = useState("");


    {/*this method we need to call in ever field*/ }
    const handelchange = (e) => {
        const value = e.target.value;
        setProduct({ ...Product, [e.target.name]: value })

    }
    {/*according to field target it will assing the value of the target */ }
    {/* setProduct({...Product}) =>for storing old value of the product we are using rest oprater it  will hold the old value*/ }
    {/*here we are making one method which is const handalchange and we are passing one event and  
        here we are feching the value for the target and we are storing the value inside the const value */}

    {/*=====================================================*/ }

    {/*by using  prevant default whenever i will submit the form it will  not refrence the page it will stay there*/ }
    const ProductRegister = (e) => {
        e.preventDefault();
        Product_Service.saveProduct(Product).then((res) => {
            console.log("Product Added SucessFully ");
            setMsg("Product Added SucessFully");
            setProduct({
                productName: "",
                description: "",
                price: "",
                status: ""
            });
        }).catch((error) => console.log(error));

    };
    {/*by using productRegister method we can get the data we can check in console data is comming or not */ }
    {/*now we knows that data is storing now we created servid folder insid service folder we have ProductServid insid that folder we careated one file and there we have our user defind methd 

=>Product_Service.saveProduct(Product)=>by using that method we can save our data insid the databse it will give promisses *
=>ProductRegister=(e) = insid this method we will call Product service metod it will return us promiss   */}



    return (
        <div>

            {/* here we are desigin one form for summiting our */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-m-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Product
                            </div>
                            {msg &&
                                <p className="fs-4 text-center text-sucvrss"> {msg}</p>

                            }
                            <div className="card-body">
                                <form onSubmit={(e) => ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Prpduct Name</label>
                                        <input type="text" name="productName" className="form-control" onChange={(e) => handelchange(e)}
                                            value={Product.productName}

                                        >{/*value={Product.productName}=> by using value of the product after submitting the value of the procut it will refrece the value of teh form */}</input>
                                    </div>
                                    <div className="mb-3">
                                        <label> Enter description</label>
                                        <input type="text" name="description" className="form-control" onChange={(e) => handelchange(e)} value={Product.description}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter price</label>
                                        <input type="text" name="price" className="form-control" onChange={(e) => handelchange(e)} value={Product.price}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter status</label>
                                        <input type="text" name="status" className="form-control" onChange={(e) => handelchange(e)} value={Product.status}></input>
                                    </div>
                                    <button className="btn-btn-primery col-md-12">submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*for calling rest end api we will use axio with the help of axios we can call the rest api and we can connect with the databse */}

        </div>
    )
}

export default AddProduct
