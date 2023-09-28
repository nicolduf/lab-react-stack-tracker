import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [company, setCompanyItem]= useState(props.companies)
  return (
    
    <div>
      {console.log(company[0].id)}
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {company.map(oneCompany => {
        return (
        <div key={oneCompany.id}>
             <Link to={`/company/${oneCompany.slug}`}> {oneCompany.name}
               <img src={oneCompany.logo} style= {{height: "100px"}} />
              </Link> 
        </div>
          )})}

    </div>
  );
}

export default HomePage;