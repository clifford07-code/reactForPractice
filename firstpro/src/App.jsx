import React from 'react'
import Card from './components/card.jsx'



export const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote (India)"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 days ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    datePosted: "8 days ago",
    post: "Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  }
];
console.log(jobOpenings)



  return (
    <div className='parent'>

      {jobOpenings.map((ele,id)=>{
        return <div key={id}><Card name={ele.companyName} logo={ele.brandLogo} date={ele.datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location}/></div> 
      })}
        
    </div>
 
   
  )
}

export default App