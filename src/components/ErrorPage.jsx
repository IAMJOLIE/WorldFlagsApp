import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react'; 


const ErrorPage = () => {
    const error = useRouteError();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Oops! Somthing went wrong.</h1>
      
      <Link to={'/'} className="nav-link"> 
         <div className='arrow' >
        <ArrowLeft size={20} />
        <p className='back'>Go to Home page</p>
        </div>
        
            
        </Link>
      
      
    </div>
  );
};

export default ErrorPage;