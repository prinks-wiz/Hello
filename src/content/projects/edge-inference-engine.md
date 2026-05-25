---
title: "Edge Inference Engine"
summary: "A lightweight ONNX runtime wrapper optimized for ARM Cortex-M7 targets, enabling sub-10ms inference for compact convolutional models."
date: 2024-03-15
techStack: ["C++17", "ONNX Runtime", "ARM NEON", "CMake", "Python"]
links:
  github: "https://github.com/placeholder/edge-inference-engine"
featured: true
---

## Overview

Placeholder content. Replace this with the actual project writeup.

This project targets constrained embedded devices where standard ONNX Runtime is too heavy. The wrapper strips unnecessary operators, applies static memory allocation, and uses NEON intrinsics for convolution layers.

## Architecture

Describe the system architecture here — memory layout decisions, operator selection, quantization approach.

## Benchmarks

| Model          | Target       | Latency (ms) | RAM (KB) |
|----------------|--------------|-------------|---------|
| MobileNetV2-0.25 | STM32H7   | 8.2         | 312     |
| Placeholder    | Placeholder  | —           | —       |

## Results

Summarize accuracy vs. latency tradeoffs and deployment outcomes here.
