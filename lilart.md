---
layout: default
title: Creations
---

<style>
.card-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-top: 2rem;
}

.card {
  width: 240px;
  height: 160px;
  background-color: #f0f0f0;
  border-radius: 12px;
  text-align: center;
  padding: 2rem;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
  background-color: #e6f7ff;
}
</style>

<div class="card-container">
  <a href="/poems" class="card">
    📜 <br><strong>Poems</strong>
  </a>
  <a href="/paintings" class="card">
    🎨 <br><strong>Paintings</strong>
  </a>
</div>
