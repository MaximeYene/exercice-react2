import '../styles/VisitCard.css'
import React from 'react';

function VisitCard(props) {
    return (<div className="card-part">
        <div className='card-part-body'>
            <div className='card-part-border'>
                <p className='card-part-name'>{props.name}<br />
                    <span>{props.profession}</span></p>
                <p className='card-part-ent'>{props.nomEntreprise}</p>
                <hr />
                <div className='card-part-body-footer'>
                    <p>Phone : {props.phone}</p>
                    <p>Email : {props.mail}</p>
                    <p>address : {props.address}</p>
                    <p>Website : {props.website}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default VisitCard;