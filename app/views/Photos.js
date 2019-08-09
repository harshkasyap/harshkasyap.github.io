import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import photos from '../data/photos';

//@TODO Write a service for this
var length = photos.length -1;
for(let i = length; i > 0; i--){
  const j = Math.floor(Math.random() * photos.length)
  const temp = photos[i]
  photos[i] = photos[j]
  photos[j] = temp
}

const Projects = () => (
  <Main>
    <Helmet title="Photography" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Photography</Link></h2>
          <p>A selection of photos, clicked or collected!</p>
        </div>
      </header>
      {photos.map(photo => (
        <Cell
          data={photo}
          key={photo.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
