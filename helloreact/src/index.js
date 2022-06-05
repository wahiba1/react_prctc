import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
// import App from './App';


  // React.createElement("div", {style: {color: "purple"}}, React.createElement("h1",null, "hi!")),
  // ReactDOM.render(
  //   React.createElement(
  //     "ul",
  //     {style: {color: "blue"}},
  //     React.createElement("li", null, "Hot Dogs"),
  //     React.createElement("li", null, "Hamburger"),
  //     React.createElement("li", null, "Pizza"),
  //     React.createElement("li", null, "Sushi")
  //   ),
  //   document.getElementById("root")
  // );


  // ReactDOM.render(
  //   <ul>
  //     <li>Hot Dogs</li>
  //     <li>Sushi</li>
  //     <li>Hamburger</li>
  //     <li>Pizza</li>
  //   </ul>,
  //   document.getElementById("root")
  // )

  // let city = "Madrid";
  // let city = {
  //   name: "Madrid",
  //   country: "Spain"
  // }
  // ReactDOM.render(
  //   <h1 id="heading" className="cool-text">Hello from {city.name} is in {city.country}!</h1>,
  //   document.getElementById("root")
  // )
  // function Hello() {
  //   return (
  //     <div>
  //       <h1>Welcome to React!</h1>
  //       <p>Let's build something cool.</p>
  //     </div>
  //   )
  // }
  // ReactDOM.render(
  //   <Hello />,
  //   document.getElementById("root") 
  // )
  
  // props:-
  // function Hello(props) {
    // console.log(props);
  //   function Hello({library, message, number}) {
  //   // console.log(Object.keys(props))

  //     return (
  //     <div>
  //       {/* <h1>Welcome to {props.library}!</h1>
  //       <p>{props.message}</p> */}
  //       <h1>Welcome to {library}!</h1>
  //       <p>{message}</p>
  //       {/* <p>{props.number} Props Total</p> */}
  //     {/* <p>{Object.keys(props).length}Props Total</p> */}
  //     <p>{number}Props Total</p>
  //     </div>
  //   );
  //  }
  // ReactDOM.render(
  //   <Hello 
  //   library="React" 
  //   message="Have fun!" 
  //   number={3}/>,
  //   document.getElementById("root") 
  // )
// function Lake({name}) {
//   return <h1>{ name}</h1>;
// }
// const lakeList = [
//   "Echo Lake",
//   "Maud Lake",
//   "Cascade Lake"
// ];
const lakeList = [
  {id : "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];
const list = [1,2,3,4,5];

//   function App({lakes}) {
//     return (
//     // <div>
//     //   <Lake name="Lake Tahoe" />
//     //   <Lake name="Angora Lake" />
//     //   <Lake name="Shirley Lake" />
//     // </div>
//       // <ul>
//       //   {props.lakes.map(lake => (<li>{lake}</li>))}
//       // </ul>

// <div>
//         {lakes.map(lake => <div key={lake.id}>
//           <h2>{lake.name}</h2>
//           <p>Accessed by: {lake.trailhead}</p>
//         </div>)}
//       </div>
//     ); 
//   }

function App({items})
{
  return(
    <ul>
      {items.map((item)=> (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  )
}
  ReactDOM.render(
    <App lakes={lakeList} />,
    document.getElementById("root")
  );