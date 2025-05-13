import React from 'react';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import timeline from '../data/timeline';

const Index = () => (
  <Main>
    <Helmet title="TimeLine" />
    <article className="post" id="index">
      <div className="timeline-centered">
        {timeline.map(line => (
          <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
              <div className="timeline-icon color-3">
                <i className="icon-pen2" />
              </div>
              <div className="timeline-label">
                <h2>{line.label}<br /><span>{line.span}</span></h2>
                <p>{line.para}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </article>
  </Main>
);

export default Index;
