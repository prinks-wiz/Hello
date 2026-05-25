---
title: "Notes on TinyML Deployment: What the Benchmarks Don't Tell You"
date: 2024-04-22
summary: "Practical lessons from deploying quantized neural networks on resource-constrained hardware — covering memory layout, operator fusion, and the gap between simulator and silicon."
tags: ["tinyml", "embedded", "machine-learning", "edge"]
---

## Introduction

Placeholder content. Replace with actual post body.

Most benchmark papers report latency on a clean evaluation loop with the model weights already resident in SRAM. The real deployment story is messier: flash read latency, cache thrashing on weight-heavy models, interrupt preemption during inference, and thermal throttling after 30 seconds of continuous operation.

This post collects lessons from deploying three models onto STM32H7 and RP2040 targets over the past year.

## The Memory Layout Problem

Describe the actual memory layout challenges here.

## Operator Fusion in Practice

Walk through where standard framework fusion fails on bare-metal targets.

## Closing Notes

Summarize key takeaways.
