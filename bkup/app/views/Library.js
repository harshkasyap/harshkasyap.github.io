
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';
import markdown from '../data/library.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Library = () => (
  <Main>
    <Helmet title="Library" />
    <article className="post" id="library">
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Library;