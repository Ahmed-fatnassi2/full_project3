import React from "react";
import {useState,useEffect} from 'react';
const Menu2 = () => {

//
const [category, setCategory] = useState([]);

// useEffect(() => {
//   const getcategory = async () => {
//     const res = await fetch("http://localhost/devopsdeveloper/category");
//     const getdata = await res.json();
//     setCategory(getdata);
//     // console.log(getdata);
//   };

//   getcategory();
// },[]);

//
   const [items, setItems] = useState([]);
//// add command
//     const addcommand = async (product_id) => {
//         alert(product_id);
//         const res=await fetch(`http://localhost:5000/order_c`,{
//             Method: 'POST',
//             Headers: {
//                 Accept: 'application.json',
//                 'Content-Type': 'application/json'
//               },
//               Body: {
//                 "product_id":product_id
//               },
//               Cache: 'default'
//         } )
// }
const addcommand = async (product_id) => {
    alert(product_id);
    const res = await fetch('http://localhost:5000/order_c', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: product_id
        }),
        cache: 'default'
    });
}

/// add command
    useEffect(() => {
        const getData = async () => {
            const res=await fetch(`http://localhost:5000/prod` )
            const data = await res.json();
            console.log(data)
            setItems(data)
        }
      
      getData()
  }, []);

    // const resetf = () => {
    //     // document.getElementById("e1").value = "";
    //     alert("Commande Envoyé");
    // };
    // function resetf() {
    //     alert("tgvhbj");
    // }
    return (
        <div className="section-center">
            {items.map(
                (item) => {
                    const { id_product, name, price, id_categorie,src } = item;
                    // if (category !== "Petit-déj") {
                    return (
                        <article key={id_product} className="menu-item">
                            <img src={src} alt={name} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{name}</h4>
                                    <h4 className="price">DT{price}</h4>
                                </header>
                                <p className="item-text">
                                    {/* {ingredients.map((i) => {
                                        return { i };
                                    })} */}
                                    {/* for (let ; i<ingredients.length; i++) {
                                        console.log

                                        
                                    } */}
                                    {/* <br></br> */}
                                    {/* Ingedient(s) à eliminer: */}
                                    {/* <input
                                        id="e1"
                                        type="text"
                                        name="eliminé" */}
                                    {/* // placeholder={"Ingredient(s) à eliminer"} */}
                                    {/* /> */}
                                    
                                    <button onClick={() => addcommand(item.id_product)}>Commander</button>
                                
                                </p>
{/* addcommand(item.id_product) */}
                                {/* <button type="submit" onClick={resetf()}></button> */}
                                {/* onClick={resetf()} */}
                            </div>
                        </article>
                    );
                }
                // if (category === "Petit-déj") {
                //     return (
                //         <article key={id} className="menu-item">
                //             <img src={img} alt={title} className="photo" />
                //             <div className="item-info">
                //                 <header>
                //                     <h4>{title}</h4>
                //                     <h4 className="price">DT{price}</h4>
                //                 </header>
                //                 <p className="item-text">
                //                     {desc} <br></br>
                //                     {/* Ingedient(s) à eliminer: */}
                //                     {/* <input
                //                         id="e1"
                //                         type="text"
                //                         name="eliminé"
                //                         // placeholder={"Ingredient(s) à eliminer"}
                //                     />
                //                     <button>Commander</button> */}
                //                 </p>

                //                 {/* <button type="submit" onClick={resetf()}></button> */}
                //                 {/* onClick={resetf()} */}
                //             </div>
                // </article>
                //     );
                // }
            )}
        </div>
    );
};

export default Menu2;
