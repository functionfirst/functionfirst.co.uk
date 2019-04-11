---
title: Content Manager
role: Full-stack
intro: Simple content management using a simple REST API and MongoDB to store documents.
image: ./images/thumbs/content-manager.jpg
technology:
  - MongoDb
  - ExpressJs
  - AngularJS
  - NodeJS
  - HTML
  - CSS/Less
integrations: AWS S3 Storage
deployed: Gulp, NPM & GIT
---
A simple content and blogging platform that allows you to quickly create content pages and connect them together in a very simple and fluid manner. Using minimal UI and a context menu for formatting, the main focus of the platform is on creating and connecting content quickly.


## Features

* Inline content editing
* Drag and drop image upload
* Simple page creation
* Content auto-saving
* Private/Public pages
* Blogs
* Comment engine

Content Manager was built on top of a MongoDB document data store accessed using an Express/MongooseJS Rest API. The front-end of the site is a single page AngularJS application which allows for quick transitioning between pages.

Much of the page content itself is managed via an inline contextual menu which appears when text content is highlighted. This contextual menu offers many of the basic formatting choices expected in an editor, headings, bold, italic, etc. There is also facility for uploading images or other media types via a contextual sidebar or can alternatively be uploadede by simply dragging the image from your desktop onto the page.

By allowing content changes to be automatically saved back to the server via a Rest API I was able to exclude the need for any kind of UI to control page saving.

Creating a new page is also straight forward, simply highlight the text you want to link from, click the contextual menu to insert your link then follow that link to the new page. If the page doesn't already exist, simply click Create and begin editing your new page.
