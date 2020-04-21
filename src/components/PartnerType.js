import React from "react"



const PartnerType = function(props){
    return (

        <nav class="level">
            <div class="level-item project-tile-bg">
                <h1 class="title is-3 partner-cat">
                    {props.type}
                </h1>
            </div>
        </nav>

    )
}


export default PartnerType
