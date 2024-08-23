import React from 'react';

const Features= () => {
  return (
    <section className="py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-[#117C6F] text-center text-3xl md:text-4xl font-bold mb-10">
          Unique Features of NCHASS
        </h2>
        <div className=" flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">

          {/* Feature 1 */}
          <div className="bg-teal-100 shadow-md rounded-lg px-4 py-10 flex flex-col  ">
            <h3 className=" text-teal-500 text-2xl font-bold  text-center">QR CODE</h3>
            <p className="bold text-justify">Users can pay at retail locations or 
              transfer money by scanning a QR code technology. This feature could be
               extended to peer-to-peer payments, allowing users to simply tap their 
               phones together to complete a transaction</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-teal-100  shadow-md rounded-lg px-4 py-10  flex flex-col  ">
            <h3 className=" text-teal-500 text-2xl font-bold text-center">Transaction Insurance</h3>
            <p className=" text-black  text-justify">To enhance security, the app could offer
               optional insurance on transactions, protecting users from losses
              due to fraud or errors. Additionally, real-time fraud detection
                algorithms would be implemented to monitor transactions and flag suspicious activity, 
                providing users with peace of mind. </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-teal-100 shadow-md rounded-lg px-4 py-10 flex flex-col ">
            <h3 className="text-teal-500 text-2xl font-bold text-center">Know Your Customer</h3>
            <p className="text-justify">KYC ensures compliance with regulations and prevents fraud by
               verifying user identities through official documents. The process should be quick, secure, and user-friendly, with automated verification and clear instructions, while protecting user data
                and biometric data</p>
          </div>
          
           {/* Feature 4 */}
           <div className="bg-teal-100 shadow-md rounded-lg px-4 py-10  flex flex-col ">
            <h3 className="text-teal-500 text-2xl font-bold text-center">Quick Send</h3>
            <p className=" text-justify"> Quick Send enables fast, easy money transfers with
               minimal input. Features like frequent contacts, pre-set amounts, and biometric
                authentication streamline the process, allowing users to send money in
               under a minute, with real-time notifications and a simple interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
