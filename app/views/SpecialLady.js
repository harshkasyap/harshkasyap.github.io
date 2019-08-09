import React from 'react';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <Helmet title="The Special Lady" />
    <article className="post" id="index">
      <iframe align="center" src="https://thespeciallady.blogspot.com/" height="2000" width="100%" marginwidth="0" marginheight="0" rameborder="0" scrolling='yes' allowtransparency='true' />
    </article>
  </Main>
);

export default Index;
