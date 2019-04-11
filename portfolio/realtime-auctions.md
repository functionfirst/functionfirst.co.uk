---
title: Real-time Auctions
role: Front & Back-end Developer
intro: A real-time auction system using socket.io to push live bids to connected browsers.
image: ./images/thumbs/realtime-auctions.jpg
technology:
  - MongoDb
  - ExpressJs
  - AngularJS
  - NodeJS
  - Javascript/jQuery
  - HTML
  - CSS/Less
deployed: Gulp, NPM & GIT
hosting: DigitalOcean 
---
The initial scope of the Gulf Plates project was to design and build a web application that could facilitate the sale of car number plates in real-time.


## Features

* Extended Bidding
* Incremental bidding
* Automated bidding
* Real-time Auctions (using Socket.io)
* Auction management
* User Registration & Management

The final real-time auction system was developed using the MEAN stack, with AngularJS working on the front-end as a single-page application while Node, Express and MongoDB provided a Restful API which was used to consume auction data and manage user authentication. The real-time nature of the app was facilitated by socket.io which allows for real-time bi-directional communication between web clients and the server.

### Extended bidding
Each auction could be configured with a scheduled finish and extension time, if a new bid was received during the closing minutes the auction finish time would be automatically extended by the configured time. This allowed other users the opportunity to counter a bid and also prevented auction 'sniping' where users attempt to secure the item at a cheaper rate by placing a bid at the last minute.

### Incremental Bidding
Given the pressure and time sensitive nature of placing a bid, the UI for Gulf Plates was designed to be as simple and quick as possible to use.

Rather than entering a bid value each time the auction value changed, the user instead chose an increment amount from a select box. Add this increment value combined with the current auction value, a new bid value was automatically calculated. Keeping the increment value the same, the User could then simply click Place Bid using this new value. This reduced the bidding process to a single click.

### Automated Bidding
As incremental bidding still required constant attention on your auctions an Autobid system was also introduced to Gulf Plates. This allowed Users to set a maximum Bid value for the current auction. When other users placed a bid, the autobid system would check against any autobids logged in the system. Where these Autobids existed a new bid was automatically submitted on behalf of the user.

In situations where multiple autobids existed the internal system would identify the second highest Autobid and outbid it in favour of the user with the highest Autobid value.