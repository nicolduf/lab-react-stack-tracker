import { Routes, Route, useParams } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  const [company, setCompanyItem]= useState(props.companies)
  const { companySlug } = useParams();
  const clickCompany = company.find((company) => company.slug === companySlug);
  return (
    <><div>
    <h1>{clickCompany.name} Company Profile</h1>
    <p>{clickCompany.website}</p>
    <p>{clickCompany.description}</p>
    <img src={clickCompany.logo} style= {{height: "100px"}} />
  </div>
  <div>{clickCompany.techStack.map(oneTechStack => {
        return (
        <div>
             <Link to={`/tech/${oneTechStack.slug}`}> {oneTechStack.name}
               <img src={oneTechStack.image} style= {{height: "100px"}} />
              </Link> 
        </div>
          )})}
</div></>
  );

}



export default CompanyPage;
