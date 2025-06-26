---
layout: default
title: Blogposts
---

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.blog-card {
  background-color: #fffaf2;
  border: 1px solid #f0e1d2;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: relative;
}

.blog-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #4b3e2d;
}

.blog-card .blog-snippet {
  font-size: 0.95rem;
  white-space: pre-wrap;
  max-height: 5.6em;
  overflow: hidden;
  position: relative;
}

.read-more {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  cursor: pointer;
}

.read-more:hover {
  background-color: #005e99;
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.modal-content h3 {
  margin-top: 0;
  color: #4b3e2d;
}

.close {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>

<div class="blog-grid">
  {% for blog in site.data.blogs %}
  <div class="blog-card">
    <h3>{{ blog.title }}</h3>
    <div class="blog-snippet">{{ blog.lines | newline_to_br }}</div>
    <button class="read-more" onclick="openModal('modal-{{ forloop.index }}')">See More</button>
  </div>
  {% endfor %}
</div>

<!-- Modals -->
{% for blog in site.data.blogs %}
<div id="modal-{{ forloop.index }}" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal('modal-{{ forloop.index }}')">&times;</span>
    <h3>{{ blog.title }}</h3>
    <p>{{ blog.lines | newline_to_br }}</p>
  </div>
</div>
{% endfor %}

<script>
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}
</script>
