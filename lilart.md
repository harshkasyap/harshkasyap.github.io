---
layout: default
title: Creations
---

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: auto;
}

.card {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 16px;
  text-align: center;
  padding: 2rem 1rem;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #ddd;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: #f0faff;
}

.card .icon {
  font-size: 2.8rem;
  margin-bottom: 0.6rem;
}

.card .title {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>

<div class="card-grid">
  <a href="/poems" class="card">
    <div class="icon">📜</div>
    <div class="title">Poems</div>
  </a>
  <a href="/paintings" class="card">
    <div class="icon">🎨</div>
    <div class="title">Paintings</div>
  </a>
  <a href="/blogposts" class="card">
    <div class="icon">✍️</div>
    <div class="title">Blogposts</div>
  </a>
  <a href="/videos" class="card">
    <div class="icon">🎥</div>
    <div class="title">Videos</div>
  </a>
</div>
