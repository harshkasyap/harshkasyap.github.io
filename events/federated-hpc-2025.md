---
layout: default
title: Federated HPC Workshop
---

<div style="
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  margin-top:1rem;
  margin-bottom:1rem;
">

  <h2 style="margin:0; padding:0;">
    Federated HPC: Towards Privacy-Preserving and Collaborative High Performance Scientific Computing
  </h2>

  <div style="display:flex; gap:1rem;">
      <img src="/assets/images/sci2025-logo.png" 
           alt="SCI 2025 Logo" 
           style="height:80px; width:auto;">

      <img src="/assets/images/iitbhu.jpg" 
           alt="IIT BHU Logo" 
           style="height:80px; width:auto;">
  </div>

</div>

**Organisers:** <a href="https://iitbhu.ac.in/dept/cse/people/hkasyapcse" target="#">Dr. Harsh Kasyap</a>, <a href="https://iitbhu.ac.in/dept/cse/people/ravicse" target="#">Prof. Ravi Shankar Singh</a>  
Department of Computer Science and Engineering,  
Indian Institute of Technology (BHU), Varanasi.

<p style="margin:0.4rem 0;">
  <strong>📍 Where:</strong>
  <a href="https://sci25.supercomputingindia.org/Conference#program-at-a-glance" target="#"
     style="color:#4338ca; font-weight:600;">
    Supercomputing India SCI2025 at Manipal Institute of Technology, Bengaluru
  </a>
</p>

<p style="margin:0.4rem 0;">
  <strong>🕒 When:</strong> December 12, 2025 (02:00 PM – 07:00 PM)
</p>

<p style="margin:0.6rem 0;">
  <strong>🔗 <a href="https://sci25.supercomputingindia.org/Conference#delegate-tariff" target="#">Register for the workshop as a delegate</a></strong>
</p>

<p style="margin:0.2rem 0 1rem 0;">
  <strong>📝 <a href="https://docs.google.com/forms/d/e/1FAIpQLSckN3YoDjXIoSQyeaGE2wnwM0w9F7D3-nTgi1-dIqhd-oGF8g/viewform?usp=publish-editor" target="#">
    Fill the Workshop Participation Form
  </a></strong>
</p>

---

## About the Workshop

Advances in scientific computing increasingly rely on AI-driven analysis of large-scale, distributed datasets generated across data centres, laboratories, and edge infrastructures. However, collaboration is often constrained by privacy regulations, institutional data policies, and the prohibitive cost of centralising data at scale. Federated Learning (FL) offers a paradigm shift by enabling multiple organisations to collaboratively train models without sharing raw data, while High Performance Computing (HPC) platforms provide the computational backbone for large-scale scientific workloads.

This workshop focuses on **scalable, communication-efficient, and privacy-preserving federated learning for scientific applications on HPC systems**. We will explore challenges in orchestrating FL on distributed clusters, handling heterogeneous data and compute environments, integrating privacy-preserving mechanisms (such as secure aggregation and differential privacy), and optimising communication overhead. Through expert talks, hands-on sessions, and group activities, the workshop aims to chart a roadmap for secure, collaborative, and trustworthy scientific computing at scale.

---

## Objectives

The workshop aims to:

- Discuss **scientific computing** and Recent Advancements in Parallel Algorithms.
- Explore **federated learning architectures** and examine **privacy-preserving techniques**.  
- Identify **open research challenges** in Federated HPC and foster future collaborations.

---

<h2 style="margin-top:1rem; color:#1e1b4b;">📅 Tentative Programme (Second Half: 02:00–07:00 PM)</h2>

<div style="border-left:4px solid #4338ca; padding-left:1rem; margin:1rem 0;">

  <p><strong>02:00 – 02:10</strong> — <span style="color:#1e1b4b;">Opening and Motivation</span></p>

  <p><strong>02:10 – 03:10</strong> — <span style="color:#1e1b4b;">Talk I: Importance of Tensors in Scientific Computing and Data Science</span><br>
  <em>Speaker: <a href="https://cds.iisc.ac.in/faculty/ratikanta/" target="#">Dr. Ratikanta Behera</a>, Department of CDS, IISc Bangalore</em></p>

  <p><strong>03:10 – 03:30</strong> — Discussion with Speaker and Open Questions</p>

  <p><strong>03:30 – 04:00</strong> — <span style="color:#1e1b4b;">Tea Break</span></p>

  <p><strong>04:00 – 04:45</strong> — <span style="color:#1e1b4b;">Talk II: Recent Advancements in Parallel Algorithms</span><br>
  <em>Speaker: <a href="https://iitbhu.ac.in/dept/cse/people/ravicse" target="#">Prof. Ravi Shankar Singh</a>, Department of CSE, IIT (BHU)</em></p>

  <p><strong>04:45 – 05:30</strong> — <span style="color:#1e1b4b;">Talk III: Privacy-Preserving (Collaborative) Machine Learning</span><br>
  <em>Speaker: <a href="https://iitbhu.ac.in/dept/cse/people/hkasyapcse" target="#">Dr. Harsh Kasyap</a>, Department of CSE, IIT (BHU)</em></p>

  <p><strong>05:30 – 06:00</strong> — <span style="color:#1e1b4b;">Group Activity: Identifying Open Challenges & Future Collaborations</span></p>

  <p><strong>06:00 – 06:55</strong> — <span style="color:#1e1b4b;">Federated HPC – Simulation and Privacy-Preserving Extensions</span><br>
  <em>Speaker: <a href="https://iitbhu.ac.in/dept/cse/people/hkasyapcse" target="#">Dr. Harsh Kasyap</a>, Department of CSE, IIT (BHU)</em></p>

  <p><strong>06:55 – 07:00</strong> — Concluding Remarks</p>

</div>

*(Exact timings and titles may be updated based on the final SCI 2025 schedule.)*

---

## Talk I: Importance of Tensors in Scientific Computing and Data Science

**Abstract:** In the era of BIG data, artificial intelligence, and machine learning, we need to process multiway (tensor-shaped) data. These data are mainly in the three or higher-order dimensions, whose orders of magnitude can reach billions. Vast volumes of multidimensional data pose a significant challenge for processing and analysis; the matrix representation of data analysis is insufficient to represent the complete information content of multiway data across various fields. This talk will discuss tensor factorization as a product of tensors. To address the factorizations, we discuss operations between tensors with the concept of transpose, inverse, and identity of a tensor. We will conclude with a few color image applications in a tensor-structured domain.

---

## Talk II: Recent Advancements in Parallel Algorithms.

**Abstract:** Recent advancements in parallel algorithms are driven by the need to handle very large datasets and massive computations more efficiently. Parallel algorithms focus on optimizing performance for heterogeneous and specialized hardware, such as multi-core CPUs and many-core GPUs, while addressing critical challenges like communication overhead, synchronization, and scalability. The Parallel Random Access Machine (PRAM) model remains a foundational theoretical tool for designing and analyzing parallel algorithms. Recent advancements have focused on using PRAM principles to develop more practical algorithms for modern hardware. Similarly, hypercube is also a powerful conceptual model  and recent advancements have focused on adapting its principles for real-world applications in areas like quantum computing, AI, and cloud networking.

---

## Talk III: Privacy-Preserving (Collaborative) Machine Learning

**Abstract:** Machine learning has been adopted across industries, including the applications directly operated by the end users (individuals). However, users or organisations are reluctant to share data for training. This has also been restricted due to various regulations across demographics, such as GDPR. It may also be due to reasons citing privacy and market competition. However, domains, such as healthcare, finance, etc., demand collaboration to mitigate common challenges, and improve the research. This requires to integrate the privacy enhancing technologies (PETs) with machine learning. PETs include approaches from both machine learning and cryptography. Federated learning (FL) is one of the promising solutions, claiming to provide a privacy-preserving (collaborative) machine learning framework. However, there have been many works, questioning, whether FL is truly privacy-preserving. Therefore, it is time to integrate multiple PETs, such as FL, differential privacy, homomorphic encryption (HE), and secure multi-party computation to achieve a privacy-preserving (collaborative) machine learning solution.

---

## 💻 Hands-On / Demonstration

This session will demonstrate how **federated learning can be run in an HPC-style environment**:

- Simulate multiple clients across nodes, each training on local data.  
- Use a central coordinating process to aggregate model updates.  
- Observe communication patterns, convergence behaviour, and the impact of heterogeneous data.  
- Discuss how **privacy-preserving mechanisms** (e.g., secure aggregation) can be integrated to protect sensitive updates.

The goal is to give participants a concrete feel for how FL maps onto HPC workflows and what practical challenges arise in Federated HPC.

---

## 🤝 Group Activities: Open Challenges & Future Collaborations

Participants will engage in two structured group activities:

- **Identifying Open Challenges:**  
  Small groups will discuss key unsolved problems in Federated HPC (e.g., communication bottlenecks, robustness, benchmarking, energy efficiency). Each group will briefly present their findings, creating a shared map of research challenges.

- **Future Research Plans and Collaborations:**  
  Groups will sketch possible collaborative projects and ideas, including applications in climate science, healthcare, and engineering. The aim is to connect researchers with complementary expertise and seed future working groups, proposals, and open-source efforts.

---

<p style="margin:0.6rem 0;">
  <strong>🔗 <a href="https://sci25.supercomputingindia.org/Conference#delegate-tariff" target="#">Register for the workshop as a delegate</a></strong>
</p>

<p style="margin:0.2rem 0 1rem 0;">
  <strong>📝 <a href="https://docs.google.com/forms/d/e/1FAIpQLSckN3YoDjXIoSQyeaGE2wnwM0w9F7D3-nTgi1-dIqhd-oGF8g/viewform?usp=publish-editor" target="#">
    Fill the Workshop Participation Form
  </a></strong>
</p>


## Contact

For queries and participation details, please contact:  

**Dr. Harsh Kasyap**  
_Email:_ hkasyap.cse@iitbhu.ac.in
