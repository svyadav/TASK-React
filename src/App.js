import React from "react";
import './App.css'
import Card from "./Card";




export default function App(){
  const data=[
    {subscription:"FREE", price:"0",user:"single User",storage:"5GB storage",mute:"text-muted",blank:"",bold:"fw-bold",notbold:"",check:"fas fa-check",uncheck:"fas fa-times"},
    {subscription:"PLUS", price:"9",user:"5 Users",storage:"50GB storage",mute:"text-muted",blank:"",bold:"fw-bold",notbold:"",check:"fas fa-check",uncheck:"fas fa-times"},
    {subscription:"PRO" ,price:"49",user:"Unlimited User",storage:"150GB storage",subdomain:"Unlimited",mute:"text-muted",blank:"",bold:"fw-bold",notbold:"",check:"fas fa-check",uncheck:"fas fa-times"}
  ]


  return (
    <div>
      <section className="pricing py-5">
      <div className="container">
      <div className="row">
      
      
       
          {
            data.map((element,index)=>{
              return(
              
              <Card key={index} props={element}/>
              )
              
           
  
            })
          } 
    

        
      </div>
      </div>
      </section>
    </div>

  );
}