import React, {useState, useEffect} from "react";

const Modal = (props) =>{

const [dessert, setDessert]= useState({})



    useEffect (()=> {
        fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.caption}`)
        .then ((response) => response.json())
        .then ((response) => {
            setDessert(response.meals[0])
            console.log(response.meals)
        })
        
      }, [props.caption])

     

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.caption}</h4>
                </div>
                <div className="modal-body">
                    <p className="ingredient-title">Ingredients:</p>
                    <ul>
                        <li className="ingredient-list">
                        {dessert.strIngredient1 !== null && <li>{dessert.strIngredient1}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient1}.png`}
                          alt="ingredient"
                          height = "70px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient2 !== null && <li>{dessert.strIngredient2}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient2}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient3 !== null && <li>{dessert.strIngredient3}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient3}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient4 !== null && <li>{dessert.strIngredient4}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient4}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient5 !== null && <li>{dessert.strIngredient5}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient5}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient6 !== null && <li>{dessert.strIngredient6}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient6}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient7 !== null && <li>{dessert.strIngredient7}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient7}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                    </ul>
                    <p className="ingredient-title">Cooking instructions:</p>
                    <p>{dessert.strInstructions}</p>
                    <p>Check out the recipe video 
                        <a
                        className="video-link"
                        href= {dessert.strYoutube}
                        rel= "noreferrer"
                        target ="_blank"
                    > here </a>
                    </p>
                </div> 
                <div className="modal-footer">
                    <button className="button"
                    onClick = {props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal 