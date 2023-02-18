import React from 'react'
import { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
const Home3 = () => {
/////////////////////////////
const [items, setItems] = useState([]);
        useEffect(() => {
                const getData = async () => {
                    const res=await fetch(`http://localhost:5000/order_c` )
                    const data = await res.json();
                    console.log(data)
                    setItems(data)
                }
              
              getData()
          }, []);
/////////////////////////////

// DELETE FUNCTION//

// const handleDelete= async(product_id)=>{
//                 // DELETE request using fetch with async/await
//                 const element = document.querySelector('#delete-request-async-await .status');
//                 await fetch('https://reqres.in/api/posts/1', { method: 'DELETE' });
//                 element.innerHTML = 'Delete successful';
//             };
// async function deleteCommand(id_order_cmd) {
//     try {
//         let response = await fetch(`https://url/${id_order_cmd}`, {
//             method: "DELETE",
//         });
//     } catch (err) {
//     }
// }


// const deleteCommand = (id) => {
// console.log("ufykghjk")
// //////////////////////////////////////////
//     // fetch(`http://localhost:5000/order_c/${id}`, {
//     //     method: "DELETE"
//     // })
// /////////////////////////////////////////
// // .then(res => res.text()) // or res.json()
// // .then(res => console.log(res))
   
//         // .then(() => {
//         //     navigate('/');
//         // });

// }
async function deleteCommand(id) {
    try {
        let response = await fetch(`http://localhost:5000/order_c/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
    }
}

//DELETE FUNCTION//

	return (
        <div className="sec__one">
                {/* <h1>hvbkjn,;</h1> */}
                
                    
	{items.map(
       
        
                (item) => {
                    const {  id_order_cmd,command_id,id_product,name,price,id_categorie,src} = item;
                    console.log(id_order_cmd)
                    return ( 
                        <article key={id_order_cmd} className="menu-item">
                            <img src={src} alt={name} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{name}</h4>
                                    <h4 className="price">DT{price}</h4>
                                </header>
                                <p className="item-text">
                                    <button onClick={()=>deleteCommand(id_order_cmd)}>DELETE ORDER</button>
                                    {/* <button onClick={(id_order_cmd) => {fetch(`http://localhost:5000/order_c/${id_order_cmd}`, {method: "DELETE"})}}> */}
                                        
                                        {/* DELETE ORDER</button> */}
                                </p>

                               <hr></hr>
                            </div>
                        </article>
                    );
                }
                
            )}
        </div>
       )
}
export default Home3
