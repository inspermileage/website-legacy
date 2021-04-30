import React from 'react';

const PartnerHeader = function ({ type }) {
  return (
    <nav class="level">
      <div class="level-item project-tile-bg">
        <h1 class="title is-3 partner-cat">{type}</h1>
      </div>
    </nav>
  );
};

export default PartnerHeader;
