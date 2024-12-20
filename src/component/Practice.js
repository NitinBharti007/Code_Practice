// import React from "react";

// import { useEffect } from "react";

// 1. Using map to Render a List

// const Practice = () => {

// const arr = ["Manshi", "Sneha", "Amit", "Ritik"]
//   return (
//     <div>
//         <h2>Use of Map</h2>
//       <ul>
//         {arr.map((name, index) =>(
//             <li style={{listStyle: 'none', color: 'red'}} key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Practice

// 2. Using filter to Show Specific Items

// const FilterExample = () => {
//     const products = [
//       { id: 1, name: 'Laptop', price: 100 },
//       { id: 2, name: 'Mouse', price: 20 },
//       { id: 3, name: 'Keyboard', price: 60 },
//     ];

//     const exProduct = products.filter((product) => product.price > 50);

//     return(
//         <div>
//             <h2>Expensive Products</h2>
//             <ul>
//                 {exProduct.map((product)=>(
//                     <li key={product.id}>
//                         {product.name} - {product.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// };

// export default FilterExample;

// 3. Using slice to Display a Limited Number of Items

// const Practice = () => {

//     const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//     const firstThreeItems = items.slice(0,3);
//   return (
//     <div>
//       <ul>
//         {firstThreeItems.map((item, index)=>(
//             <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Practice

// 4. Using reduce to Calculate a Total

// const Practice = () => {

//     const cart = [
//         { id: 1, name: 'Book', price: 10 },
//         { id: 2, name: 'Pen', price: 2 },
//         { id: 3, name: 'Bag', price: 50 },
//       ];

//       const total = cart.reduce((total,item)=> total + item.price, 0);
//   return (
//     <div>
//       <h2>Cart Price</h2>
//       <p>Total : {total}</p>
//     </div>
//   )
// }

// export default Practice

// 5. Using find to Locate a Specific Item

// const Practice = () => {
//     const products = [
//         { id: 1, name: 'Book', price: 10 },
//         { id: 2, name: 'Pen', price: 2 },
//         { id: 3, name: 'Bag', price: 60 },
//         { id: 4, name: 'Laptop', price: 100 },
//       ];
//       const prod = products.find((product)=> product.price < 2)
//   return (
//     <div>
//         <h2>Products</h2>
//         {prod ? ( <p>{prod.name} - ${prod.price}</p>): ( <p>No Product Foound</p> )}
//     </div>
//   )
// }

// export default Practice

// 6. Using sort to Arrange Items

// const Practice = () => {
//   const numbers = [12, 3, 24, 5, 67, 7, 32, 34, 2, 43];

//   const shortNumber = [...numbers].sort((a, b) => a - b);
//   return (
//     <div>
//       <h2>Sorted Numbers</h2>
//       <ul>
//         {shortNumber.map((num,index)=>(
//             <li>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Practice;

// 7. Using every and some

// const Practice = () => {
//     const products = [
//         { id: 1, name: 'Book', price: 10 },
//         { id: 2, name: 'Pen', price: 2 },
//         { id: 3, name: 'Bag', price: 50 },
//       ];

//       const allUnder100 = products.every((product)=> product.price < 100);
//       const someUnder10 = products.some((product)=> product.price < 10);
//   return (
//     <div>
//       <h2>All products</h2>
//       <p>All Products Under $100: {allUnder100 ? 'Yes' : 'No' } </p>
//       <p>All Products Under $10: {someUnder10 ? 'Yes' : 'No' } </p>
//     </div>
//   )
// }

// export default Practice

// 8. Using concat to Merge Arrays

// const Practice = () => {
//     const arr1 = ['Apple', 'Banana'];
//     const arr2 = ['Cherry', 'Date'];

//     const array = arr1.concat(arr2);
//   return (
//     <div>
//       <h2>Merge Array</h2>
//       {array.map((item)=>(
//         <li >{item}</li>
//       ))}
//     </div>
//   )
// }

// export default Practice

// 9. Reverses String

// const reverseString = (str) =>{
//     return str.split('').reverse().join('');
// };

// console.log(reverseString("Manshi"));

// 10. Dupicate Array

// const removeDupli = (arr) =>{
//     return [...new Set(arr)];
// }
// console.log(removeDupli([1,2,2,3,4,4,4,5,6,7]));

// 11. Counter Button

// import React, { useState } from 'react'

// const Practice = () => {
//     const [count, setCount] = useState(0);

//   return (
//     <div>
//         <p>Count : {count}</p>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//       <button onClick={()=>setCount(count-1)}>Decrease</button>
//     </div>
//   )
// }

// export default Practice

// 12. Program to find the longest word in a given sentence

// function longest(sentence){
//     let words = sentence.split(' ');
//     let largest = '';
//     words.forEach((word)=>{
//         if(word.length > largest.length){
//             largest = word;
//         }
//     });
//     return largest;
// }

// console.log(longest("Frontend development is amazing"));

// 13. Check whether a string is a palindrome

// function isPalindrome(str){
//     const reverse = str.split('').reverse().join('');
//     return str === reverse;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 14. Reverse a string without using a built-in method

// function reverseString(str){
//     let reverse = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         reverse += str[i];
//     }
//     return reverse;
// }

// console.log(reverseString('Hello'));

// import React, { useState } from 'react'

// function ToDo(){
//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");

//     const addToDO = () =>{
//         if(input){
//             setTodos([...todos, input]);
//             setInput("");
//         }
//     };
//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Enter Your Task'/>
//       <button onClick={addToDO}>Add Task</button>
//       <ul>
//         {todos.map((task, index)=>(
//             <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ToDo;

// import React, { useState } from "react";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addToDo = () => {
//     if (input) {
//       setTodos([...todos, input]);
//       setInput("");
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter Your Task"
//       />
//       <button onClick={addToDo}>Add Task Dost</button>
//       <ul>
//         {todos.map((task, index)=>(
//             <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res)=> res.json())
//         .then((data)=> setData(data.slice(0, 10)))
//         .catch((error)=> console.log(error))
//     },[])

//   return (
//     <div>
//         <ul>
//             {data.map((post, id)=>(
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Practice;

// import React, { useState } from 'react'

// const Practice = () => {
//     const [data, setData] = useState({name: '', email: ''});

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         alert(`Form Submitted: Name: ${data.name}, Email: ${data.email}`)
//         console.log(`Form Submitted: Name: ${data.name}, Email: ${data.email}`)
//     }
//     const handleChange = (e) =>{
//         const {name, value} = e.target;
//         setData({...data, [name]: value});
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name: </label>
//       <input type="text" name="name" onChange={handleChange} placeholder='Enter Your Name' />
//       <label htmlFor="email">Email: </label>
//       <input type="text" name="email" onChange={handleChange} placeholder='Enter Your Email' />
//       <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from "react";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addToDo = () => {
//     if (input) {
//       setTodos([...todos, input]);
//       setInput("");
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         placeholder="Enter Your Task"
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <br />

//       <button onClick={addToDo}>Add Your Task</button>
//       <ul>
//         {todos.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Practice = () => {
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((res)=>{
//             setData(res.data);
//         });
//     },[])
//   return (
//     <div>
//       <ul>
//         {data.map((user, id)=>(
//             <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from "react";

// const Practice1 = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div>
//       <ol>
//         {data.map((user) => (
//           <li key={user.id}>
//             Name: {user.name}--{user.email}--{user.phone}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Practice1;
