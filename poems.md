---
layout: default
title: Poems
---

<style>
.poem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.poem-card {
  background-color: #fffaf2;
  border: 1px solid #f0e1d2;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.poem-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #4b3e2d;
}

.poem-card p {
  font-size: 0.95rem;
  white-space: pre-wrap;
}
</style>

<div class="poem-grid">
  <div class="poem-card">
    <h3>Whispering Trees</h3>
    <p>
The trees don't speak like men do,  
But rustle their thoughts in winds through you...
    </p>
  </div>

  <div class="poem-card">
    <h3>Midnight Reflection</h3>
    <p>
A quiet night, a window moon,  
A heart that hums a fading tune...
    </p>
  </div>

  <!-- Add more poems similarly -->
</div>
