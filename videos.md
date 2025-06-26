---
layout: default
title: Videos
---

<style>
.video-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.video-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 320px;
  max-width: 100%;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.video-embed {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
}
</style>

<div class="video-gallery">
  <div class="video-card">
    <iframe class="video-embed" src="https://www.youtube.com/embed/Gnu5Ev1nrqw" allowfullscreen></iframe>
  </div>
  <div class="video-card">
    <iframe class="video-embed" src="https://www.youtube.com/embed/q34SnvVruPE" allowfullscreen></iframe>
  </div>
  <div class="video-card">
    <iframe class="video-embed" src="https://www.youtube.com/embed/x4NQSu3HlOE" allowfullscreen></iframe>
  </div>
  <div class="video-card">
    <iframe class="video-embed" src="https://www.youtube.com/embed/qKRPrLeyr0I" allowfullscreen></iframe>
  </div>
</div>
