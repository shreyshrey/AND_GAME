import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import giphyRandom from 'giphy-random';
import './andUser';




class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const data = [
  {id: 'a', name: 'Ash'},
  {id: 'b', name: 'Mark' },
  {id: 'c', name: 'Jose'},
  {id: 'd', name: 'Costa'},
  {id: 'e', name: 'Andrew'},
  {id: 'f', name: 'Jose'},
  {id: 'g', name: 'Shreya'},
  {id: 'h', name: 'Eesa'},
  {id: 'i', name: 'Dan'},
]

class List extends Component {
  render() {
    return (
      <div>
        {data.map(item => <div id={item.id}>{item.name}</div>)}
      </div>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('andisContainer'));


const Ashley = document.getElementById('a');
const Mark = document.getElementById('b');
const Jose = document.getElementById('c');
const Costa = document.getElementById('d');
const Andrew = document.getElementById('e')
const MarkM = document.getElementById('f');
const Shreya = document.getElementById('g');
const Eesa = document.getElementById('h');
const Dan = document.getElementById('i');

Ashley.addEventListener("click", function(){
  alert("Selected: Ashley");
  getGifURL("explorer");
})
Mark.addEventListener("click", function(){
  alert("Selected: Mark");
  getGifURL("american footballer");
})
Shreya.addEventListener("click", function(){
  alert("Selected: Shreya");
  getGifURL("gym freak");
})
Jose.addEventListener("click", function(){
  alert("Selected: Jose");
  getGifURL("cinema crazy");
})
Dan.addEventListener("click", function(){
  alert("Selected: Dan");
  getGifURL("party monster");
})
Andrew.addEventListener("click", function(){
  alert("Selected: Andrew");
  getGifURL("parrot wrangler");
})
Eesa.addEventListener("click", function(){
  alert("Selected: Eesa");
  getGifURL("house dj");
})
MarkM.addEventListener("click", function(){
  alert("Selected: MarkM");
  getGifURL("fossil hunter");
})
Costa.addEventListener("click", function(){
  alert("Selected: Costa");
  getGifURL("console gamer");
})

// Ashley.addEventListener("click", function(){
//   alert("Selected: Ashley");
// })
// Ashley.addEventListener("click", function(){
//   alert("Selected: Ashley");
// })

// for (let i = 0; i < data.length; i++) {
//   // data[i].name.addEventListener("click", function(){
//   //   alert("you have selected: " + data[i].name);
//   // })
//   data[i].addEventListener("click", function() {
//    data[i].style.backgroundColor = "blue";
//  });
// }

function getGifURL(title_tag){
 const API_KEY = 'vcVEyl0GAhMskAkWLueHJuP8lNLRhO0i';
 giphyRandom(API_KEY, {tag: title_tag }).then(r => {
   console.log(r);
   titleIMG.src = r.data.image_url;
 });
}

const titleIMG = document.getElementById('title_img');

export default App;


// var user = {
//   basicInfo: {
//     name: "Ash",
//     photo: "ANDi-Images/Ash.jpg",
//   }
// }
//
// class Avatar extends React.Component {
//   render() {
//     var image = this.props.image,
//         style = {
//           width: this.props.width || 50,
//           height: this.props.height || 50
//         };
//
//     if (!image) return null;
//
//     return (
//      <div className="avatar" style={style}>
//            <img src={this.props.image} />
//       </div>
//     );
//   }
// }
//
// class MainPanel extends React.Component {
//   render() {
//     var info = this.props.info;
//     if (!info) return null;
//
//     return (
//      <div>
//         <div className="top">
//             <Avatar
//                image={info.photo}
//                width={100}
//                height={100}
//             />
//             <h2>{info.name}</h2>
//           <hr />
//         </div>
//         <div className="bottom">
//         </div>
//       </div>
//     );
//   }
// }
//
// class UserProfile extends React.Component {
//   render() {
//     return (
//       <div id="user-profile">
//         <MainPanel info={user.basicInfo} />
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<UserProfile />, document.getElementById('andisContainer'));



// class  ANDis extends React.Component{
//
//     render() {
//         var names = ['Ash', 'Mark', 'Jose', 'Shreya', 'Eesa', 'Dan', 'Andrew', 'Costa'];
//         // const imgSrc = ["ANDis-Images/Ash.jpg", "ANDis-Images/Mark.jpg"];
//         var namesList = names.map(function(name){
//                         return <li>{name}</li>
//                       });
//
//         return  <ul>{ namesList }</ul>
//
//     }
// }
//
// ReactDOM.render(
//     <ANDis />,
//     document.getElementById('andisContainer')
//
// );
