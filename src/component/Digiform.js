// import React, { useState } from 'react'

// const Digiform = () => {
//     const [formData, setFormData] = useState({name: '', email: ''})

//     const handleChange = (e) =>{
//         const {name, value} = e.target;
//         setFormData({...formData, [name]: value});
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         alert(`Form Submitted: Name: ${formData.name}, Email: ${formData.email}`)
//     }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input type="text" name="name" onChange={handleChange} required/>
//         <br />
//         <label>Email: </label>
//         <input type="text" name="email" onChange={handleChange} required/>
//         <br />
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   )
// }

// export default Digiform


// import React, { useState } from 'react'

// const Digiform = () => {

//   const [formData, setFormData] = useState({name: '', email: ''});

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     alert(`Form Submitted: Name : ${formData.name}, ${formData.email}`);
//   }

//   const handleChange = (e) =>{
//     const {name, value} = e.target;
//     setFormData({...formData, [name] : value});
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input type="text" name="name" onChange={handleChange} placeholder='Enter Your Name' required/>
//         <label>Email: </label>
//         <input type="text" name="email" onChange={handleChange} placeholder='Enter Your Email' required/>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Digiform



import React, { useState } from 'react'

const Digiform = () => {

  const [formData, setFormData] = useState({name: '', email: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData , [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Form Submitted: Name : ${formData.name}, ${formData.email}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} placeholder='Enter Your Name' />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleChange} placeholder='Enter Your Email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Digiform;

