import React from "react"

const PartnerApoio = function(props){
    return ( 
        <div class="column is-one-fifth-desktop is-one-fifth-tablet is-two-fifths-mobile">
            <div class="card">
                <div class="card-image">
                    <figure class="image-apoio">
                        <img src={props.img} alt={props.alt} />
                    </figure>
                </div>
            </div>
        </div>

    )
}

export default PartnerApoio