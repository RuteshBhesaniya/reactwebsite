import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const ServiceCard = (props) => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={props.service.img} class="card-img-top" alt={props.service.title} />
            <div class="card-body">
                <h3>{props.service.title}</h3>
                <p>{props.service.description}</p>
                <p>Price: ${props.service.price}</p>
                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
            </div>
        </div>
    )
}

export default ServiceCard
