import {  Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function FormularioUsuario2(){
    const initialColors={firstName:'',lastName:'',email:'',userName:'',gender:''};
    const [warnningColor, setWarnningColor] = useState(initialColors);
    const validation = Yup.object().shape({
        firstName: Yup.string()
        .min(2,'Too long')
        .max(50, 'Too Short')
        .required('Requred'),

        lastName: Yup.string()
        .min(2,'Too long')
        .max(50, 'Too Short')
        .required('Requred'),

        email: Yup.string()
        .email('Invalid email')
        .required('Required'),

        userName: Yup.string()
        .min(2,'Too long')
        .max(50, 'Too Short')
        .required('Requred'),

        gender: Yup.string()
        .required()
    }); 
    return (
        <div className="w3-margin w3-border" style={{maxWidth:'400px'}}>
            <Formik
                initialValues={{firstName:'',lastName:'',email:'',userName:'',gender:''}}
                validationSchema={validation}
                onSubmit = {(values,{ setSubmitting }) => {
                    setTimeout(()=>{
                        alert(JSON.stringify(values, null,2));
                        setSubmitting(false);    
                    },1000);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlour,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} className="w3-margin">
                        <label>
                            First Name:
                            <input 
                                className={`w3-right`}
                                type = "text" 
                                name = 'firstName'
                                onChange = {handleChange}
                                onBlur = {handleBlour}
                                value = {values.firstName}
                             />
                            {errors.userName && touched.userName && errors.userName}
                        </label><br /><br />
                       
                        <label>
                            LastName:
                            <input 
                                className={`w3-right ${warnningColor.lastName}`}
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlour}
                                value= {values.lastName} 
                            />
                        </label><br /> <br />
                        {errors.lastName && touched.lastName && errors.lastName}
                        <label>
                            Email:
                            <input 
                                className={`w3-right ${warnningColor.email}`}
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlour}
                                value= {values.email}  
                            />
                        </label><br /><br />
                        {errors.email && touched.email && errors.email}
                        <label>
                            UserName:
                            <input
                                className={`w3-right ${warnningColor.userName}`}
                                type="text"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlour}
                                value= {values.userName}  
                            />
                        </label><br /><br />
                        <span className="w3-middle w3-text-red">{errors.userName && touched.userName && errors.userName}</span>
                        <label>
                            Gender:
                            <span className="w3-middle w3-text-red">{errors.gender && touched.gender && errors.gender}</span>
                            <select 
                                className={`w3-right ${warnningColor.gender}`}
                                name="gender"
                                onChange={handleChange}     
                                onBlur={handleBlour}
                                value= {values.gender} 
                            >
                                <option value="" key="0">Pick your gender</option>
                                <option value="female" key='1'>Female</option>
                                <option value="male" key='2'>Male</option>
                                <option value="agender" key='3'>Agender</option>
                                <option value="fluid" key='4'>Fluid</option>
                                <option value="other" key='5'>Other</option>
                            </select>
                        </label><br /><br />
                        

                        <input type="submit" value="Enviar"/>
                        
                    </form>
                )}
                
            </Formik>
            
        </div>
    );
}
export default FormularioUsuario2;