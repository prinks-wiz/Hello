---
title: "On Making Models Work When You Cannot Patch Them"
date: 2025-11-15
summary: "What satellite inference and production ML have in common — and why the discipline of edge deployment is really a discipline of thinking clearly about failure modes before they happen."
tags: ["edge-ml", "deployment", "spacecraft", "reliability"]
category: tech
---

The standard mental model for deploying a machine learning model looks something like this: you train, evaluate, ship, monitor, and when something goes wrong, you patch. The cycle repeats. The infrastructure exists to support that loop — MLflow for experiment tracking, weights in object storage, a retraining pipeline on standby, alerting on distribution shift, rollback in the CD system.

None of that exists when the model is running on a satellite.

I have been working on on-orbit inference for a NASA-class CubeSat at CMU's Space Research Argus lab, and the constraint that reshapes everything is simple: once the satellite is in orbit, you cannot patch the model. You can uplink new weights over a radio link, in theory, but the bandwidth is narrow, the downlink windows are measured in minutes per day, and the power budget for operations is strict enough that you budget every watt-hour. The de facto situation is that what you launch is what runs. The model has to work in deployment on inputs it was never designed to see.

This forces a different kind of thinking, and I have found it clarifying in ways that generalize beyond spacecraft.

**The first discipline is honest distribution shift analysis.** In normal ML deployment, distribution shift is something you monitor and respond to. For an on-orbit model, it is something you have to anticipate and harden against before launch. I built simulation environments using Google Earth Engine data specifically to stress-test the model on out-of-distribution geospatial inputs: cloud conditions, seasonal variation, sensor degradation profiles. The goal was not to make the model accurate on these inputs — it is hard to train for inputs you cannot fully characterize — but to confirm that it fails gracefully. A model that produces confidently wrong classifications on OOD inputs is more dangerous than one that says "I don't know." On a spacecraft, the inference output feeds downstream systems that make decisions. A confident wrong answer is not a warning; it is a command.

**The second discipline is power-aware optimization.** The model runs on a Jetson Orin NX with a 5-watt sustained budget for the compute subsystem. Getting EfficientNet to fit in that envelope required 65% model compression via structured pruning and INT8 quantization — not as a performance optimization but as a hard requirement. The interesting part was ensuring that the compression was not uniform: the layers most sensitive to quantization noise were preserved in FP16, and the calibration set for INT8 was constructed to be representative of the mission's actual input distribution, not just the training set. Getting that calibration wrong would have produced a model that looked good on benchmarks and failed in orbit.

**The third discipline is being honest about what you do not know.** A 700x speedup sounds impressive in a paper abstract. It is also a number that collapses several independent engineering decisions into a single figure, hiding the places where things could have gone differently. The CUDA kernel optimizations contributed the largest fraction. The quantization contributed another. The pruning contributed a third. Each of those decisions had accuracy tradeoffs that were negotiated carefully against the mission requirements. Presenting the result as a single number is accurate but not informative; the engineering lives in the tradeoffs.

This kind of thinking — explicit about failure modes, honest about uncertainty, disciplined about constraints — is not specific to spacecraft. It applies to any model running in an environment where you cannot iterate quickly on failures. A model in a legged robot mid-traverse, a model making decisions in a deployed medical device, a model in a vehicle where the next inference happens at 30 meters per second: all of these share the same property. The infrastructure for patching is not there, or not fast enough, or not safe to exercise. The model has to be right before it ships.

That is the discipline I am trying to build toward.
