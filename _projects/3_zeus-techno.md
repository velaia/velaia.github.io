---
layout: product_page
title: Quality Inspection
description: Inspecting 1500 nails per minute using AI.
img: assets/img/ai-nail-inspection-squooshed.jpg
permalink: /projects/ai-inspection
importance: 1
category:
related_publications: 
team: tfc.ai, customer team and Far Island machine vision specialists
industry: Manufacturing Industry, Funktional OÜ
place: South Korea
---

The challenge of this project was to perform a diverse set of measurements and surface classification as OK / Not-OK at the Edge. **25 nails/s** are zipping past the lens of the camera and the final decision in which bin they go has to be made within a fraction of a second, **2x - 4x faster than the blink of an eye**!

All of this has to happen in a **challenging industrial environment**: noise, vibrations, electromagnetic interference and dust to name just a few. While the hardware should be as small and efficient as possible.

## Solution
The solution developed has a **browser-based User Interface** that allows for the configuration of the inspection process and provides a live view of the nails under inspection. It comes with a log of defective nails and a configuration section.

The capture of a photo is triggered by a laser sensor. The image is then sent to the device for processing. When the nail reaches the decision point another laser sensor triggers the decision. Within 2-4 milliseconds the Nvidia Jetson device sends the final result to the PLC.

At its peak the software takes measures and performs AI surface defect detection on **up to 100 nail images per second** in parallel at an energy footprint of only 30 watts.

<div class="row" style="margin-top: 30px;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/ai-nail-inspection-squooshed.jpg" title="Four nails being inspected" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Nails in the Field of View of the FLIR camera.
</div>

## Project Team
tfc.ai worked with the machine manufacturer to come up with the specification for the dimensional and surface defect detection. Together we planned the integration of the different components of the machine and found ways to overcome the unexpected challenges that the industrial environment provided.

tfc.ai went to find a machine vision specialist that could satisfy our high requirements regarding precision and speed. We were lucky to find [Far Island Corp](https://far-island.com/en/index) in Seoul.
[Funktional OÜ](https://funktional.ee/) did a great job implementing the frontend and part of the backend using the Django web framework.

<div class="row" style="align:center; margin-top:40px;">
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            <video muted autoplay loop>
                <source src="/assets/video/nail-inspection-slow-motion-720.mp4" type="video/mp4">
            </video>
        </figure>
    </div>
</div>
<div class="caption">
    Slow motion video of the nail inspection process.
</div>


## Project Details
**Industry**: Manufacturing Systems Engineering<br />
**Users**: Nail manufacturers around the world.<br />
**Time Frame**: Beginning of 2020 to 2021.<br />
**Technologies / Products used**:
- **Nvidia Jetson Xavier** AI edge accelerator
- Nvidia Deep Learning tool suite (CUDA, cuDNN, TensorRT, DeepStream SDK), Nvidia Jetson Linux
- **Django web framework, Python, ZeroMQ and Redis backend**
- **MVTec Halcon** image processing library, HDevelop IDE and calibration plates
- **PyTorch models optimized with TensorRT** for edge deployment
- **GStreamer** library with Video4Linux and DeepStream modules
- **FLIR Machine Vision** Camera
- Nvidia flashing utility to quickly instantiate new edge devices


