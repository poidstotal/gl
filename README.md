<b> Content structures</b></br>
This looks more like a one page website. One region would have been enough for the entire site. However I've have added 3 more regions, in addtion to the required "content" to make the style more manageable and consistent with the design.
Each piece of the page is either a static block or a views block. I've assigned them into the different
regions based on personal opinion of what look more like a footer, header than content, etc. </br></br>

The first section "Geek label" and the contact section are static block because they standout from other sections.The contact section is using a webform, rather than the the default contact feature since it has a field less. </br> Each of text+image is created as a content and pull out with views, based on tag. I've used the default basic page content type to handle them. The client section is using a separate content type "Client Logo" as suggested by the design.</br>
I have used two different footers, one for pc and one for mobile since the design suggest they are separate. All ther other section are responsive from pc to mobile.

<b> Theming and Style</b></br>
Usually I would clone a full exiting theme and starting my chanings on that base. I do this so that pages that doesn't have specific design can heritate some acceptable style. However for this test, since working from scratch has been asking, I create the subtheme for the bootstrap theme.
</br></br>
The style is written with much scss standard as possible.
I've used the modules Preprocessor (prepro) and Sassy core SASS+SCSS compiler (sassy).
It wasn't really possible to take much adavantage of the existant bootrap framework for this single page project. Usually, for a full the project I would use the exiting regions for internal pages and create a page--front.tpl.php for the home.</br>
For the silider effect of the client section, I have used two externals js on top of a simple views. Using a slider would have accomplished the same effect, but for this single page site, I have opted to tbe lightweigth as possible.</b></br>

Image handling: Not knowing how heavy will the full project be in image, I've choosen to use core image handling style.
In normal sitation however, different image style and breakpionts should be applied to views to enable different image size for different devices.

<b>Others</b></br>
Add back to top module: to make the navigation to the top easier
Accessing the site: http://54.253.250.252/gl/ admin logins are admin/admin
