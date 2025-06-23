---
layout: page
title: Timeline
---

<!-- Load timeline CSS inline -->
<style>
  .timeline {
    position: relative;
    max-width: 900px;
    margin: auto;
    padding: 1rem 0;
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #007acc;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-entry {
    position: relative;
    width: 42%;
    padding: 1rem;
  }

  .timeline-entry.left {
    left: 0;
    margin-left: 4%;
    text-align: right;
  }

  .timeline-entry.right {
    left: 50%;
    text-align: left;
  }

  .timeline-entry::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 4px solid #007acc;
    top: 1rem;
    border-radius: 50%;
    z-index: 1;
  }

  .timeline-entry.left::after {
    right: -10px;
  }

  .timeline-entry.right::after {
    left: -10px;
  }

  .content {
    background-color: white;
    padding: 1rem;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .date {
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .timeline::after {
      left: 20px;
    }

    .timeline-entry {
      width: 100%;
      padding-left: 60px;
      padding-right: 25px;
      margin-left: 0;
      text-align: left;
    }

    .timeline-entry.left,
    .timeline-entry.right {
      left: 0;
    }

    .timeline-entry::after {
      left: 18px;
    }
  }
</style>


<div class="timeline">

  <div class="timeline-entry left">
    <div class="content">
      <div class="date">2010 – 2011</div>
      <h3>High School - Kendriya Vidyalaya Kankarbagh, Patna</h3>
      <p>Completed secondary education with a foundation in mathematics and science.</p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <div class="date">2012 – 2016</div>
      <h3>Bachelors - VIIT Pune, Pune University</h3>
      <p>Undergraduate studies where I developed core computer science skills.</p>
    </div>
  </div>

  <div class="timeline-entry left">
    <div class="content">
      <div class="date">2016 – 2019</div>
      <h3>Software Engineer - Diebold Nixdorf Mumbai</h3>
      <p>Worked on ATM Cardless, Contactless Transaction, DevOps.</p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <div class="date">2019 – 2023</div>
      <h3>Ph.D - IIT Patna</h3>
      <p>Doctoral research in privacy-preserving federated learning.</p>
    </div>
  </div>

  <div class="timeline-entry left">
    <div class="content">
      <div class="date">Nov-Dec 2023</div>
      <h3>Visiting Ph.D - The University of Warwick, UK</h3>
      <p>Visiting Student to The Secure Cyber Systems Research Group (SCSRG).</p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <div class="date">2023 – 2025</div>
      <h3>Research Associate – The Alan Turing Institute London</h3>
      <p>Contributed to International research projects on digital identity, privacy, and trustworthy ML.</p>
    </div>
  </div>

  <div class="timeline-entry left">
    <div class="content">
      <div class="date">2024 – 2027</div>
      <h3>Honorary Research Fellow – The University of Warwick, UK</h3>
      <p>Visiting Academic to The Secure Cyber Systems Research Group (SCSRG).</p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <div class="date">July 2025</div>
      <h3>Assistant Professor, at IIT (BHU) Varanasi</h3>
      <p>In the Department of Computer Science and Engineering.</p>
    </div>
  </div>

</div>
