import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/users").then(res => res.json()).then(data => setData(data))
    }, [])

    const addToFav = (id) => {

        axios.get("http://localhost:8000/users/" + id)
            .then(res => axios.post("http://localhost:8000/favorites/", res.data))
    }

    return (
        <>

            <section className='sectionOne'>

                <div className="text__top">
                    <div className="line"></div>
                    <h1>Popular Courses</h1>
                </div>

                <div className="data_container">
                    {
                        data.map(item => {
                            return (
                                <div key={item.id} className='data'>
                                    <img src={item.photo} />
                                    <h1>{item.name}</h1>
                                    <p>{item.content}</p>
                                    <button style={{fontSize: '16px', color: '#fff',width: '100px', height: '50px', border: 'none', borderRadius: '15px', backgroundColor: '#1a1a1a'}} onClick={() => addToFav(item.id)}>Fav</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="sectionTwo">
                <div className="text__left">
                    <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                    <button>REGISTER NOW</button>
                </div>
                <div className="text__right">
                    <h1>Search for your course</h1>
                    <form>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Category' />
                        <input type="text" placeholder='Degree' />
                        <input type="submit" value="SEARCH COURSE" />
                    </form>
                </div>
            </section>

            <section className="sectionThree">
                <div className="text__top">
                    <div className="line"></div>
                    <h1>Our Services</h1>
                </div>

                <div className="wrap">
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/exam.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/books.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/professor.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/blackboard.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='img'>
                        <img src="https://preview.colorlib.com/theme/course/images/mortarboard.svg" />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                </div>
            </section>

            <section className="sectionFour">
                <div className="background">
                    <div className="top">
                        <div className="line"></div>
                        <h1>What our students say</h1>
                    </div>
                    <div className="text">
                        <span>"</span>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg" />
                        <h1></h1>
                        <p></p>
                    </div>
                </div>
            </section>

            <section className="sectionFive">
                <div className="top">
                    <div className="line"></div>
                    <h1>Upcoming Events</h1>
                </div>
                <div className="container">
                    <div>
                        <div className="date">
                            <h1>07</h1>
                            <span>January</span>
                        </div>
                        <div className="text">
                            <h1>Student Festival</h1>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                        </div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" />
                    </div>
                    <div>
                        <div className="date">
                            <h1>07</h1>
                            <span>January</span>
                        </div>
                        <div className="text">
                            <h1>Student Festival</h1>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                        </div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" />
                    </div>
                    <div>
                        <div className="date">
                            <h1>07</h1>
                            <span>January</span>
                        </div>
                        <div className="text">
                            <h1>Student Festival</h1>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                        </div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" />
                    </div>
                </div>
            </section>
        </>
    )
}
