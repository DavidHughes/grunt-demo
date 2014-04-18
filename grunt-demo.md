# What is Grunt?

Grunt is a JavaScript Task Runner.

---

# Okay...what is Grunt?

When I say task, what I mean is a transformation of or review of some files. This can include among many other possibilities:

 - JS code analysis (JSHint/Lint)
 - CSS & JS minification (taking out whitespace)
 - CSS & JS Aggregation (combine all our scripts/stylesheets)
 - Image optimisation
 - Sass compilation

---

These are all essential tasks which give tangible improvements to our site's front-end performance & developer experience.
 - Less HTTP requests
 - Smaller files
 - JavaScript written to agreed standards

---

INTRODUCING GRUNT

Grunt is a Javascript based task runner. This means you can use Javascript to configure it to run a number of plugins written by open-source communities (or ourselves, if we need to!).

---

Setup
Grunt requires node.js & npm to be installed, this is available on Linux, OS X and Windows.

npm install -g grunt-cli

Done.

---

So, what does this do?

grunt-cli needs two things to run Grunt:
- Gruntfile.js - defines the tasks that can be run by Grunt
- package.json - specifies the plugins that nodejs will use (including Grunt itself)

---

cd sites/all/themes/custom/cruk_bbq
npm install
// Grunt & grunt plugins installed
grunt
// Grunt default task is run.

---

A default task is executed when no task is specified. This means it's generally best to make it run the most common tasks:
- Compass/Sass compilation
- JSHint
- JS minification
- JS aggregation

We've just done all of that with a quick 'grunt'. Sweet, no need to remember lots of commands. But you can if you want to.

---

"I don't want to keep typing grunt!!!11!11"

Easily fixed. grunt-contrib-watch lets us define a task that can watch our files and, depending on what was changed, run relevant tasks.

 - Saved a JS file? JSHint will watch out for your missed semicolons.
 - Sass? That's already been compiled.
