import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Admin.scss'
import { Link } from 'react-router-dom';

export const Admin = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/users/")
            .then(res => setData(res.data))
    }, [])


    const deleteBtn = (id) => {

        axios.delete(`http://localhost:8000/users/${id}`)
    }

    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>
                            Photo
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Content
                        </th>
                        <th>
                            Delete
                        </th>
                        <th>
                            Details
                        </th>
                        <th>
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.photo} />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.content}
                                    </td>
                                    <td>
                                        <button onClick={() => deleteBtn(item.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button><Link to={`/details/${item.id}`}>Details</Link></button>
                                    </td>
                                    <td>
                                        <button><Link to={`/edit/${item.id}`}>Edit</Link></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
