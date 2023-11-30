---
layout: product_page
title: AI Product Identifier
description: Finding the right product from an image.
img: assets/img/digital-camera-parts.jpg
permalink: /projects/ai-product-identifier
importance: 1
category:
related_publications: 
team: tfc.ai with customer domain expert
industry: Automotive Industry
place: Germany
---

Together with a German SME automotive supplier we've developed an API-based web application that takes an image of a part, feeds it to a deep neural network classifier and sends back the predicted product number. The images come from end-user devices like cameras and smartphones.

The solution speeds up the customer support and ordering processes. Where in the past a qualified employee with years of experience would classify the part, often taking 10 to 15 minutes to identify the exact product number, our AI solution now shows the result in less than a second! Our customer gets a competitive advantage by automating a time-consuming task.

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/product-identifier.png" title="UI of the product identifier AI" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of the web UI of the application. Hovering over the result table will update the image of the predicted product, so users can double-check the AI result.
</div>

## Solution
tfc.ai guided the customer through the process of identifying a suitable first AI project, executing a Proof-of-Concept project and later implementing a production solution. Together with a customer domain expert we identified the challenges and requirements:

- **API-based** solution to suit different usage scenarios and easy integration
- **Cloud-hosting**, independent of customer IT landscape
- **Continuous learning** to support growing number of identifiable parts
- **Agile project** with short feedback-loops
- Customer has the ability to quickly retrain the model

## Project Details
**Industry**: Automotive<br />
**Users**: Customer employees in two locations in Germany.<br />
**Time Frame**: Beginning 2018 (Proof-of-Concept phase) to December 2018.<br />
**Technologies / Products used**:
- Google Cloud Platform (Compute Engine, Storage and DNS)
- Python, PyTorch and fast.ai Deep Learning frameworks
- Jupyter Notebook for fast network improvements
- REST API for UI - Backend interface
- Nvidia GeForce GPUs for network training




The customer has agreed to us sharing the contact details on request if there's no conflict of interests / overlap in the area of operations. Get in touch if you're interested.
