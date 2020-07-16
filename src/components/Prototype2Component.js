import React from "react"
import { Link } from "gatsby"

const Prototype2Component = function (props) {

    return (
        <div class="container">
                    <h3 id={props.id} class="title is-4 block-title-bw ">
                        {props.titulo}
                    </h3>
                    <div class="columns">
                        <div class="column">
                            {props.info}
                            </div>
                    </div>
                </div>
    )
}


export default Prototype2Component