# google-search-results

This is a clone of a Google search results page. The structure of the page,
positioning and basic styling of elements were made by myself. I just checked
the original source code to fine tune the styling so that the page looks exactly
like the original.  
I separated the page in three sections:

1. The `header`, which contains the search field and navigation links
2. The `main`, which contains the results
3. The `footer`, which contains some links

In the `header`, I put the Google image, the search field, the "apps" icon and the
"Sign in" button inside a **flex container**, as well as the navigation links
bellow. I found it easier to keep all aligned and to position some elements to the
right. For example, the "apps" icon and the "Sign in" button, and the "Settings"
and "Tools" links. You just set the `margin-left` property to `auto` for the
element that you want to position to the right.  Of course, there are other ways
to achieve this result without using Flexbox, like floating the element or using
the `position` property, but I found it easier with Flexbox. Also, this solution
brings the flexibility and responsiveness possibilities offered by the Flexbox
layout.

In the `main`, I put the results as list items of an unordered list, as I did
with the "related searchs".  
For that "Goooooooooogle" at the bottom, I found it
easier and practical to just create a `table` with one row. Each letter is an
image inside a cell of the table, except the "gle >", which is just one image
inside a cell.

The `footer` contains just a `div` with the country and an unordered list with
some links.

As a sidenote, I had a little problem with the shadow effect of the `form`
element. The `form` contains two children: an `input` for the search field and a
`button` to submit. When the `input` (the search field) is focused, I wanted the
shadow to change for the whole `form` element. So, here is the problem: when you
focus an element, how do you select its parent to apply a property to it
(`box-shadow`, in this case)? Well, with pure CSS, apparently the only way is
using the `:has()` pseudo-class. But, as of 2018, this is experimental and [not
supported by any browser](https://caniuse.com/#feat=css-has). This limitation is
well know, as can be seen [here](https://stackoverflow.com/questions/2212583/affecting-parent-element-of-focusd-element-pure-csshtml-preferred#2212935), [here](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector?noredirect=1&lq=1) and [here](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#Limitations).  
I resorted to JavaScript to solve this problem.  When you focus the search field (`input` element), a function is called via the `onfocus` attribute. This function gets the `form`
element and changes its CSS `box-shadow` property. To set the `box-shadow` property back to normal when the search field loses focus, you call another function via the `onblur` attribute. But now you have a problem. The `box-shadow` property
applied by the script is inline style and overrides the `box-shadow` property
applied when the `form` is hovered. Now, the shadow doesn't change if the `form` is hovered. To bypass this, I used an `!important` declaration to prioritize the `box-shadow` property in the `form:hover` selector.  
Although it works, this is all very hackish and inelegant. Please, if you know a better solution, open a pull request.

Another sidenote. Testing the page in Chrome for Android, I noted tha the fonts
were not correct. The headings and paragraphs inside `#results` were too big. I
found that this was caused by a "feature" in some mobile browsers called
**Font Boosting**. It's described
[here](https://bugs.webkit.org/show_bug.cgi?id=84186). According to [this
answer](https://bugs.webkit.org/show_bug.cgi?id=84186#c17), the only side-effect
free way to disable Font Boosting is to set CSS
`max-height: 1000000px` on the block that contains the text (or any fixed height
greater than the actual height).  
Setting the `max-height` for all elements
inside `#results` (`#results * {max-height: 1000000px;}`) solved the problem.