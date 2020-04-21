import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const PartnerPlatina= function(props){
    return (

        <div class="column is-two-fifths-desktop is-two-fifths-tablet">
                            <OutboundLink
                                href= {props.link}
                                target="_blank"
                            >
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image-platina">
                                            <img
                                                src={props.img}
                                                alt={props.alt}
                                            />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="content">
                                          {props.description}
                                        </div>
                                    </div>
                                </div>
                            </OutboundLink>
                        </div>
    )
}

export default PartnerPlatina