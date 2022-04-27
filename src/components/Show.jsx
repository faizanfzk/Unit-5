import React, { useState } from "react"

import { useEffect } from "react"

const Show = () => {
    const [result, setResult] = useState([])

    useEffect(() => {

        call()

    }, [])
    const call = async () => {
        let data = await fetch("http://localhost:8080/students");
        let res = await data.json();

        setResult(res)
    }

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Marital_Status</th>
                    </tr>
                </thead>

                <tbody className="tbody">

                    {result.map((d)=>(
                        <tr className="row">
                            <td className="first_name">{d.name}</td>
                            <td className="address">{d.Address}</td>
                            <td className="department">{d.department}</td>
                       <td className="salary">{d.salary}</td>
                       <td className="age">{d.age}</td>
                       <td className="mari">{d.marital_status}</td>
                       
                        </tr>

                    ))}

                </tbody>

            </table>
        </div>
    )
}

export{Show}