import { useState } from "react";
import './Formulario.css'
import Registro from "../Registro/Registro";
import Alert from "../Alert/Alert";
import Swal from "sweetalert2";



const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [error, setError] = useState(false)

    const validarIngreso = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contraseña === '' || confirmacion === '' ) {
            setError(true);
        
            return
            
        } 
        else if (contraseña !== confirmacion){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden!',
              })

              return
        } 
     
            setError(false)
            setNombre("");
            setEmail("");
            setContraseña("");
            setConfirmacion("");
            Swal.fire({
                title: "Registro exitoso",
                text: "Has click para completar tu registro",
                icon: "success"
              });
            
    }
  
    return (
        
        <div className="container text-center bg-white p-4 mt-3">
            <Registro/>
            <form onSubmit={validarIngreso}>

                <div className="form-group">
                    <label >Nombre</label>
                    <input placeholder="Nombre" className=" form-control" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input placeholder="tuemail@ejemplo.com" type="email" className=" form-control " onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="form-group ">
                    <label >Contraseña</label>
                    <input placeholder="Contraseña" type="pass" className=" form-control " onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                </div>

                <div className="form-group">
                    <label >Confirmar Contraseña</label>
                    <input placeholder="Confirmar Contraseña" type="pass" className=" form-control" onChange={(e) => setConfirmacion(e.target.value)} value={confirmacion}/>
                </div>

                <button className="btn btn-dark  px-3 mt-2" type="submit">Registrarse</button>

                {error ? <Alert/> : null}
                
            </form>
        </div>
    )
}

export default Formulario
