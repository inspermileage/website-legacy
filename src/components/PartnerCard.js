import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const PartnerCard = function ({ partnerType, link, img, alt, description }) {
  const type = partnerType;

  if (type == 'platina') {
    return (
      <div class="column is-two-fifths-desktop is-two-fifths-tablet">
        <OutboundLink href={link} target="_blank">
          <div class="card">
            <div class="card-image">
              <figure class="image-platina">
                <img src={img} alt={alt} />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">{description}</div>
            </div>
          </div>
        </OutboundLink>
      </div>
    );
  } else if (type == 'apoio') {
    return (
      <div class="column is-one-fifth-desktop is-one-fifth-tablet is-two-fifths-mobile">
        <div class="card">
          <div class="card-image">
            <figure class="image-apoio">
              <img src={img} alt={alt} />
            </figure>
          </div>
        </div>
      </div>
    );
  }
};

export default PartnerCard;
