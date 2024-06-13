import axios from "axios";
import { useEffect } from "react";

const Ssl = () => {

    const hadleSsl = (e)=>{
        e.preventDefault()
        

        const email = e.target.email.value
        const amount =  parseInt(e.target.amount.value)
        const city = e.target.city.value
        const name = e.target.name.value
        const productName = e.target.productName.value

        const data = {
            email:email,
            amount:amount,
            city:city,
            name:name,
            productName: productName,
            status : "panding"
        }

        axios.post(`http://localhost:3000/create-payment`,data)
        .then((result) => {
            console.log(result.data)
            if(result.data.paymentUrl ){
                window.location.replace(result.data.paymentUrl)
            }
        })
        
       
    }

    




  return (
    <div>
      <h1 className="text-[40px]">PAYMENT NOW !</h1>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hadleSsl} className="card-body">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" name="name" placeholder="Your Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="email"
                  className="grow"
                  name="email"
                  placeholder="unknown@site.com"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Product
                <input
                  type="text"
                  className="grow"
                  name="productName"
                  placeholder="Name pf product"
                 
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Amount
                <input
                  type="text"
                  className="grow"
                  name="amount"
                  placeholder="Amount"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                City
                <input
                  type="text"
                  className="grow"
                  name="city"
                  placeholder="City"
                />
              </label>
              <label >
                <button  className="btn w-full bg-black text-white hover:bg-blue-500">Submit</button>
              </label>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ssl;
