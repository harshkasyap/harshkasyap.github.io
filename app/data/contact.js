import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFilePdf from '@fortawesome/fontawesome-free-regular/faFilePdf';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faAngellist from '@fortawesome/fontawesome-free-brands/faAngellist';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

import strings from '../static/language/strings'

const data = [
  {
    link: strings.resumeOverleaf,
    label: 'Overleaf',
    icon: faFilePdf,
  },
  {
    link: strings.githubId,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: strings.instagramId,
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: strings.facebookId,
    label: 'Facebook',
    icon: faFacebook,
  },
  {
    link: strings.linkedinId,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: strings.twitterId,
    label: 'Twitter',
    icon: faTwitter,
  }/* ,
  {
    link: 'mailto:' + strings.email,
    label: 'Email',
    icon: faEnvelope,
  }, */
];

export default data;
