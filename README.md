# Fiou CSS

Fiou CSS is a simple, responsive boilerplate to kickstart novel projects.

Check out <http://noveldigital.pro> for documentation and details.

### Getting started
---

There are a few npm commands:

`npm run dev`

Running the dev command will start the watch gulp
and create an unminified css file in dist.
It will also run a server where you can see a demo with some documantation.

`npm run build`
Build command will build a minified css file in the dist folder.

### Include in your project
---
You can simple link the dist/fiou.css in your header

or

`import('fioucss');`

or

`@import '~/node_modules/fioucss/src/scss/fioucss';`


### Customize
---
If you wan to customize various values (colors, margins, border-radius, etc..)
you can copy fioucss/src/scss/_variables.scss to your project
```
@import '~/path_to_copied_variables';
@import '~/node_modules/fioucss/src/scss/fioucss';
```
### Media Queries
---
There is only one media query at the 1200px breakpoint.
Everything below 1200px is considered small screens.

You can target columns for small screens by adding the @ sm postfix to the column class `f_col-25@sm`

For example if you have the class `class="f_col f_col-25 f_col-30@sm"`, the column will be **25% width > 1199px** and **30% < 1200px**.

You can add an extra query by importing the **_mq-md.scss** to your files which will add another breakpoint and media query at 998px.
So you can add class `f_col-20@md`.

Full documentation comming soon...
