import React from "react"
import { Link } from "gatsby"

const PrototypeComponent = function (props) {

    return (
        <tr>
            <th>{props.titulo}</th>
            <td>{props.info}</td>
        </tr>
    )
}


export default PrototypeComponent

