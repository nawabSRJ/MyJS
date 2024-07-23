import logo from './logo.svg';
import './App.css';
import {Header , Footer, Container} from './Header';
import { blog } from './Data/blog.jsx';

// function App() {
//   let name = "Srajan Saxena";
//   let status = true;
//   let a = 10;
//   let b = 2;
//   let arr = [10,7,18,45];

//   return (
//     <div className="App">
//       <h1>{name} is a <span style={{color:"red"}}>developer</span></h1>
//       <h2>{a*b}</h2>
//       {
//         ((status) ?  <h1>Now this box is true</h1> : "")
//       }
//       {
//         arr.map((v)=>{
//           return(
//             <h1>{v}</h1>
//           )
//         })
//       }
//     </div>
//   );
// }

function App() {
  let headerInfo = {
    email: "srj@gmail.com",
    phone: 785969245,
  };

  return (
    <div className="App">
      <Header headerInfo={headerInfo} />
      <Container>
       
        {blog.map((v,i)=>{
          return(
            // passing object to child component , in this it is good to give a 'key' named prop to avoid the 'unique key error' on console
            <ProductItems pitems={v} key={i} />
          )
        })}
      </Container>
      {/* <Footer name="Srajan" phone="785969245" /> */}
    </div>
  );
}

export default App;

function ProductItems(props) {
  return (
    <div style={{ width: "200px", color: "white", backgroundColor: "red", margin: "10px", paddingLeft:"15px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{props.pitems.id})</h2>
        <h2>{props.pitems.title}</h2>
      </div>
    </div>
  );
}