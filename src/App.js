import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Box
         free = "FREE"
         price = "$0"
         month = "/month"
         content1 = "✔ Single User"
         content2 = "✔ 5GB Storage"
         content3 = "✔ Unlimited Public Projects"
         content4 = "✔ Community Access"
         content5 = "❌ Unlimited Private Projects"
         content7 = "❌ Free Subdomain"
         content6 = "❌ Dedicated Phone Support"
         content8 = "❌ Monthly Status Reports"
         Button = "BUTTON"
      />
      <Box
         free = "PLUS"
         price = "$9"
         month = "/month"
         content1 = "✔ 5 Users"
         content2 = "✔ 50GB Storage"
         content3 = "✔ Unlimited Public Projects"
         content4 = "✔ Community Access"
         content5 = "✔ Unlimited Private Projects"
         content6 = "✔ Dedicated Phone Support"
         content7 = "✔ Free Subdomain"
         content8 = "❌Monthly Status Reports"         
         Button = "BUTTON"

      />
      <Box
         free = "PRO"
         price = "$49"
         month = "/month"
         content1 = "✔ Unlimited Users"
         content2 = "✔ 150GB Storage"
         content3 = "✔ Unlimited Public Projects"
         content4 = "✔ Community Access"
         content5 = "✔ Unlimited Private Projects"
         content6 = "✔ Dedicated Phone Support"
         content7 = "✔ Unlimited Free Subdomains"
         content8 = "✔ Monthly Status Reports"
         Button = "BUTTON"

      />
    </div>
  );
}

export default App;

function Box(props){
  return(
    <div className='card'>
      <div className='box-1'>
        <p>{props.free}</p>
        <h3>{props.price}<span>{props.month}</span></h3>
      </div>
      <div className='box-2'>
         <p>{props.content1}</p>
         <p>{props.content2}</p>
         <p>{props.content3}</p>
         <p>{props.content4}</p>
         <p>{props.content5}</p>
         <p>{props.content6}</p>
         <p>{props.content7}</p>
         <p>{props.content8}</p>
      </div>
      <div className='btn'>
        <button>{props.Button}</button>
      </div>
    </div>
  );
}