import React, {useState} from 'react'


const Users = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [lista, setLista] = useState([])
    const [error, setError] = useState('') 

    const AddUser = (e)=>{

        if(!nombre.trim()){
            setError('Introduce nombre')
            console.log(error)
            return
        }

        if(!nombre.trim()){
            setError('Introduce edad')
            console.log(error)
            return
        }

        e.preventDefault()
        const User = {
            nombre,
            edad
        }

        setLista([...lista, User])
        setNombre('')
        setEdad('')

    }

    return (
      <div className='row '>
        <div className="col-5 text-center">
            <h2>Listado de usuarios</h2>
            <hr />
            <ul className='list-group'>
              {
                lista.map((i)=>(
                    <li 
                    className='list-group-item '>
                    <b>Nombre:</b> {i.nombre} <b>Edad:</b> {i.edad}
                    <button className='btn btn-outline-secondary float-end '>EDITAR</button>
                    
                    <button className='btn btn-outline-danger float-end me-2'>BORRAR</button>
    
                    </li>
                ))
              }
            </ul>
        </div>
        
        <div className="col-7 ">
            <h2>Formulario de usuarios</h2>
            <hr />
            <form>

                <input 
                onChange={(e)=>{setNombre(e.target.value)}} 
                className='form-control mb-2' type="text" 
                placeholder='Introduce el nombre' value={nombre}/>


                <input 
                onChange={(e)=>{setEdad(e.target.value)}} 
                className='form-control mb-3' type="text" 
                placeholder='Introduce edad' 
                value={edad}/>


                <button 
                onClick={(e)=>{AddUser(e)}}
                className='btn btn-outline-info w-100' type='submit'>
                    AGREGAR
                </button>
            </form>
            
            
        </div>


      </div>

    )
}

export default Users
