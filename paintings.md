---
layout: default
title: Paintings
---

<style>
.painting-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
}

.painting-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 240px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.painting-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.painting-card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  background-color: #f9f9f9;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.painting-title {
  text-align: center;
  padding: 0.6rem 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
}
</style>

<div class="painting-gallery">
  {% assign painting_files = site.static_files | where_exp:"file", "file.path contains 'assets/data/paintings'" %}
  {% for file in painting_files %}
    <div class="painting-card">
      <img src="{{ file.path | relative_url }}" alt="Painting {{ forloop.index }}">
      <div class="painting-title">Painting {{ forloop.index }}</div>
    </div>
  {% endfor %}
</div>
