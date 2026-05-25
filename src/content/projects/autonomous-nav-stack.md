---
title: "Autonomous Navigation Stack"
summary: "A modular ROS 2 navigation stack integrating LiDAR-inertial odometry with learned terrain classification for unstructured outdoor environments."
date: 2024-01-10
techStack: ["ROS 2", "C++", "Python", "PyTorch", "LiDAR", "Eigen"]
links:
  github: "https://github.com/placeholder/nav-stack"
featured: true
---

## Overview

Placeholder content. Replace with actual project writeup.

A full-stack approach to outdoor autonomous navigation: low-level sensor fusion via LIO-SAM-based odometry, a learned terrain classifier running at 10 Hz on a Jetson Orin, and a local planner that respects traversability predictions.

## System Diagram

Describe or embed the system architecture diagram here.

## Key Contributions

- Trained a lightweight terrain segmentation model on a custom dataset of 12k labeled point clouds
- Integrated model output into the costmap as a custom layer plugin
- Validated on 3 km of outdoor trails

## Status

Placeholder — fill in current status, open problems, future work.
