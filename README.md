# Interactive Video Player

## Software Summary

I built a simple web page (with a mobile-first design) that showcases an interactive video in HTML5.  This web page has three features of note:
* a jQuery plugin that redesigns the look of the video's controls
* the transcript is synced with the video so that as the video progresses, the transcript text will turn a different color
* anyone can click on any part of the transcript, and the video will fast forward to that point in time

## Built With

* HTML5
* CSS3 / Sass
* JavaScript / jQuery

## Additional Notes

* All of the HTML has been run through the W3C HTML validator.  There are 2 errors that say the width and height attributes on the video should not be percentages.  I'm leaving them as percentages because that is what the creators of the media player plugin have recommended in their documentation so that the video's dimensions can scale appropriately to the screen.
* All of the CSS code has been successfully run through the W3C CSS validator; there are no errors.
* All of the JavaScript has been successfully run through JSHint; it only mentions some ES6 standards.
* The version of jQuery that I am using is v3.3.1 from http://jquery.com/download/.
* I downloaded the .zip file containing the Media Element plugin from http://www.mediaelementjs.com/; their documentation on how to install it is found at https://github.com/mediaelement/mediaelement/blob/master/docs/installation.md, and their documentation on how to use it (and style it) is found at https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md.
* You'll notice that the end product does not EXACTLY match the provided mockups because I thought the mockups looked too...plain.  I added a header and a footer as bookends to kind of package it all together.  Nothing fancy.
* For some reason at times, before playing the video, the dimensions of the black video screen are not what the actual dimensions are; they will be bigger or stretch thin.  However, once you hit the "play" button, the video's dimensions return to what they were programmed to be, and the video plays normally.  I'm not sure if it's a bug or something I missed when coding.
* I spent awhile trying to make the highlighting event handler work before I decided to debug it through the JavaScript console in Chrome's Dev Tools.  I discovered that there were twice as many span tags as I had thought because I had completely forgotten about what might be inside the media player plugin.  I also hadn't formatted the milliseconds appropriately in the data-start and data-end attributes.  I corrected both mistakes, and BOOM; it finally worked.

## Author(s)

**Geoff Lewis**  
*Email:* geoff@geofflewis.work  
*Portfolio:* http://www.geofflewis.work  
*LinkedIn:* https://www.linkedin.com/in/geoff-lewis-696286a8  
*GitHub:* https://github.com/geoffreylewis

## Acknowledgements

...
