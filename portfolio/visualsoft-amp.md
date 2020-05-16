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
website: https://www.gaborshoes.co.uk/
---

Building on top of Visualsoft's existing PHP platform, this project involved a major overhaul of the front-end.

[![Screenshot of Gabor Shoes AMP website](./images/gabor.jpg)](./images/gabor.jpg)

## Challenges & Requirements

The aim of the project was to improve site performance across the Visualsoft platform by leveraging the benefits offered by using Google's AMP Cache. This meant using the [AMP web component framework](https://amp.dev/), also known as **Accelerated Mobile Pages**.

Whist implementing these changes we also had to maintain the integrity of the existing platform, ensuring it still worked for those customers who chose not to opt-in to an AMP solution.


In order to do this we had to rebuild the entire front-end of the platform using the AMP web component framework. This brought its own complexities.

### Limited Javascript

Custom Javascript, jQuery and third-party Javascript libraries aren't allowed to be used, **at all**, anywhere on an AMP valid page. Neither can it load external Javascript from a CDN. This limitation has recently been loosened to allow custom javascript via the [amp-script](https://amp.dev/documentation/components/amp-script/) component, though this use a web-worker so features are still limited.

### Maximum CSS payload

There's a hard-cap for custom CSS which is 50kb, fortunately though this is per page and not side wide.

Having previously used Tailwind on the [Visualsoft Admin](/visualsoft-admin) rebuild, it seemed like a good-opportunity to re-use this CSS framework.

One of the main advantages of an Atomic CSS framework like Tailwind is that it's not prone to bloat over time. Since there's a finite number of CSS properties which are applied atomically in your HTML, the size of your CSS doesn't increase as dramatically over time (though your DOM size does).

## Actions & Outcomes

As it's still yet to see public release, the outcomes of this project are yet to be measured. Visualsoft have no live sites currently using this new technology stack.

## Conclusions

Using AMP presented some interesting challenges particularly due to the limitations imposed by the framework in terms of Javascript and CSS. These limitations lead to a number of situations where you were forced to reconsider tried and tested means and to approach problems more creatively.

While an interesting framework to work with and offering some clear speed and performance benefits via Google's AMP Cache, I still feel the AMP framework itself is still a little immature. In AMP's defence its original purpose focused on editorial content so it maybe a little critical to expect the same web components to work as effectively on an ecommerce platform such as [Visualsoft's](https://www.visualsoft.co.uk/).
