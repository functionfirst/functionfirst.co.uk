---
title: Buildmate
slug: buildmate
role: Full-stack
intro: A .net web application that allowed builders to create quotes and manage their projects.
image: ./images/thumbs/buildmate.jpg
technology:
  - .NET
  - CSS
  - HTML
  - Less
  - MS SQL
  - Photoshop
  - Telerik
  - VB
integrations: Paypal
year: 2017
github: https://github.com/functionfirst/buildmate
---

Buildmate was a web-based application that enabled building companies and tradesmen to create estimates and tender documents for their customer base.

## Features

- Create building projects using 200,000 pre-defined building tasks
- Manage customer quotes. Send as email or print to PDF
- Compare over 100,000 prices for Labour, Plant and Materials
- Customer Management
- [Cost-efficiency algorithm](#cost-efficiency)

[![Screenshot of the Buildmate web application](./images/buildmateapp.jpg)](./images/buildmateapp.jpg)

### Cost-efficiency

Beyond the typical features expected when creating and managing building projects and customers, the system included an algorithm to calculate the most cost-effective combination to purchase resources.

When adding a resource to a project this cost-efficiency algorithm would automatically check if the resource already existed in the current project. It would then check the total resource value against the purchase quantities available and automatically use the most cost-effective combinations.

As an example, a project uses **15mm nail fix pipe clips**, these clips are used in a number of different tasks and are used in sets of **20-30** at a time. These resources are usually sold in packs of either **50** or **200**, where larger quantity packs are more cost-effective.

The Buildmate system would look at all selected tasks and calculate there were **150 clips** required across the whole project. It then scanned the resource pack sizes to calculate whether it was more efficient to buy **3 packs of 50 clips** or **1 pack of 200 clips** while still having **50 clips** left over.
