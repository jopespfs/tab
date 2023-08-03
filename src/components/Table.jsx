import React from 'react'

export const Table = (props) => {
    console.log('colunas_tables', props.colunas)
  return (
    <div>
        <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            {props.colunas.map((coluna, index) => <th key={index} scope="col">{coluna}</th>
                
            )}
            {/* usando o map não precisamos digitar linha por linha
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">UserName</th>
            <th scope="col">Website</th>
            <th scope="col">Adress</th> */}
          </tr>
        </thead>
        <tbody>
            {props.data.map(user => 
                <tr>
                    <th scope='row'>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.website}</td>
                    <td>{`${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`}</td>

                </tr>

)}
        </tbody>
        
      </table>
    </div>
  )
}
