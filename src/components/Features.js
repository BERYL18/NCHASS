import React from 'react';

const Features= () => {
  return (
    <section className="py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-teal-400 text-center text-3xl md:text-4xl font-bold mb-10">
          Unique Features of NCHASS
        </h2>
        <div className=" flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">

          {/* Feature 1 */}
          <div className="bg-teal-100 shadow-md rounded-lg p-4 flex flex-col  h-64  w-80">
            <h3 className=" text-teal-500 text-2xl font-bold p-2">QR CODE</h3>
            <p className="bold text-start">Very fast transactions Very fast transactions Very fast transactions Very fast transactions Very fast transactions</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-teal-100  shadow-md rounded-lg p-4 flex flex-col  h-64 w-80">
            <h3 className=" text-teal-500 text-2xl font-bold p-2 ">KYC </h3>
            <p className=" text-black text-start">Your account is  secured Very fast transactions Very fast transactions Very fast transactions </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-teal-100 shadow-md rounded-lg p-4 flex flex-col h-64  w-80">
            <h3 className="text-teal-500 text-2xl font-bold p-2">Fast</h3>
            <p className="text-start">Very fast transactionsVery fast transactions Very fasttransactions Very fast transactions Very fast transactions</p>
          </div>
          
           {/* Feature 4 */}
           <div className="bg-teal-100 shadow-md rounded-lg p-4 flex flex-col  h-64  w-80">
            <h3 className="text-teal-500 text-2xl font-bold p-2">Fast</h3>
            <p className=" text-start"> Very fast transactionsVery fast transactions Very fasttransactions Very fastransactionsVery fast transactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
