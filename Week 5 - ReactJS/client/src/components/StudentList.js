import { useEffect, useState } from 'react'

const StudentList = () => {
    const endPoint = 'http://localhost:4000/students'
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [display, setDisplay] = useState(false)

    const getData = () => {
        fetch(endPoint, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(req => setData(req))
            .catch((error) => {console.error('Error: ', error)}) 
    }

    const postData = () => {
        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id: id, name: name})
        })
            .then(req => getData())
            .catch((error) => {console.error('Error: ', error)}) 
    }

    const updateData = () => {
        fetch(endPoint + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id: id, name: name})
        })
            .then(req => getData())
            .catch((error) => {console.error('Error: ', error)})
    }

    const deleteData = (id) => {
        fetch(endPoint + "/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
            .then(req => getData())
            .catch((error) => {console.error('Error: ', error)}) 
    }    

    const clearData = () => {
        setId('')
        setName('')
    }

    const displayData = () => {
        !display ? (
            setDisplay(true)
        ) : (
            setDisplay(false)
        )
    }

    useEffect(() => {
        getData()
    }, [])

    return ( 
        <>
            <h1>Form Add New Student</h1>
            <div>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                <br />
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <button onClick={() => postData()}>Add</button> <button onClick={() => clearData()}>Clear</button> <button onClick={() => updateData()}>Update</button>
            </div>

            <h1>List of Students</h1>
            <div>
                <button onClick={displayData}>Display</button>
                
            { display ? 
                data.map((d, index) => {
                    return (
                        <li key={index}>{d.id}: {d.name} <button onClick={() => {setId(d.id); setName(d.name)}}>Edit</button> <button onClick={() => deleteData(d.id)}>Delete</button>
                        </li>    
                    )
                }) : (
                    <div/>
                )
            }

                
            </div>
        </>
    )
}
 
export default StudentList