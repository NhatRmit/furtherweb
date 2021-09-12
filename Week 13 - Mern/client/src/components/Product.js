import {useState, useEffect} from 'react'

const ProductList = () => {
    const endPoint = 'http://localhost:5000'
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [id, setId] = useState('')
    const [keyword, setKeyword] = useState('')

    //GET
    const getData = () => {
        fetch(endPoint)
            .then(res => res.json())
            .then(req => setData(req))
            .catch(error => console.error(error))
    }

    //POST & UPDATE
    const saveData = () => {
        id === '' ? (
            fetch(endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, price: price})
            })
                .then(data => getData())
                .catch(error => console.error(error))
        ) : (
            fetch(endPoint, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: id, name: name, price: price})
            })
                .then(data => getData())
                .catch(error => console.error(error))
        )
    }

    const deleteData = (id) => {
        fetch(endPoint + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => getData())
        .catch(error => console.error(error))
    }

    const editData = (id, name, price) => {
        setId(id)
        setName(name)
        setPrice(price)
    }

    const addData = () => {
        setId('')
        setName('')
        setPrice(0)
    }

    const searchData = () => {
        const pageSize = document.querySelector('#pageSize').value
        const pageNo = document.querySelector('#pageNo').value
        fetch(endPoint + "/search?keyword="+keyword+"&pageSize="+pageSize+"&pageNo="+pageNo)
        fetch(endPoint + "/search?keyword="+keyword+"&pageSize="+pageSize+"&pageNo="+pageNo)
            .then(res => res.json())
            .then(data => {populatePageNo(data.Size); setData(data.Items)})
    }

    function populatePageNo(size){
        const pageSize = document.querySelector("#pageSize").value
        const noPage = size/pageSize
        const pageNoSelect = document.querySelector("#pageNo")
        
        while (pageNoSelect.options.length > 0) {                
          pageNoSelect.remove(0);
        }     
    
        for (var i = 1; i<=noPage; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          pageNoSelect.appendChild(opt);
        }
    }

    useEffect(() => {
        searchData()
    }, [])
    
    return (  
        <div>
            <h2>Product Form</h2>
            <input type="hidden" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />

            <div className="form-group">
                <label>Name: </label> <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Price: </label> <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <button className="btn btn-primary" type="submit" onClick={() => saveData()}>Submit</button>
            
            <button className="btn btn-primary" type="submit" onClick={() => addData()}>Add New</button>

            <h2>Product Table</h2>

            <div className="row">
            <div className="col-md-8">
              <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
              <button onClick={()=>searchData()}>Search</button>
            </div>
            <div className="col-md-4">
              Page Number: 
              <select id="pageNo" onChange={()=>searchData()}>
                <option value="1">1</option>
              </select>
              Page Size 
                <select id="pageSize" onChange={()=>searchData()}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                </select>
            </div>         
          </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(a => (
                            <tr key={a._id}>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td><button className="btn btn-warning" onClick={() => deleteData(a._id)}>Delete</button></td>
                                <td><button className="btn btn-warning"  onClick={() => editData(a._id, a.name, a.price)}>Edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            
        </div>
    );
}
 
export default ProductList;