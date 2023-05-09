import React, { useEffect, useState } from 'react'
import Product_Service from '../service/Product_Service';
import { Link, useParams } from 'react-router-dom';

function Home() {


  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");







  useEffect(() => {
    init();
  }, []);


  {/* roduct_Service.getAllProduct() => here we are storing the data by using this reduce_Service is the class name by using this name we can
get the backend api and we can get all the data from backecnd and we are setting the data in setProductList   */}
  const init = () => {
    Product_Service.getAllProduct()
      .then((res) => {
        console.log(res.data)
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const deleteProduct = (id) => {
    Product_Service
      .deleteProductByid(id)
      .then((res) => {
        setMsg("Delete Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };
const {id}=useParams();
console.log(id);
  {/* here we have getAll Method by using thet method we will get the all the data 

=>by using useEffect whenever the componet will load all the data will come by using useeffect*/}




  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center"> All Product List

                {msg && <p className="fs-4 text-centertext-success"></p>}
              </div>
              <div className="card-body">


                <table className="table">
                  <thead>
                    {/*here we are using map by using map we can  */}



                    <tr>
                      <th scope="col">s1 No</th>
                      <th scope="col">Product name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => <tr>

                      <td>{num + 1}</td>
                      <td>{p.productName}</td>
                      <td>{p.description}</td>
                      <td>{p.price}</td>
                      <td>{p.status}</td>

                      <td>
                        <Link to={'/editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
{/*here ehenever this above linke hit component will load and it will give for that we will use one hook name is {useParams}  */}
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          Delete
                        </button>

                      </td>
                    </tr>)}





                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </div>
      </div>





    </>
  )
}

export default Home
