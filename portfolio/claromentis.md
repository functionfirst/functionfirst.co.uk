---
title: Claromentis
role: Product Manager & UI Designer
intro: Product design and front-end development for an enterprise level intranet solution.
image: ./images/thumbs/timesheets.jpg
technology:
  - HTML
  - CSS
  - Javascript/Jquery
  - AngularJS
  - Photoshop
  - Sketch (for Mac)
---
As the Product Manager for the folks at Claromentis in Brighton I was in charge of the Product team which was composed of both Designers and Developers working together on the core product platform.

## Process changes
During my time at Claromentis I was responsible for coordinating the design team and establishing a solid foundation for the front-end of the system. As part of this role and as Product Manager I implemented a number of key process changes to improve efficiency.

## Prototyping
Introduced interactive low fidelity prototyping to the organisation. Prior to my joining Claromentis any specificaiton for developers was illustrated using static screenshots built in Photoshop. I introduced the existing team to Axure and the benefits of using HTMl & CSS to prototype their ideas.

By changing the process in this way Developers were able to more easily understand the project requirements, interacting with the prototype offered them a clearer and deeper understanding of how the UI should work.

### Bootstrap Foundations
When I arrived there were no established guidelines for design and front-end and the framework itself was still using an outdated table-based layout. Each module of the system was designed independently and as a result were often inconsistent in both design and user experience. There were also significant problems with the existing codebase as duplicate, heavy and extremely customised CSS was rife throughout the system.

Given the size and complexity of the existing codebase I opted to implement Bootstrap as a foundatin layer from which we could build the front-end. I also defined some simple front-end guidelines which included the blacklisting of ID's as css selectors and !important in css properties. Javascript could only be hooked upto ID's or CSS classes prefixed with js-, these classes were to be exclusively used by javascript and no style properties were to be applied.

By implementing this we very quickly reduced the amount of code we had to maintain as well as bring much more consistency to design and interaction across all modules.

### CVS to GIT
I championed the migration of our codebase from CVS to GIT. This lead to better code management and more collaborative working thanks to the more robust branching system. This lead to more flexible releases as developers could work on feature branches without affecting the release of bugs and other quick fixes due to commiting to the master branch.