import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.css';


function App() {
  const [Data, setData] = useState([])

  const posts = (e) => {
    e.preventDefault()
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
    var image = document.getElementById("imageUrl").value;
    var date = new Date().toLocaleDateString()
    console.log()
    let newData = {
      name: name,
      text: text,
      image: image,
      date: date
    }

  

    // console.log(newData)
    setData((previousDefault) => {
      return previousDefault.concat([newData]);
    })
  }
  return (
    <div>
      <h1>HeLLo PakisTanI</h1>
      <form onSubmit={posts}>
        <p>Name : </p>

        <input type='text' id="name" />
        <p>Writte SomeText</p>
        <input type='text' id="text" />
        <p>submit ImgUrl</p>
        <input type='text' id="imageUrl" />
        <button type='submit'>Post</button>
      </form>



      {Data.map((EachPost, i) => {
        // console.log(EachPost)
        return (

          <div key={i} className="post">
            <div className="userInfo">
              <div className="profilePic">
                <img className="userPic" src={EachPost.image} />
              </div>
              <div className="userName">
                <h2>{EachPost.name}</h2>
                <p>{EachPost.date}</p>
              </div>

            </div>
            <div className="psotText">
              <img className="image" src={EachPost.image} />
            </div>
          </div>
        )

      })}


      

    </div>


  )


}



ReactDOM.render(
<App />,
  document.getElementById('root')
);

