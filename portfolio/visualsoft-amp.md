---
title: Visualsoft AMP Platform
slug: visualsoft-amp
role: Front-end Developer
intro: A deep-dive into the AMP web component framework to build a new front-end for Visualsoft's ecommerce platform.
image: ./images/thumbs/gabor.jpg
technology:
  - AMP
  - CSS
  - HTML
  - Javascript
  - Liquid
  - Tailwind
year: 2020
website: https://gaborshoes.dev.visualsoft.co.uk/
---

Building on top of the existing PHP platform, this project involved a major overhaul of the front-end views while still maintaining the existing platform still worked for customers who chose not to opt-in to the AMP solution.

## Project Background

Project summary goes here.

[![Screenshot of Gabor Shoes AMP website](./images/gabor.jpg)](./images/gabor.jpg)

[AMP (Accelerated Mobile Pages)](https://amp.dev/)

## Challenges & Requirements

Improve performance across the Visualsoft platform by leveraging the benefits offered by using Google's AMP Cache.

In order to do this we had to rebuild the entire front-end of the platform using the AMP web component framework.

- You can't use Javascript, jQuery or load any third-party javascript libraries.

- You have 50kb hard limite on the amount of Custom CSS you can use per page.

### Limited Javascript

### Maximum CSS payload

AMP's hard-cap for custom CSS styling on a page is 50kb which includes inline styles.

Having previously used Tailwind on the [Visualsoft Admin](/visualsoft-admin) rebuild, it seemed like a good-opportunity to re-use this CSS framework.

One of the main advantages of an Atomic CSS framework is that it's not prone to bloat over time. Since there's a finite number of CSS properties which are applied atomically in your html, the size of your CSS doesn't increase as dramatically over time.

## Actions & Outcomes

The outcomes of this project are still yet to be measured at this time. Visualsoft have no Live sites currently using this new technology stack.

## Conclusions

Using AMP presented some interesting challenges. Particularly due to the limitations imposed on javascript, this lead to a number of situations where we had to think around a problem that would normally have been quite trivial.

For example, you can't set the value of an input directly. With AMP, you have to set a State property then have the input bind to the value of that state property.

While an interesting framework to work with that has some major benefits in its provided to your site by Google AMP Cache, I still feel the AMP technology is a little immature.
