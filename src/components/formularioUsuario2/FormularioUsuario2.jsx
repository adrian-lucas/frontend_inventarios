import {  Formik } from "formik";
function FormularioUsuario2(){
    return (
        <div className="w3-margin w3-border" style={{maxWidth:'400px'}}>
            <Formik
                initialValues={{firstName:'',lastName:'',email:'',userName:'',gender:''}}
                validate={values =>{
                    let errors = {};
                    if(!values.firstName) errors.firstName = "Requerido";
                    if(!values.lastName) errors.lastName = "Requerido";
                    if(!values.email) errors.email = "Requerido";
                    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Email Invalido"
                    if(!values.userName) errors.userName = "Requerido";
                    if(!values.gender) errors.gender = "Requerido"
                    return errors;
                }}
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
                                className="w3-right"
                                type = "text" 
                                name = 'firstName'
                                onChange = {handleChange}
                                onBlur = {handleBlour}
                                value = {values.firstName}
                             />
                        </label><br /><br />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <label>
                            LastName:
                            <input 
                                className="w3-right"
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
                                className="w3-right"
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
                                className="w3-right"
                                type="text"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlour}
                                value= {values.userName}  
                            />
                        </label><br /><br />
                        {errors.userName && touched.userName && errors.userName}
                        <label>
                            Gender:
                            <span className="w3-middle w3-text-red">{errors.gender && touched.gender && errors.gender}</span>
                            <select 
                                className="w3-right"
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