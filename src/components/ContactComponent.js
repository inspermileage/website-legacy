import React from 'react';
import { Link } from 'gatsby';

const ContactComponent = function (props) {
  const tipo_classe = props.class;

  if (tipo_classe)
    return (
      <div class="column">
        <a
          class="button is-primary is-outlined is-fullwidth"
          href={props.link}
          target="_blank">
          <span class="icon">
            <props.icon size="fa-2x" />
          </span>
          <span>{props.name}</span>
        </a>
      </div>
    );
  else {
    return (
      <div class="column">
        <a
          class="button is-black is-inverted is-outlined is-hovered is-active is-fullwidth"
          href={props.link}
          target="_blank">
          <span class="icon">
            <props.icon size="fa-2x" />
          </span>
          <span>{props.name}</span>
        </a>
      </div>
    );
  }
};

export default ContactComponent;
