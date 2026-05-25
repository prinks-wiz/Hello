---
title: "State Estimation for Legged Robots: A Practitioner's Notes"
date: 2024-02-14
summary: "An overview of EKF-based and factor graph approaches to pose estimation for legged robots, with notes on implementation tradeoffs at 1 kHz control rates."
tags: ["robotics", "state-estimation", "slam", "kalman"]
---

## Introduction

Placeholder content. Replace with actual post body.

Legged locomotion pushes state estimation harder than wheeled systems: contact discontinuities, high-bandwidth IMU fusion, leg kinematics as pseudo-odometry, and the need for estimates that close the control loop at 1 kHz.

This is a practitioner's review of the approaches I've implemented or studied in depth.

## EKF-Based Approaches

Discuss the standard contact-aided invariant EKF (InEKF) formulation here.

## Factor Graph Approaches

Compare iSAM2 / GTSAM-based batch smoothers and their latency tradeoffs.

## Practical Implementation Notes

Cover the implementation pitfalls — numerical conditioning, covariance tuning, clock skew between IMU and leg encoders.
