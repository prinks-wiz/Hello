---
title: "CubeSat CV Pipeline"
summary: "End-to-end computer vision pipeline for a NASA-class CubeSat mission, fine-tuned on Sentinel-2 imagery with quantization for the Jetson Orin."
date: 2025-10-01
techStack: ["PyTorch", "EfficientNet", "TensorRT", "INT8 Quantization", "NVIDIA Jetson"]
featured: true
---

## Overview

*Real content is TBD — this is a placeholder.*

On-orbit inference under strict power constraints is a fundamentally different engineering problem from cloud-based Earth observation. A CubeSat in low Earth orbit has seconds per pass to collect useful data, a watt-level power budget, and no opportunity for a hotfix if the inference pipeline locks up. This project builds the CV stack for a NASA-class 6U CubeSat mission at CMU's Spacecraft Lab, targeting land-cover and change-detection classification on Sentinel-2 multispectral imagery.

## Model and Quantization

*Placeholder — describe the fine-tuning dataset, EfficientNet variant, and INT8 calibration approach here.*

EfficientNet-B0 was chosen for its favourable accuracy-to-FLOPs ratio on the target imagery resolution. The model is fine-tuned on a curated subset of Sentinel-2 scenes, exported to ONNX, and quantized to INT8 using TensorRT's post-training quantization with a representative calibration set. Inference runs on the Jetson Orin NX at under 8W sustained, well within the mission power budget.

## Current Status

Active development. Ground-truth benchmarks against full-resolution Sentinel-2 validation sets are in progress. On-device latency and power profiling results will be posted here once the hardware integration is complete.
