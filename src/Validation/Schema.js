import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup.string()   
        .min(2, "Name must be at least 2 characters long.")
        .required("Name is Required"),
    size: Yup.string()   
        .required("Size is Required"),
    instructions: Yup.string()   
        ,
        
  });
  
  export default formSchema;
  