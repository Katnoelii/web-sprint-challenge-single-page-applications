import React, {useState} from "react";
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import Home from './components/Home'
import formSchema from './Validation/Schema'

const initialFormValues = {
  name:"",
  size:"",
  toppings: {
    pepperoni:false,
    onions:false,
    chicken:false,
    peppers:false,
    pineapple:false,
    extraCheese:false
  },
  instructions:"",
}

const initialFormErrors = {
  name:"",
}

const initialOrders = []

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const postNewOrder = (order) => {
    axios
    .post('https://reqres.in/api/users',order)
    .then((res) => {
      setOrders([...orders,res.data])
    })
    .catch((error) => {
      console.log('Oh No! It broke:',error)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const onInputChange = (evt) => {
    const { name, value} = evt.target

    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]:"",
      })
    })
    .catch((error) => {
      setFormErrors({
        ...formErrors,
        [name]:error.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const onCheckboxChange = (evt) => {
    const {name,checked} = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      }
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newOrder = {
      name:formValues.name,
      size:formValues.size,
      toppings:Object.keys(formValues.toppings).filter((toppingChoice) => formValues.toppings[toppingChoice] === true),
      instructions:formValues.instructions
    }
    postNewOrder(newOrder)
  }

  return (
    <div className="App">
      <nav>
        <h1 className="title">Lambda Eats</h1>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/pizza">
            Build your own 'za
          </Link>
        </div>
      </nav>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/pizza">
        <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}/>
      <pre>{JSON.stringify(orders)}</pre>
      </Route>
    </div>
  );
};
export default App;
