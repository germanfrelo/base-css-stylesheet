# base.css

[![pages-build-deployment](https://github.com/germanfrelo/base-css-stylesheet/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/germanfrelo/base-css-stylesheet/actions/workflows/pages/pages-build-deployment)

> [!NOTE]
> This is a **work in progress**.

This is my CSS reset: a set of baseline styles that I use whenever I start a new project.

An opinionated set of base styles for front-end web projects.

A best practices CSS foundation for websites as a reliable starting point for your CSS.

This stylesheet provides consistent, cross-browser default styling of HTML elements, along with common and useful defaults that adhere to common developer expectations and preferences.

What does it do?

- Normalizes styles for a wide range of elements.
- Fixes bugs and common browser inconsistencies.
- Provides common, useful defaults.
- Explains what the code does with detailed comments.

A foundational CSS library designed specifically for WordPress websites. It provides consistent, cross-browser styling for HTML elements, along with helpful default styles that adhere to common developer practices. By normalizing styles and addressing browser inconsistencies, this library offers a reliable starting point for your CSS, ensuring a predictable and visually appealing appearance across different browsers and devices.

- csstools/sanitize.css: A best-practices CSS foundation. sanitize.css is a CSS library that provides consistent, cross-browser default styling of HTML elements alongside useful defaults.
- sindresorhus/modern-normalize: Normalize browsers' default style.
- jensimmons/cssremedy: Start your project with a remedy for the technical debt of CSS.
- tailwindlabs/tailwindcss: Preflight: An opinionated set of base styles for Tailwind projects. Built on top of modern-normalize, Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system. While most of the styles in Preflight are meant to go unnoticed — they simply make things behave more like you’d expect them to — some are more opinionated and can be surprising when you first encounter them.

See the [source file](./base.css).

## Features

- It includes normalizing styles and useful defaults based on the following projects:
  - [@csstools/normalize.css](https://github.com/csstools/normalize.css)
  - [@csstools/sanitize.css](https://github.com/csstools/sanitize.css)
  - [@sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize)
  - [@jensimmons/cssremedy](https://github.com/jensimmons/cssremedy)
  - [A (more) Modern CSS Reset by Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/)
  - [Josh Comeau's Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset)
  - [Open Props's normalize stylesheet](https://github.com/argyleink/open-props/blob/main/src/extra/normalize.src.css)
- Actively maintained.

## Browser support

Modern browsers.

## Usage

- **Option 1: Direct Copy**

  Copy the contents of [the stylesheet](./base.css) and paste it into your CSS file.

- **Option 2: Link to the Latest Version**

  Alternatively, you can link to the most recent version of the stylesheet in your HTML file:

  ```html
  <link rel="stylesheet" href="https://germanfrelo.github.io/base-css-stylesheet/base.css" />
  ```

## Testing

There are various pages with HTML elements to be used for testing purposes. Some of them are:

- [@cbracco/html5-test-page](https://github.com/cbracco/html5-test-page)
- My custom page: [@germanfrelo/html-elements-test-page](https://github.com/germanfrelo/html-elements-test-page)
