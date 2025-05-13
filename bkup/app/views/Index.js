import React from 'react';

//import { Link } from 'react-router-dom';
import Personal from '../components/Stats/Personal'

import Main from '../layouts/Main';

import strings from '../static/language/strings'

const Index = () => (
<Main>
  <article className="post" id="index">
    <Personal />
    <h2>About Me</h2>
    <p>{strings.aboutMe}</p>
    
    <div align="left">
      <iframe align="center" src="//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=3445174731&c=random&l=en&cbg=FFFFFF&cb=1&cbc=000000&cf=calibri&cfg=000000&qfs=bi&qta=center&tfg=000000&tfs=bi&afc=000000&afs=i" width="188" height="210" marginwidth="0" marginheight="0" rameborder="0" scrolling='no' allowtransparency='true' />
    </div>
  </article>
</Main>
);

export default Index;
