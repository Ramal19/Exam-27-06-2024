import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Favorites.scss'

export const Favorites = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/favorites").then(res => res.json()).then(data => setData(data))
    }, [])

    const deleteBtnFav = (id) => {

        axios.delete(`http://localhost:8000/favorites/${id}`)
    }

    return (

        <div className="data__top">
            <div className="data_container">
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='data'>
                                <img src={item.photo} />
                                <h1>{item.name}</h1>
                                <p>{item.content}</p>
                                <button style={{fontSize: '16px', color: '#fff',width: '100px', height: '50px', border: 'none', borderRadius: '15px', backgroundColor: '#1a1a1a'}} onClick={() => deleteBtnFav(item.id)}>Delete</button>
                            </div>
                        )
                    })
                }
                {!data.length &&
                    <div style={{ gap: '20px', width: '100%', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Heç bir data əlavə olunmayıb !</h1>
                        <Link to={'/'}><button style={{ width: '100px', height: '50px', fontSize: '16px', padding: '10px 20px' }}>Home</button></Link>
                    </div>
                }
            </div>
        </div>
    )
}
