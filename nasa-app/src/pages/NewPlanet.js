import React from "react";
import { useForm } from "react-hook-form"
import '../planet.css';

function NewPlanet () {
    const { 
        register,
        formState: {
            errors,
        },
         handleSubmit, 
    } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return <>
    <h2>If you found new planet you can add it to our directory</h2>
    <form className="listForm" onSubmit={handleSubmit(onSubmit)}>

        <input placeholder="Planet Name" {...register("planetName", { 
            required: 'this field must be filled in', maxLength: {
                value: 10,
                message: 'Max 10 symbols'
                } 
            })} 
        />
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
            {errors?.planetName && <p>{errors?.planetName?.message}</p>}
        </div>

        <select  {...register("galaxyName", {
            required: {
                value: true,
                message:"this field must be filled in"
            }
            })} >
            <option value=''>Select an option</option>
            <option value="30">Milk Way</option>
            <option value="30">Messier 83</option>
            <option value="30">Black Eye Galaxy</option>
            <option value="30">Pinwheel</option>
            <option value="30">Canis Major Dwarf</option>
            <option value="30">Somewhere else...</option>
        </select>
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
            {errors?.galaxyName && <p>{errors?.galaxyName?.message}</p>}
        </div>

        <input placeholder="Diameter (km)" type="number" {...register("diameter", {
             required: 'this field must be filled in',
             min:{
               value: 10, 
                 message: 'Minimal length 10 '
             },
             max: {
                value: 10000000000000, 
                message: 'Maximal length 10000000000000'
             }
                })} />
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
        {errors?.diameter && <p>{errors?.diameter?.message || "Error!"}</p>}
        </div>

        <input placeholder="Distance (mln km)" type="number" {...register("distance", { 
             required: 'this field must be filled in',
             min: {
                value: 10,
                message: 'Minimal distance 10 '
                },
            max: {
                value: 10000000000000, 
                message: 'Maximal distance 10000000000000'
            }  
                })} />
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
        {errors?.distance && <p>{errors?.distance?.message || "Error!"}</p>}
        </div>

        <input placeholder="Yor Name" {...register("yourName", { 
            required: 'this field must be filled in', 
            maxLength: {
                value: 15,
                message: 'max 15 letters'
            }
            
            })} />
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
        {errors?.yourName && <p>{errors?.yourName?.message || "Error!"}</p>}
        </div>

        <input placeholder="Email" {...register("email", { 
            required: 'this field must be filled in' })} />
        <div style={{height:20, fontSize: 8, color: 'red', margin:3}}>
            {errors?.email && <p>{errors?.email?.message} </p>}
        </div>
        <input className="submit" type="submit" />
    </form>
    </>
}


export default NewPlanet;