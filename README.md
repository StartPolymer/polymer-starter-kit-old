# Polymer Starter Kit

Polymer Starter Kit is a boilerplate for web development using Web Components and modern tools.

Inspired by
[Web Starter Kit](https://github.com/google/web-starter-kit),
[HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate),
[Polymer generator](https://github.com/yeoman/generator-polymer) and
[Gulp generator](https://github.com/yeoman/generator-gulp-webapp).

Following [The 10 Commandments of Modern Web Application](https://gist.github.com/JosefJezek/8020bd8f02c4992e7d7d)

[DEMO](http://polymer-starter-kit.startpolymer.org)

## Features

- Using [Polymer Theme](https://github.com/StartPolymer/polymer-theme)
- [Custom Icons](https://github.com/StartPolymer/polymer-starter-kit/blob/master/app/elements/custom-icons/psk-custom-icons.jade) element
- [Sass](http://sass-lang.com) CSS preprocessor with [Ruby](https://www.ruby-lang.org)
- [Jade](http://jade-lang.com) HTML template engine
 - PSK need template engine for [Static Web Applications](http://www.staticapps.org)
 - Jade have [variables](http://naltatis.github.io/jade-syntax-docs/#variables),
[includes](http://jade-lang.com/reference/includes/),
[extends](http://jade-lang.com/reference/extends/),
[mixins](http://jade-lang.com/reference/mixins/) and other features
 - Check out the [index.jade](https://github.com/StartPolymer/polymer-starter-kit/blob/master/app/index.jade),
[includes](https://github.com/StartPolymer/polymer-starter-kit/tree/master/app/includes) and
[layouts](https://github.com/StartPolymer/polymer-starter-kit/tree/master/app/layouts)
 - [Learning Jade with Codecast](http://cssdeck.com/labs/learning-the-jade-templating-engine-syntax)
 - [How to disable Jade](https://github.com/StartPolymer/polymer-starter-kit/wiki/How-to-disable-Jade) for any developers
- [Markdown](https://help.github.com/articles/github-flavored-markdown/) support with [marked](https://github.com/chjj/marked)
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS
- [Asset revisioning](https://github.com/smysnk/gulp-rev-all)
for CSS, HTML and JS by appending content hash to their filenames
- [Compress text files with Pako](https://github.com/jameswyse/gulp-pako)
for avoiding the overhead of on-the-fly compression on server
- [PageSpeed Insights](https://developers.google.com/speed/docs/insights/about) for performance tuning
- Built-in preview server with [BrowserSync](http://www.browsersync.io)
- Automagically wire-up dependencies installed with [Bower](http://bower.io)
- [web-component-tester](https://github.com/Polymer/web-component-tester) support
- Quick deploy to [CDN](http://en.wikipedia.org/wiki/Content_delivery_network) Hosting
 - [GitHub Pages](https://pages.github.com) - [more info](https://github.com/blog/1715-faster-more-awesome-github-pages)

## Installation

### Tools on Ubuntu

```sh
# Add Ruby repository
sudo add-apt-repository -y ppa:brightbox/ruby-ng
# Script to install NodeSource repository
curl -sL https://deb.nodesource.com/setup | sudo bash -
# Install Git, Node.js and Ruby
sudo apt-get install -y git nodejs ruby2.2
# Install Bower, Gulp and NPM
sudo npm install -g bower gulp npm
# Install Sass
sudo gem install sass
```

- [Atom](https://atom.io) is great editor for web development, you can use
[Atom on Ubuntu](https://gist.github.com/JosefJezek/6d7386cb7011cc8f5d37) script.
- For other OS, you can use [Ubuntu VM Image](http://www.osboxes.org/ubuntu/) or Google Search :wink:

## Usage

### Clone this repository to separate branch `psk`

```sh
git clone https://github.com/StartPolymer/polymer-starter-kit.git <my-repo-name>
cd <my-repo-name>
git branch -m psk
git checkout -b master
git remote rename origin psk
git remote add origin https://github.com/<user>/<my-repo-name>.git
git push -u origin master
```

[How to use Git](https://gist.github.com/JosefJezek/775e54583ef319c8c641)

### Install dependencies

```sh
bower install && npm install
```

### Check variables

- Gulp variables are in the file [gulp/psk-config.js](https://github.com/StartPolymer/polymer-starter-kit/blob/master/gulp/psk-config.js)
- Jade variables are in the file [app/includes/psk-variables.jade](https://github.com/StartPolymer/polymer-starter-kit/blob/master/app/includes/psk-variables.jade)
- Sass variables are in the file [app/styles/_psk-variables.scss](https://github.com/StartPolymer/polymer-starter-kit/blob/master/app/styles/_psk-variables.scss)

### Serve to local and external URL

`http://localhost:9000` and `http://<Your IP>:9000`

```sh
gulp serve
```

Build and serve the output from the dist build

```sh
gulp serve:dist
```

### Build

```sh
gulp
```

## Deploy

### Deploy to GitHub Pages

First you need to be sure you have a gh-pages branch. If you don't have one, you can do the following:

```sh
git checkout --orphan gh-pages
git rm -rf .
touch README.md
git add README.md
git commit -m "Init gh-pages"
git push --set-upstream origin gh-pages
git checkout master
```

```sh
gulp deploy:gh
```

## Tools

### PageSpeed Insights

```sh
gulp pagespeed
```

## Extending

Use a [recipes](https://github.com/yeoman/generator-gulp-webapp/blob/master/docs/recipes/README.md)
for integrating other popular technologies like CoffeeScript. Or this a
[recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes).

### [web-component-tester](https://github.com/Polymer/web-component-tester)

```sh
bower install web-component-tester --save-dev
npm install web-component-tester --save-dev
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Run the tests, adding new ones for your own code if necessary
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## [MIT License](https://github.com/StartPolymer/polymer-starter-kit/blob/master/LICENSE)

Copyright (c) 2015 Start Polymer ([http://startpolymer.org](http://startpolymer.org))
