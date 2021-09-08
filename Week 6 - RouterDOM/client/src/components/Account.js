import { useParams } from 'react-router-dom'
const Account = () => {
    let { id } = useParams()
    let { name } = useParams()
    let { type } = useParams()
    return (
      <div>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Type: {type}</h3>
      </div>
    )
}

export default Account