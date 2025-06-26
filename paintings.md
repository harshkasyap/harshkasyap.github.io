---
layout: default
title: Paintings
---

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.gallery img:hover {
  transform: scale(1.03);
}
</style>

<div class="gallery">
  <img src="/assets/paintings/painting1.jpg" alt="Painting 1">
  <img src="/assets/paintings/painting2.jpg" alt="Painting 2">
  <!-- Add more images -->
</div>
