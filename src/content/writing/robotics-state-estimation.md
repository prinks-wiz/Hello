---
title: "When You Have No Data, You Go Back to Calculus"
date: 2024-04-05
summary: "How a mutual fund volatility model got built from first principles — using Continuous Wavelet Transform and second-order derivatives — when there was no training data to speak of."
tags: ["data-science", "time-series", "mathematics", "fintech"]
category: tech
---

The standard assumption in applied machine learning is that data exists. You might not have enough of it, it might be noisy, it might be labelled wrong — but there is something to work with. The interesting engineering problems arise when that assumption fails.

At Finsire Technologies, the problem was a volatility score for mutual funds, to be used in computing loan-to-value ratios for a new lending product. The score had to be reliable, real-time, and deployable within the quarter. The dataset was the live MFI API feed of net asset values: clean, structured, abundant in records, and completely without labels. Nobody had annotated which fund trajectories were volatile. Nobody had built a reference model to benchmark against. There was no training set to split.

The first instinct — mine and the team's — was to look for proxy labels. Could volatility be derived from return variance over a rolling window? It could, but rolling variance over short windows is noisy and over long windows is slow to react to sudden changes, which is exactly the regime the loan product cared about: funds that look stable over twelve months but have started moving sharply in the last two weeks. Standard variance was not precise enough in time.

I returned to the mathematics of time series, specifically to what makes a signal look volatile from the perspective of a physicist rather than a statistician. Volatility is not just magnitude of change — it is the frequency and sharpness of inflection. A fund that moves 5% once over six months is not volatile. A fund that moves 2% every fortnight is. What distinguishes them is not the amplitude of individual moves but the density of peaks and troughs and the rate at which the series changes direction.

Continuous Wavelet Transform provided a principled tool for this. The CWT decomposes a signal across both time and frequency, giving a multi-resolution view of where energy is concentrated. Modified for this application, it could identify local extrema in the NAV series in a way that was robust to noise and sensitive to the timescales the product needed. First and second-order derivatives at the identified extrema then characterized the direction and rate of each inflection: was the fund accelerating into a downturn, or decelerating out of one? The combination of extrema density and derivative magnitude produced a scalar volatility score with interpretable components.

The model shipped at 92% precision on a held-out validation set, ran in real time on the live API feed, and was deployed in half the anticipated timeline. The lightweight implementation — no training loop, no weights, just a parameterized signal processing pipeline — was a practical advantage: it could be audited, adjusted, and explained to the compliance team in terms they understood.

What I took from the experience was this: the impulse to reach for a model when you have a hard problem is understandable but not always correct. Models are generalization engines — they distill patterns from data into a form that transfers to new inputs. When there is no data to distill from, the question is whether the problem has mathematical structure that can substitute for empirical structure. Volatility does. Many problems in finance and physics do. The skill is recognizing when you are looking at one of them, and being willing to go back to the calculus textbook rather than the model zoo.
