---
title: Visualsoft Admin
slug: visualsoft-admin
role: Front-end Developer
intro: Visualsoft's new admin system built as a SPA (Single Page App)
image: ./images/thumbs/visualsoft.svg
technology:
  - Babel
  - CSS
  - ES6
  - NPM
  - SASS
  - Tailwind
  - Vue.js
  - Vuex
  - Webpack
integrations: VSCommerce REST  API
year: 2019
---

A new admin system for the Visualsoft ecommerce platform, the front-end was built as a Single-Page App using Vue.js.

## Challenges & Requirements
As part of a larger project to develop an API for the entire Visualsoft platform, the new admin system was developed as the first project to consume this API.

With little knowledge of many of the tools ear-marked for this project, there was a steep learning curve involved. It's initial implementation was back-end lead which meant a lot of the Vue structure leaned heavily on PHP to act as a component loader. With the front and back-end's so tightly coupled, one of my first tasks was to decouple the front-end, converting it to a SPA and leveraging Webpack to allow me to build an async chunking strategy for loading Vue components.

## Actions & Outcomes

The build pipeline included Webpack, Babel and NPM allowing me to transpile ES6 into supported javascript.

## Hydrating State

Since PHP is the underlying technology, and with over 1,000 sites on the platform there were some complexities in populating state using data from the local sites database. Initially the SPA app was built to make a number of API calls to hydrate state as components were loaded but I felt this was completely inefficient to do after the page had loaded.

As a result I ended up server-rendering data as JSON in global javascript variables. These global json objects were then used by Vuex to initialise state in the related Vuex modules.

## Conclusions

In retrospect there are a lot of things I'd like to change about this project. The biggest one being to implement Server-Side Rendering of Vue to improve initial render times and page speed.