import React, { useEffect, useState } from "react";
import "./Practice1.css";

const Practice1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card-container">
      <h1 className="header">Posts</h1>
      <div className="card-grid">
        {data.map((post) => (
          <div key={post.id} className="card">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-body">Post ID: {post.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice1;



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Practice1 = () => {
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//       setData(res.data)
//     })
//   },[])
//   return (
//     <div>
//       <ul>
//       {data.map((post)=>(
//         <li>{post.title}</li>
//       ))}
//       </ul>
//     </div>
//   )
// }

// export default Practice1

// import React, { useState } from 'react'

// export default function ToDo(){
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addToDO = () =>{
//     if(input){
//       setTodos([...todos, input])
//       setInput("");
//     }
//   }

//   return(
//     <div>
//       <input type="text" placeholder='Enter Your Task' value={input} onChange={(e)=> setInput(e.target.value)}/>
//       <button onClick={addToDO}>Add Task</button>
//       <ul>
//         {todos.map((task)=>(
//           <li>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// const Practice1 = () => {
//   const [data, setData] = useState({name: '', email: ''});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${data.name}, Email: ${data.email}`);
//   }

//   const handleChange = (e) =>{
//     const {name, value} = e.target;
//     setData({...data, [name]: value});
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Name">Name: </label>
//         <input type="text" name="name" placeholder='Enter Your Name' onChange={handleChange}/>
//         <label htmlFor="Email">Email: </label>
//         <input type="text" name='email' placeholder='Enter Your Email' onChange={handleChange}/>
//         <button type='submit'>Submit</button>
//       </form>      
//     </div>
//   )
// }

// export default Practice1
