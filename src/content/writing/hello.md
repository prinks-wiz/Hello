---
title: "When Your Labels Come From the Wrong Sensor"
date: 2026-03-10
summary: "On diagnosing label-source mismatch in autonomous driving datasets — and why the model is usually not the problem when accuracy is inexplicably poor."
tags: ["machine learning", "autonomous driving", "data quality", "VLMs"]
---

There is a category of ML debugging that does not look like debugging at all, because the model trains fine, validation accuracy is reasonable, and nothing is obviously broken. The problem only surfaces when you ask a pointed question: is the training label actually measuring what you think it is?

I ran into this directly while working on autonomous driving action prediction. The dataset used GPS-derived waypoint coordinates as action labels — the vehicle's recorded trajectory, converted into a sequence of positional targets for the model to predict. This is standard practice. GPS data is cheap, accurate, and automatically aligned with the video frames.

The issue is that a GPS waypoint tells you where the vehicle went. It does not tell you why. The model, during training, learns from images. During inference, it sees images. But the label it is trained against — the waypoint — is derived from a sensor it will never have access to at inference time. The training signal and the inference signal come from different worlds.

This creates a quiet failure mode. The model learns to predict plausible trajectories for common scenarios: straight roads, gentle curves, familiar intersections. Its validation accuracy on held-out samples from the same distribution looks acceptable. But in scenes where the visual context carries information that the GPS path does not — a pedestrian stepping off a curb, a merging vehicle not yet visible in the GPS trace, a lane change driven by what the driver saw rather than where they ended up — the model has no grounding. The label did not encode the reason; the model never learned to see it.

The fix we implemented was to augment the action labels with answers to structured visual questions about each scene, derived from a VQA pipeline. Instead of "what coordinates did the vehicle reach," the label incorporated "what does the scene suggest the vehicle should do and why." LLaVA-1.5-7B and Qwen2.5-VL were the reasoning backbone. The accuracy improvement was 3.5x over the vision-only baseline — not because the model architecture changed, but because the labels became honest about what the model was being asked to learn from.

The practical lesson: when accuracy is inexplicably poor, check the label source before the architecture. The model is almost always doing exactly what it was trained to do. The question is whether that is what you intended.
