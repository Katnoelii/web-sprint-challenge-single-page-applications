import React from 'react'

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors
    } = props

    return (
        <div className="formContainer">
            <form className="pizzaForm" onSubmit={onSubmit}>
                <h2>Build Your own Lambd'za</h2>
                <h4>Name:</h4>
                <label htmlFor="name">
                <input
                name="name"
                type="text"
                value={values.name}
                onChange={onInputChange}
                />
                </label>
                <h4>What size?</h4>
                <label htmlFor="size">
                <select onChange={onInputChange} value={values.size} name="size">
                    <option value="">--Select Pizza Size--</option>
                    <option value="pp">Personal Pan (4 inch)</option>
                    <option value="small">Small (8-inch)</option>
                    <option value="med">Medium (12-inch)</option>
                    <option value="large">Large (16 inch)</option>
                </select>
                </label>
                <h4>Choose your toppings (no extra cost!)</h4>
                <label htmlFor="toppings">
                    Pepperoni
                    <input
                    name="pepperoni"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.pepperoni}
                    />
                </label>
                <label  htmlFor="toppings">
                    Onions
                    <input
                    name="onions"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.onions}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    Chicken
                    <input
                    name="chicken"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.chicken}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    peppers
                    <input
                    name="peppers"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.peppers}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    Pineapple
                    <input
                    name="pineapple"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.pineapple}
                    />
                 </label>
                 <label htmlFor="toppings">
                     Extra Cheese
                    <input
                    name="extraCheese"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.extraCheese}
                    />
                 </label>
                 <label htmlFor="instructions">
                     Special instructions?
                     <textarea
                     name="instructions" 
                     value={values.instructions} 
                     onChange={onInputChange} 
                     />
                 </label>
                 <div className="orderBtn">
                     <button>--Place Order--</button>
                 </div>
                 <div className="err">
                     <div>{errors.name}</div>
                 </div>
            </form>
        </div>
    )
}