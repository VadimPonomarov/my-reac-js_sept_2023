import React from 'react';

const CardCharacter = ({props}) => {
    const {id, name, status, species, gender, image} = props
    return (
        <div class="card" style={{width: "540px"}}>
            <div class="row g-0">
                <div class="col-md-4 cirkle">
                    <img src={image} class="img-fluid rounded-start" alt={name}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}
                            <span className="badge bg-secondary m-1">{id}</span>
                        </h5>
                        <p class="card-text">{species}</p>
                        <p class="card-text">{gender}</p>
                        <p class="card-text"><small class="text-muted">{status}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {CardCharacter}
