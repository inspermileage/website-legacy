import React from "react"
import { Link } from "gatsby"

const PageOptions= function(props) {

    return (

        <div class="tile is-child">
            <Link to={props.link}>
                <article class= {props.cssName}>
                    <h1 class="title is-2 block-title-wb">
                        {props.name}
                    </h1>
                </article>
            </Link>
        </div>
    )
}
export default PageOptions