---
layout: product_page
title: 100% Inspection using AI
description: Using AI algorithms to classify OK / NOK parts.
img: assets/img/ai-100-percent-inspection.jpg
permalink: /projects/ai-100-percent-inspection
importance: 2
category:
related_publications: 
team: tfc.ai with customer domain experts
industry: Inspection Machines
place: Switzerland
---

For a Swiss customer tfc.ai tested and evaluated a Deep Learning approach to 100% Inspection. The customer already utilizes inspection machines that do dimensional measurements but often has to turn down customer requests due to missing surface detection capabilities. For several of these unsolved customer challenges we joined the domain experts to create datasets and train neural networks using these datasets.

The customer was impressed by the scope and universality of the Deep Learning capabilities our approach demonstrated.

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/object-detect-classi.jpg" title="AI object detection of screw heads" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sferaa.jpg" title="Defective head of a screw" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/TCCEIa.jpg" title="Defective head of a screw" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Object detection and classification on screws. Two dataset samples of different metal parts.
</div>

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
