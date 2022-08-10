import logo from './logo.svg';
import './App.css';


import Card from "./Card";





function App() {

  const data=[
  {
   name: "FREE",
   Price: 0,
   currency:"$",
   Period : '/month',

   Features:[
   {
     title: "Single User",
     isEnable: true  
   },
   
   {
    title: "5GB Storage",
    isEnable: true  
  },
  {
    title: "Unlimited Public Projects",
    isEnable: true  
  },
  {
    title: "Community Access",
    isEnable: true  
  },
  {
    title: "Unlimited Private Projects",
    isEnable: false  
  },
  {
    title: "Dedicated Phone Support",
    isEnable: false  
  },
  {
    title: "Free Subdomain",
    isEnable: false  
  },
  {
    title: "Monthly Status Reports",
    isEnable: false  
  },

   ]
     },
     {
     
      name: "PLUS",
      Price: 9,
      currency:"$",
      Period : '/month',
      Features:[
        {
          title: "5 Users",
          isEnable: true,
          isBold : true ,
        },
        
        {
         title: "50GB Storage",
         isEnable: true  
       },
       {
         title: "Unlimited Public Projects",
         isEnable: true  
       },
       {
         title: "Community Access",
         isEnable: true  
       },
       {
         title: "Unlimited Private Projects",
         isEnable: true  
       },
       {
         title: "Dedicated Phone Support",
         isEnable: true  
       },
       {
         title: "Free Subdomain",
         isEnable: true  
       },
       {
         title: "Monthly Status Reports",
         isEnable: false  
       },
     
        ]

     },

     {
      name: "PRO",
      Price: 49,
      currency:"$",
      Period : '/month',
      Features:[
        {
          title: "Unlimited Users",
          isEnable: true,
          isBold: true,
        },
        
        {
         title: "150GB Storage",
         isEnable: true  
       },
       {
         title: "Unlimited Public Projects",
         isEnable: true  
       },
       {
         title: "Community Access",
         isEnable: true  
       },
       {
         title: "Unlimited Private Projects",
         isEnable: true  
       },
       {
         title: "Dedicated Phone Support",
         isEnable: true  
       },
       {
         title: " Unlimited Free Subdomain",
         isEnable: true  
       },
       {
         title: "Monthly Status Reports",
         isEnable: true  
       },
     
        ]
     }


  ]




  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {

          data.map((item)=> {
        
            return <Card item={item}></Card>

          })

          
        }
            </div>
              </div>
                </section>
    
  );
}

export default App;

