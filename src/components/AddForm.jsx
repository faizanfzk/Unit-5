import { useState } from "react"
import {nanoid} from"nanoid"

const Addform=()=>{
    const [form,setForm]=useState({
        id:nanoid(),
        name:"",
        Address:"",
        Department:"",
        salary:"",
        age:"",
        marital_status:"",
    })

    const handleChange=(e)=>{
        setForm({
            ...form,[name]:value
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/students",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(form)
        })
    }

    function refresh()
{
    window.location.reload(false)
}


return (
    <div>
     <form className="add" onSubmit={handlesubmit}>
         <div>
             name:{" "}
             <input onChange={handleChange} type="text" className="first_name" id="name"/>
         </div>
         <div>
             Address:{" "}
             <input onChange={handleChange} type="text" className="Address" name="Address" id="Address"/>

         </div>
         <div>
         department:{" "}
             <input onChange={handleChange} type="text" className="department" name="department" id="department"/>
         </div>
         <div>
             Married:{" "}
             <input onChange={handleChange} name="marital_status" type="checkbox" className="male" value={"male"} id="marital_status"/>
         </div>
         <div>
            UnMarried:{" "}
             <input onChange={handleChange} name="marital_status" type="checkbox" className="female" value={"female"} id="marital_status"/>
         </div>
         <div>
             Salary:{" "}
             <input type="number" onChange={handleChange} className="salary" name="salary" id="salary"/>

         </div>
         <div>
             age:{" "}
             <input type="number" onChange={handleChange} className="age" name="age" id="age" min="0" max="100"/>

         </div>

         <input className="submit" type="submit" value="submit" />
         </form>   

    </div>
)

}
export {Addform}