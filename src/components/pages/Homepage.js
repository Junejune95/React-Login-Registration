import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../App.css'
import Counter from './counter'



export default function HomePage() {
    return (
        <div className="col-md-8 mx-auto">
            <h1 className="main-title home-page-title">welcome to our app</h1>

            <Profile />
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}

export function Profile() {
    return (
        <GitData />
    )
}

function GitData() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(
            `https://api.github.com/users/Junejune95`
        ).then((response) =>
            response.json()
        ).then(setData)
            .then(setLoading)
            .catch(setError);
    }, []);
    if (loading) return <h1>Loading.......</h1>;
    if (error) return <pre>{JSON.stringify(error)}</pre>;
    if (data) return <GitUserView name={data.name} location={data.location} avator={data.avatar_url} bio={data.bio} />
}

function GitUserView({ name, location, avator, bio }) {
    return (
        <div className='card mt-4'>
            <img src={avator} height={250} className='card-img-top' />
            <div className='card-body'>
                <h1 className='card-title'>{name}</h1>
                <small>location</small>
                <p className='card-text'>{bio}</p>
            </div>

            <div className='card-footer'>
            <Counter />
            </div>

        </div>
    );

}


  
