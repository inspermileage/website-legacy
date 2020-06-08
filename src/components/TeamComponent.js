import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"


const TeamComponent = function(props) {
    const{name, link, office, link_area, classe, image, style} = props

    return (
        <div class="column is-3 is-narrow">
            <OutboundLink
                href={link}
                target="_blank"
            >
                <img
                    class={classe}
                    src={image}
                    alt="Imagem do integrante"
                    style={style}
                />
                <p class="team-member">{name}</p>
            </OutboundLink>
            <Link
                class="team-area"
                to={link_area}
            >
                {office}
            </Link>
        </div>
    )
}
export default TeamComponent