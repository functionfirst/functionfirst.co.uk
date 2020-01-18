---
title: Infocapture
slug: infocapture
role: UI Designer
intro: An early exploration stage prototype to research how Users can build dynamic forms using drag and drop.
image: ./images/thumbs/infocapture.jpg
technology:
  - HTML
  - CSS
  - jQuery
year: 2012
---

This project involved exploring and prototyping the creation of custom data forms for Infocapture, a [Business Process Management](https://www.claromentis.com/business-process-management/) tool and one of the more popular modules of the [Claromentis](https://www.claromentis.com/) intranet platform.

This was an extremely interesting project to undertake. Going into this project, myself and the rest of the team theorised that allowing users the ability to drag and drop fields to create a form would provide a much improved user experience. Developing a hi-fidelity prototype to test this theory, the conclusions weren't as expected.

## Conclusions

The initial prototype used a single toolbar with a number of field types at the top of the page. By dragging and dropping different field types from this toolbar Users were able to quickly create a dynamic form. Within a few moments of using this method it became apparent that dragging and dropping was quite a time consuming process. The major contributing factor for this was the time it took for the user to move their mouse to and from the toolbar each time they added a new field.

As a result of this research an alternative solution was implemented. This alternative solution provided users with a context menu, allowing them to click to select a field type from a contextual toolbar which was attached to the form section they were editing. The selected field type was then appended to the end of the current form section.

Once inserted in this way, drag and drop allowed the user to move the form field within the current form section. While this solution still made use of drag and drop, the adjustments needed to configure the form were much more localised and required much shorter drag distances. **This sped up the configuration process significantly when compared to the original drag and drop solution.**