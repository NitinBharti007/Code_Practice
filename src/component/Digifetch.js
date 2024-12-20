// import React, { useEffect, useState } from 'react'

// const Digifetch = () => {

//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=> response.json())
//         .then((data) => setData(data.slice(0, 10)))
//         .catch((error) => console.log(error));
//     })

//   return (
//     <div>
//       <ul>
//         {data.map((post)=>(
//             <li>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Digifetch


// import React, { useEffect, useState } from 'react'

// const Digifetch = () => {

//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=> res.json())
//     .then((data)=> setData(data.slice(0, 10)))
//     .catch((error)=> console.log(error))
//   },[])
//   return (
//     <div>
//       <ul>
//         {data.map((post)=>(
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Digifetch


// import React, { useEffect, useState } from 'react'

// const Digifetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=> res.json())
//     .then((data)=> setData(data.slice(0,10)))
//     .catch((error)=> console.log(error));
//   },[]);

//   return (
//     <div>
//       {data.map((post)=>(
//         <li key={post.id}>
//           {post.title}
//         </li>
//       ))}
//     </div>
//   )
// }

// export default Digifetch



import React, { useEffect, useState } from 'react'

const Digifetch = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> setData(data))
    .catch((error)=> console.log(error));
  },[])
  return (
    <div>
      <ul>
        {data.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Digifetch