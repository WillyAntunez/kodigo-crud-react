import React from 'react'
import { Link } from 'react-router-dom'

export const Tabla = ({ newUrl, campos, data }) => {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {campos.map((value, index) => {
                        return <th key={index}>{value}</th>
                    })}
                    <td><Link to={newUrl} className="btn btn-success">Nuevo</Link></td>
                </tr>
            </thead>

            <tbody>
                {data.map((value, index) => {
                    return <tr key={index}>
                        {Object.values(value).map((value2, index2) => {
                            return <td key={index2}>{value2}</td>
                        })}
                        <td>
                            <Link className="btn btn-primary">Editar</Link>
                            &nbsp;
                            <Link className="btn btn-danger">Eliminar</Link>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
