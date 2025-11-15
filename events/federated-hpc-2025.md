<img width="468" height="152" alt="image" src="https://github.com/user-attachments/assets/7eb8f979-828f-492c-86ef-7aa1affb7184" /><img width="471" height="28" alt="image" src="https://github.com/user-attachments/assets/d7acbd36-a79f-41dd-98ec-fcec244ad683" /><img width="468" height="124" alt="image" src="https://github.com/user-attachments/assets/89a7759f-0ff6-45d4-b886-c8c543bed40c" />---
layout: default
title: Federated HPC Workshop
---

# Federated HPC: Towards Privacy-Preserving and Collaborative High Performance Scientific Computing
**Organisers:** Dr. Harsh Kasyap, Prof. Ravi Shankar Singh from Dept. of CSE, IIT (BHU), Varanasi

<p style="margin:0.4rem 0;">
  <strong>📍 Where:</strong>
  <a href="https://sci25.supercomputingindia.org/Conference#program-at-a-glance"
     style="color:#4338ca; font-weight:600;">
    Supercomputing India SCI2025 at Manipal Institute of Technology, Bengaluru
  </a>
</p>

<p style="margin:0.4rem 0;">
  <strong>🕒 When:</strong> December 12, 2025 (02:00 PM – 07:00 PM)
</p>

<strong><a href="https://sci25.supercomputingindia.org/Conference#delegate-tariff" target = "#">Register for the workshop as a delegate</a></strong>

---

## About the Workshop

Advances in scientific computing increasingly rely on AI-driven analysis of large-scale, distributed datasets generated across data centres, laboratories, and edge infrastructures. However, collaboration is often constrained by privacy regulations, institutional data policies, and the prohibitive cost of centralising data at scale. Federated Learning (FL) offers a paradigm shift by enabling multiple organisations to collaboratively train models without sharing raw data, while High Performance Computing (HPC) platforms provide the computational backbone for large-scale scientific workloads.

This workshop focuses on **scalable, communication-efficient, and privacy-preserving federated learning for scientific applications on HPC systems**. We will explore challenges in orchestrating FL on distributed clusters, handling heterogeneous data and compute environments, integrating privacy-preserving mechanisms (such as secure aggregation and differential privacy), and optimising communication overhead. Through expert talks, hands-on sessions, and group activities, the workshop aims to chart a roadmap for secure, collaborative, and trustworthy scientific computing at scale.

---

## Objectives

The workshop aims to:

- Enable **collaborative scientific computing** without sharing raw data across institutions.  
- Explore **scalable federated architectures** on HPC systems and hybrid cloud–HPC environments.  
- Examine **privacy-preserving techniques** (secure aggregation, differential privacy, cryptographic tools) for scientific data.  
- Demonstrate **hands-on federated workflows** tailored to HPC environments.  
- Identify **open research challenges** in Federated HPC and foster future collaborations.

---

## Tentative Programme (Second half, 02:00 - 07:00 PM)

- **02:00 – 02:10** – Opening and Motivation  
- **02:10 – 03:10** – Talk I - Importance of Tensors in Scientific Computing and Data Science  
  - **Speaker:** Dr. Ratikanta Behera, Assistant Professor, CDS, IISc Bangalore  
- **03:10 – 03:30** – Discussion with Speaker
- **03:30 – 04:00** – Group Activity: Identifying Open Challenges & Discussion with Experts
- **04:00 – 04:45** – Talk II - Recent Advancements in Parallel Algorithms  
  - **Speaker:** Prof. Ravi Shankar Singh, Professor, CSE, IIT (BHU)  
- **04:45 – 05:30** – Talk III - Privacy-Preserving (Collaborative) Machine Learning  
  - **Speaker:** Dr. Harsh Kasyap, Department of CSE, IIT (BHU)
- **05:30 – 05:40** – Tea Break
- **05:40 – 06:40** – Demonstration: Federated Learning on HPC – Simulation and Privacy-Preserving Extensions  
  - **Speaker:** Dr. Harsh Kasyap, Department of CSE, IIT (BHU)
- **06:40 – 06:55** – Group Activity: Finalising future problems and collaborations
- **06:55 – 07:00** – Concluding remarks

*(Exact timings and titles may be updated based on the final SCI 2025 schedule.)*

---

## Talk I: Importance of Tensors in Scientific Computing and Data Science

In the era of BIG data, artificial intelligence, and machine learning, we need to process multiway (tensor-shaped) data. These data are mainly in the three or higher-order dimensions, whose orders of magnitude can reach billions. Vast volumes of multidimensional data pose a significant challenge for processing and analysis; the matrix representation of data analysis is insufficient to represent the complete information content of multiway data across various fields. This talk will discuss tensor factorization as a product of tensors. To address the factorizations, we discuss operations between tensors with the concept of transpose, inverse, and identity of a tensor. We will conclude with a few color image applications in a tensor-structured domain.

---

## Talk II: Recent Advancements in Parallel Algorithms.

Recent advancements in parallel algorithms are driven by the need to handle very large datasets and massive computations more efficiently. Parallel algorithms focus on optimizing performance for heterogeneous and specialized hardware, such as multi-core CPUs and many-core GPUs, while addressing critical challenges like communication overhead, synchronization, and scalability. The Parallel Random Access Machine (PRAM) model remains a foundational theoretical tool for designing and analyzing parallel algorithms. Recent advancements have focused on using PRAM principles to develop more practical algorithms for modern hardware. Similarly, hypercube is also a powerful conceptual model  and recent advancements have focused on adapting its principles for real-world applications in areas like quantum computing, AI, and cloud networking.

---

## Talk III: Privacy-Preserving (Collaborative) Machine Learning<img width="471" height="28" alt="image" src="https://github.com/user-attachments/assets/fb5caf74-5b50-422d-a15a-68c1b5f79955" />

Machine learning has been adopted across industries, including the applications directly operated by the end users (individuals). However, users or organisations are reluctant to share data for training. This has also been restricted due to various regulations across demographics, such as GDPR. It may also be due to reasons citing privacy and market competition. However, domains, such as healthcare, finance, etc., demand collaboration to mitigate common challenges, and improve the research. This requires to integrate the privacy enhancing technologies (PETs) with machine learning. PETs include approaches from both machine learning and cryptography. Federated learning (FL) is one of the promising solutions, claiming to provide a privacy-preserving (collaborative) machine learning framework. However, there have been many works, questioning, whether FL is truly privacy-preserving. Therefore, it is time to integrate multiple PETs, such as FL, differential privacy, homomorphic encryption (HE), and secure multi-party computation to achieve a privacy-preserving (collaborative) machine learning solution.

---

## Hands-On/Demonstration

This session will introduce participants to the fundamentals of FL and demonstrate how FL can be simulated across multiple nodes within an HPC environment. We will learn to deploy a simple federated training experiment where each node acts as a client contributing to a shared global model coordinated by a central server process. The experiment will be orchestrated using a distributed server, enabling participants to understand how FL workflows integrate with HPC scheduling systems. Through this exercise, attendees will observe how model updates are exchanged, measure communication overhead, and analyze convergence behavior under non-IID data distributions. This hands-on activity will bridge theory and practice, illustrating how distributed scientific computing infrastructure can be leveraged to implement scalable and privacy-preserving federated learning. In addition to the basic setup, participants will explore how privacy preserving mechanisms such as secure aggregation and  can be incorporated into the FL process to ensure that sensitive client data remains protected throughout training.

---

## Group Activities: Identifying Open Challenges, Future Research Plans and Collaborations
Participants will engage in structured group discussions and brainstorming activities designed to consolidate learning and inspire future research directions in Federated HPC. In the first activity, “Identifying Open Challenges,” participants will work in small groups to discuss key unsolved problems in this emerging field. Each group will summarize and present its insights to collectively build a taxonomy of current research challenges. The second activity, “Future Research Plans and Collaborations,” will encourage participants to design potential research collaborations and project outlines that extend beyond the workshop. This activity will serve as a platform to connect researchers with complementary expertise, leading to the formation of working groups, proposal ideas, and open-source community efforts that can continue after the workshop.

---

<strong><a href="https://sci25.supercomputingindia.org/Conference#delegate-tariff" target = "#">Register for the workshop as a delegate</a></strong>

## Contact

For queries and participation details, please contact:  

**Dr. Harsh Kasyap**  
_Email:_ hkasyap.cse@iitbhu.ac.in
