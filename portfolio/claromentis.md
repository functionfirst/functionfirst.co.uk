---
title: Claromentis
slug: claromentis
role: Product Manager & UI Designer
intro: Product design and front-end development for an enterprise level intranet solution.
image: ./images/thumbs/timesheets.jpg
technology:
  - Angular
  - CSS
  - HTML
  - Javascript
  - jQuery
  - Photoshop
  - Sketch
year: 2016
---

As the Product Manager for the folks at [Claromentis](https://www.claromentis.com/) in Brighton, I was in charge of the Product/Platform team which comprised Designers and Developers working on the core product platform.

## Key Achievements

 * [Bootstrap Foundations](#bootstrap-foundations)
 * [Prototyping](#prototyping)
 * [CVS to Git](#cvs-to-git)
 * [Prototypes](#prototypes)

### Bootstrap Foundations

Initially Claromentis had no established guidelines for design and front-end and the framework itself was still using an outdated table-based layout. Each module of the system was designed independently and as a result was often inconsistent in both design and user experience. There were also significant problems with the existing codebase as duplicate, verbose and extremely specialised CSS was rife throughout the system.

Given the size and complexity of the existing codebase I opted to implement Bootstrap as a foundation layer upon which we could build the front-end. Alongside this I also defined some simple front-end guidelines which included the blacklisting of ID's as CSS selectors and **!important** in CSS properties. Javascript was only allowed to be hooked upto ID's or CSS classes prefixed with `js-`, these classes were to be exclusively used by javascript and no style properties were to be applied.

By implementing this we very quickly reduced the amount of code we had to maintain as well as bring much more consistency to design and interaction across all modules.


## Prototyping

Prior to my joining Claromentis any specificaiton for developers was illustrated using static screenshots built in Photoshop. Alongside these high fidelity images I introduced a more low-fidelity process using prototyping techniques. This included the use of [Axure](https://www.axure.com/) for the exploratory phase of a project as well as the use of HTML, CSS & jQuery when project ideas were at a much more refined level.

By introducing these new techniques Developers could interact directly with these prototyped interfaces and were able to understand project requirements much more clearly. They also gained better insights into how the UI should work, particularly during user interaction, a vital element missing from static design mock-up's.

### CVS to Git

I championed the migration of the existing codebase from CVS to GIT. This lead to improved code management and more collaborative working thanks to Git's more robust branching system. As a distributed VCS, Git gave the organisation much more flexibility when releasing the product. Developers were able to work more freely using Feature branches without blocking new releases being applied to master when bugs were patched.

## Prototypes

As Product Manager and Senior UI Designer for Claromentis I created a number of key prototypes. These were designed to be additional modules which could be added onto the core Claromentis offering, these modules offered further specialisation in areas where customers needed better support.

### Pages (2016)

I built the initial prototype for **Pages**, a Claromentis module which was designed to replace the existing CMS module. **Pages** was designed to be extendable, allowing new components to be replaced on a content page while allowing for existing components to be configured using contextual option panels.

[![Screenshot of the Pages prototype](./images/pages.jpg)](./images/pages.jpg)

### Quiz Builder (2016)

In addition to offering support for Learning packages built using SCORM, Claromentis also needed to develop it's offering further into the Learning Management Systems (LMS) space. As a result I began researching and implementing a **Quiz Builder** module which offered clients an alternative if they were unfamiliar with building SCORM packages.  **Quiz Builder** allowed administrators to create new quizzes, ask questions and track results and other data.

[![Screenshot of the Quiz Builder prototype](./images/quizbuilder.jpg)](./images/quizbuilder.jpg)

### Timesheets - Prototype (2014)

Built using Axure, this module explored the requirements that would allow Project Managers to schedule team diaries, as well as allowing team members to record their time against these activities.

Given further time for research and development, the prototype could have been extended to offer an improved reporting system that would allow project managers to track progress and identify any project delays.

[![Screenshot of the Timesheets prototype](./images/timesheets_prot.jpg)](./images/timesheets_prot.jpg)
