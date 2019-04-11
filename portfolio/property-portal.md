---
title: Property Portal
role: Front & Back-end Developer
intro: Application development for a property portal in Qatar. Built with MongoDb and AngularJS.
image: ./images/thumbs/property-portal.jpg
technology:
  - MongoDb
  - ExpressJS
  - AngularJS
  - NodeJS
  - HTML
  - CSS/Less
integrations: AWS S3 Storage
deployed: Gulp, NPM & GIT
---
The brief for this project was to design and develop a fully functional property management website to advertise property for sale or available to rent. Initially the plan was for the portal to be launched in Qatar and from there slowly build interest and expand into other territories as awareness and demand grew.

## Features

* CRUD Property Management
* User Registration & Management
* REST API with Token Based Authentication (JWT)
* Password Reset - also token based
* AWS S3 cloud storage - to store a potentially large quantity of property images

The project itself was developed as two loosely coupled front and back-end applications. The back-end application was built using NodeJS and ExpressJS as the main framework while MongooseJS was used as an object map to a MongoDB document store. Using these libraries I was able to create a Rest API that could be leveraged by the front-end system.

Having taken an API first approach to this project, it meant I was able to consume my own API to create the front-end as a single-page web application using AngularJS. This allowed me to develop both applications in tandem while maintaining a separation of concerns between the two. The structure of the front-end code was heavily influenced by John Papa's Angular Style Guide .

In this modern age I think any new web-application should be built with an API first mindset. This not only creates good separation of concerns and allows you to consume your own API, but it also allows third-partyies to integrate with it as well. Whether they want to create a native or desktop application or they need to upload and manage data from another data source, a good API will allow them to do this.