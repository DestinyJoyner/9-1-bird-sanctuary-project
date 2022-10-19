import React from 'react';
import { useState } from 'react';

function Checkout({setNumofBirds,total,setDiscount, setTotal}) {
    //  Declare State for user Inputs
    const [userInput, setUserInput] = useState(
        {
            first: "",
            last: "",
            email: "",
            zip: ""

        }
    )
    
    // Function for handling UserInput -> onChange match name prop to key in userInput, so updates that key in object
    function handleUserInput(e) {
        const value = e.target.value
        setUserInput({...userInput, [e.target.name] : value})
    }

    // function for form reset (needs access to cart data/ states to reset values on submit as well)
    function resetCheckoutForm() {
        setUserInput(
            {
                first: "",
                last: "",
                email: "",
                zip: ""
    
            }
        )
    }
    // 
    // handleSubmit function for form
    function handleSubmit(e) {
        e.preventDefault()
        if(total === 0){
            alert(`No adoption today? Maybe next time. :) `)
        }
        else{
            alert(`You have adopted birds. Thank you!`)
        }
        
        resetCheckoutForm()
        setNumofBirds([])
        setTotal(0)
        setDiscount(false)
    }

    return (
        <div className='Checkout'>
            <h3>Checkout</h3>

            <form onSubmit={(event) => {handleSubmit(event)}}>

                <label htmlFor='firstName'>First Name</label>
                <input
                required
                type = "text"
                id = "firstName"
                value= {userInput.first}
                name= "first"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='lastName'>Last Name</label>
                <input
                required
                type = "text"
                id = "lastName"
                value= {userInput.last}
                name= "last"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='email'>Email</label>
                <input
                required
                type = "email"
                id = "email"
                value= {userInput.email}
                name= "email"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='zipcode'>Zip Code</label>
                <input
                required
                type = "number"
                id = "zipcode"
                value= {userInput.zip}
                name= "zip"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <input 
                type = 'submit'
                 />
                
            </form>
            
        </div>
    );
}

export default Checkout;