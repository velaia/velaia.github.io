---
layout: product_page
title: Website visitor predictions
description: Using AI to predict website visitor journeys.
img: assets/img/ai-100-percent-inspection.jpg
permalink: /projects/ai-customer-journey-prediction
importance: 7
category:
related_publications: 
team: tfc.ai with software engineering freelancer
industry: Automotive
place: Germany
---

We were approached by a software developer to develop a customer journey prediction algorithm for a German automotive company. The end customer was interested in how well a modern AI system could predict the next website a user would visit based on their browsing history. We used a dataset of millions of past website visits to train a modern language model. 

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/ai-customer-journey-prediction.png" title="AI Prediction Improvements over baseline chart." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AI Prediction Improvements over baseline.
</div>


{% raw %}
```json
{"prediction": 
    ["car-configurator.select_motorization", "models", "product_list.cars"], 
    "modelId": "base", "time": 92}
```
{% endraw %}

## Solution
tfc.ai together with the customer created several datasets of real-life challenges faced by the customer. We used Deep Learning technology and trained different neural networks to get to 100% accuracy as well as a sub 20 ms latency per classification.

- API-based solution to suit different usage scenarios and easy integration
- **On-Premise solution** running on device - no internet connection needed
- **Edge deployment** as part of the customer's Internet of Things solution
- Possibility to quickly retrain Neural Network
- Usage of **Transfer Learning** techniques so we could work with very small datasets in the 10s to 100s of images.
- Detection of **Surface-Defects and Cracks**
- **Object Detection and Classification**

## Project Details
**Industry**: Inspection Machines<br />
**Time Frame**: May 2018 to May 2019.<br />
**Technologies / Products used**:<br />
- Nvidia GPUs for Neural Network Training
- **Nvidia Jetson Xavier edge device**: an AI computer for autonomous machines, delivering similar inference speed as a GPU workstation in an embedded module under 30W power consumption
- Google Cloud Platform (Storage for dataset and model transfer)
- Python, PyTorch and fast.ai Deep Learning frameworks
- REST API for UI - Backend Interface
- Jupyter Notebooks for fast and agile model development and training
- Pre-trained Neural Network models (ImageNet)




**The customer has agreed to us sharing the contact details on request if there's no conflict of interests / overlap in the area of operations. Get in touch if you're interested.**
