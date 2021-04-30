import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
const IndexComponent = function ({ cssName, name, link }) {
  const page = cssName;
  let pageOption;

  if (page === 'competition') {
    pageOption = (
      <article class="tile is-child notification is-primary competition-tile-bg">
        <h1 class="title is-2 block-title-wb">{name}</h1>
      </article>
    );
  } else if (page === 'team') {
    pageOption = (
      <article class="tile is-child notification is-primary team-tile-bg">
        <h1 class="title is-2 block-title-wb">{name}</h1>
      </article>
    );
  } else if (page === 'projeto') {
    pageOption = (
      <article class="tile is-child notification is-primary projeto-tile-bg">
        <h1 class="title is-2 block-title-wb">{name}</h1>
      </article>
    );
  } else if (page === 'partner') {
    pageOption = (
      <article class="tile is-child notification is-primary partner-tile-bg">
        <h1 class="title is-2 block-title-wb">{name}</h1>
      </article>
    );
  }

  return (
    <div class="tile is-child">
      <OutboundLink href={link}>{pageOption}</OutboundLink>
    </div>
  );
};
export default IndexComponent;
