import React from "react"
import { Link } from "gatsby"
const ContactComponent = function(props) {
    return (
        <div class="column">
            <a
                class={props.class}
                href={props.link}
                target="_blank"
            >
                <span class="icon">
                    <props.icon  size="fa-2x" />
                </span>
                <span>{props.name}</span>
            </a>
        </div>
    )
}
export default ContactComponent
