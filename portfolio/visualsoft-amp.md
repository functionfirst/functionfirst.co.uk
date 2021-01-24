---
title: Visualsoft AMP Platform
slug: visualsoft-amp
role: Front-end Developer
intro: Leveraging Google's AMP Cache within an ecommerce platform by implementing the AMP web component framework.
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

The project's objective was to improve front-end performance and higher [Web Vitals](https://web.dev/vitals/) scores across the Visualsoft platform. A key requirement of the project was to leverage the potential benefits offered by Google's AMP Cache, as such this meant delivering a solution that implemented the [AMP web component framework](https://amp.dev/) (also known as Accelerated Mobile Pages).

The project was further complicated having to build this new front-end within a [Monolithic app](https://en.wikipedia.org/wiki/Monolithic_application) with an existing front-end built using Kohana.

Using the AMP web component framework also broughts its own complexities:

### Limited Javascript

Custom Javascript, jQuery and third-party Javascript libraries weren't allowed to be used, **at all** on an AMP valid page. Neither could the page load javascript from a CDN. This limitation was recently relaxed to allow custom javascript using the [amp-script](https://amp.dev/documentation/components/amp-script/) component.

More recently the limitations of amp-script have been lifted. Previously amp-script could only access features of javascript accessible from a background thread using a [web-worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). It's now possible to modify the DOM via amp-script which now has access to a virtual DOM. Any changes we now make in amp-script can update the real DOM.

### Maximum CSS payload

AMP enforces a 50kb hard-cap on custom CSS though fortunately this is per page and not across the entire site.

Having previously used Tailwind on the [Visualsoft Admin](/visualsoft-admin) rebuild, it seemed like a good-opportunity to re-use this CSS framework.

One of the main advantages of an Atomic CSS framework like Tailwind is that it's not prone to bloat over time. Since there's a finite number of CSS properties which are applied atomically in HTML markup, the size of the CSS payload doesn't increase dramatically over time.

Though this has an obvious effect on DOM size with potentially hundreds of new CSS classes being added to your HTML, this is offset significantly with gzip compression.

The hard-cap on CSS payload was recently increased to 75kb.

## Actions & Outcomes

Though the outcomes are still yet to be measured, the Visualsoft AMP Platform is now officially being used on the [Gabor Shoes](https://www.gaborshoes.co.uk/) and [Pan Emirates](https://www.panemirates.com/uae/en/) websites.

## Conclusions

Using AMP presented some interesting challenges particularly due to the javascript and CSS limitations imposed by the framework. These limitations lead to a number of situations where you were forced to reconsider tried and tested strategies and to approach problems more creatively.

While an interesting framework to work with and offering some clear speed and performance benefits via Google's AMP Cache, I still feel the AMP framework itself is still a little immature. In AMP's defence its original purpose focused on editorial content so it maybe a little critical to expect the same web components to work as effectively on an ecommerce platform such as [Visualsoft](https://www.visualsoft.co.uk/).
