---
title: Simplifying Web Performance
---
<style>
h1, h2 {
  text-align: center;
}
</style>
# Optimisation with a Grunt

---

## What are our performance bottlenecks?

  1. Too many asset requests
  2. Requests could be smaller
  3. JS not standardised, errors ignored

---

## How can we fix these?

  1. Aggregate:
    - JS/CSS concatenation
    - Spritesheets/data URIs
  2. Optimise:
    - JS/CSS minification
    - Image compression
  3. Standardise:
    - JSHint our JS
    - Unit tests

---

# That's a lot of stuff

---

<img style='margin: 0 auto; display: block;' alt='' src='https://raw.githubusercontent.com/DavidHughes/grunt-demo/master/grunt-logo.png' />

**Grunt** is an automated task runner that can improve our assets with minimal workflow impact

---

<img style='margin: 0 auto; display: block;' alt='TWEETDECK, JQUERY, BOOTSTRAP, SAUCELABS, MODERNIZR, WORDPRESS, OPERA' src='https://raw.githubusercontent.com/DavidHughes/grunt-demo/master/moodboard.png' />

---

...pretty much **every** major JavaScript project on GitHub

---
## Setup
Grunt runs on nodejs, which is available cross platform

    > npm install -g grunt-cli

Done.

---

**So, what does this do?**

grunt-cli needs two things to run Grunt:
<ul>
  <li>[Gruntfile.js](https://github.com/DavidHughes/grunt-demo/blob/master/Gruntfile.js) - defines the tasks that can be run by Grunt</li>
  <li>[package.json](https://github.com/DavidHughes/grunt-demo/blob/master/package.json) - specifies the plugins that nodejs will use (including Grunt itself)</li>
</ul>

---

<style>
#step-10 code > .blockquote {
  font-weight: bold;
}
</style>

Already in use in our repo:

    > cd docroot/sites/all/themes/custom/cruk_bbq
    > npm install
    # Grunt & grunt plugins installed
    > grunt
    # Grunt default task is run.

---

Running `grunt` before a commit is the only workflow change needed to get its benefits.

---

`grunt watch` can watch over your files and run needed tasks on that file.

 - Saved a JS file? JSHint will watch out for your missed semicolons.
 - Sass? That's being compiled right now.

---

## In short, Grunt:

 - Improves our asset quality
 - Easy to learn, with next to no workflow change
 - Can be extended with external or custom plugins

---

# Any questions?
