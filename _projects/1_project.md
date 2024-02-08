---
layout: product_page
title: AI Product Identifier
description: Finding the right product from an image.
img: assets/img/digital-camera-parts.jpg
permalink: /projects/ai-product-identifier
importance: 1
category:
related_publications: 
team: tfc.ai with Nico Fahrzeugteile GmbH team
industry: Automotive Industry
place: Germany
---

Together with [Nico Fahrzeugteile GmbH](https://www.nico.info/), a highly innovative German SME, tfc.ai has developed an AI-based web application that takes an image of a product, feeds it to a deep neural network classifier and sends back the predicted product number. The images come from end-user devices like cameras and smartphones.

The solution **speeds up the customer support and ordering processes**. Where in the past a qualified employee with years of experience would classify the part, often taking 10 to 15 minutes to identify the exact product number, our **AI solution now shows the result in less than a second**! Nico Fahrzeugteile gets a competitive advantage by automating a time-consuming task.

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/product-identifier.jpg" title="UI of the product identifier AI" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of the web UI of the application. Hovering over the result table will update the image of the predicted product, so users can double-check the AI result.
</div>

## Solution
tfc.ai introduced the idea and guided the customer through the process of identifying a suitable first AI project, executing a Proof-of-Concept project and later implementing a production solution. Together with a customer domain expert we identified the challenges and requirements:

- **API-based** solution to suit different usage scenarios and easy integration
- **On-premise hosted solution** + **Cloud-based on-demand training**
- **Continuous learning** to support growing number of identifiable parts
- **Agile project** with short feedback-loops
- Customer has the ability to autonomously retrain the model 

## Project Details
**Industry**: Automotive<br />
**Users**: Customer employees in two locations in Germany.<br />
**Time Frame**: Beginning 2018 (Proof-of-Concept phase) to December 2018 with additional changes afterwards<br />
**Technologies / Products used**:
- Google Cloud Platform (Compute Engine, Storage and DNS)
- Python, PyTorch and fast.ai Deep Learning frameworks
- Jupyter Notebook for fast network improvements
- REST API for UI - Backend interface
- Nvidia GeForce GPUs for network training
- [BentoML](https://www.bentoml.com/) AI Application Framework
- To get more training data we co-developed a data augmentation robot with the [Factory Planning and Intralogistics team](https://www.tu-chemnitz.de/mb/FabrPlan/prof_mitarbeiter.php.en) of the Chemnitz University of Technology


The project was featured in the [booklet *KI im Mittelstand* (PDF)](https://www.plattform-lernende-systeme.de/files/Downloads/Publikationen/PLS_Booklet_KMU.pdf) ("AI for SMEs") by [**Lernende Systeme, Germany's platform for Artificial Intelligence**](https://www.plattform-lernende-systeme.de/).


