---
layout: product_page
title: Website visitor prediction
description: Using AI to predict website visitor journeys.
img: assets/img/browser-1666995_640.jpg
permalink: /projects/ai-customer-journey-prediction
importance: 7
category:
related_publications: 
team: tfc.ai in collaboration with a German software development company
industry: Automotive
place: Germany
---

We were approached by a software development company to develop a customer journey prediction AI for a German automotive company. The end customer was interested in how well a modern AI system could predict the next website a user would visit based on their browsing history. We used a dataset of millions of past website visits to train a modern language model. 

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/ai-customer-journey-prediction.jpg" title="AI Prediction Improvements over baseline chart." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AI Prediction Improvements over baseline.
</div>

## Project Details
**Industry**: Automotive<br />
**Time Frame**: 2023<br />
**Technologies / Products used**:<br />
- **Apple MPS acceleration** for Neural Network Training
- **fast.ai, PyTorch and Pandas** frameworks
- **Google Cloud Firebase** for cloud model deployment
- REST API for UI - Backend Interface
- **Jupyter Notebooks** for fast and agile model development and training

<br />
<br />
{% raw %}
```json
{"prediction": 
    ["car-configurator.select_motorization", "models", "product_list.cars"], 
    "time": 92}
```
{% endraw %}<div class="caption">
    Sample API response.
</div>

