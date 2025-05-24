import React from 'react';  
import PageHeader from '../components/PageHeader';// Ensure to import your PageHeader component  

function Customers() {  
  return (  
    <div className="p-4">  
      <PageHeader title="Customers" />  

      <p className="text-gray-600">  
        Welcome to the Customers page. Here you can manage your customers, view their details, and more.  
      </p>  
      
      {/* Sample list of customers */}  
      <ul className="mt-4">  
        <li className="border-b py-2">Customer 1</li>  
        <li className="border-b py-2">Customer 2</li>  
        <li className="border-b py-2">Customer 3</li>  
      </ul>  
    </div>  
  );  
}  

export default Customers;  