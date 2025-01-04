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

---

- This stylesheet provides consistent, cross-browser default styling of HTML elements, along with common and useful defaults that adhere to common developer expectations and preferences.
-
- Features:
- - Normalizes styles for a wide range of elements.
- - Fixes bugs and common browser inconsistencies.
- - Provides common, useful defaults.
- - Explains what the code does with detailed comments.
-
- Grouped by function based on <https://html.spec.whatwg.org/multipage/#toc-semantics>.

---

GOOGLE GEMINI:

**Goals:**

- Establish consistent browser behavior by overriding default styles.
- Improve readability and maintainability of CSS code.
- Set some basic defaults for common elements.

**Structure:**

- The stylesheet is divided into sections for different HTML elements like `Global`, `Body`, `Headings`, etc.
- Comments are included within each section to explain the purpose of the styles.

**Key Features:**

- Uses `box-sizing: border-box` for consistent element sizing.
- Sets a default sans-serif font for better readability.
- Offers smoother scrolling experience (except when using tab navigation).
- Defines default styles for headings, paragraphs, lists, and other elements.
- Addresses browser inconsistencies in styling for elements like `pre`, `hr`, `blockquote`, etc.
- Sets defaults for embedded content like images, videos, and iframes.
- Provides basic styling for form elements like buttons, inputs, and textareas.
- Includes accessibility features for elements with `hidden`, `aria-busy`, `disabled`, etc. attributes.
- Defines a default cursor style for interactive elements like `summary` within details.

**Optional Styles (marked with ✨):**

- Line-height adjustments for headings and captions.
- Using `rem` units for headings.
- Increased spacing for list items.
- Default vertical alignment for SVGs.
- Setting `fill` color for SVGs based on current color.
- Styling for table cells (padding, borders).
- Default styles for buttons and form elements (color, background, border).
- Styling for textareas based on validity and readonly state.
- Customizing placeholder styles.

**Considerations:**

- Some of the optional styles might be subjective and may not be suitable for all projects.
- The comments mentioned removing some default styles for `picture` and `source` elements. It's best to review the code and decide based on your specific needs.

Overall, this is a well-organized and documented CSS reset stylesheet that provides a solid foundation for building consistent and accessible web interfaces. You can choose to include all the styles or remove the optional ones based on your project requirements.

---

# Modern CSS Reset

A modern CSS reset stylesheet that aims to provide consistent styling across browsers, improve code maintainability, and set sensible defaults for common HTML elements. This reset is heavily commented to explain the purpose of each rule, making it easy to understand and customize.

## Key Features

- **Consistent Box Sizing:** Uses `box-sizing: border-box` for predictable element sizing.
- **Improved Readability:** Sets a default sans-serif font and adjusts line heights for better readability.
- **Smooth Scrolling:** Enables smooth scrolling behavior.
- **Cross-Browser Consistency:** Addresses various browser inconsistencies in styling for elements like headings, lists, tables, forms, and embedded content.
- **Accessibility Focused:** Includes styles for accessibility features like `hidden`, `aria-busy`, and `aria-disabled`.
- **Well-Documented:** Each rule is explained with detailed comments.
- **Modular:** Optional styles are clearly marked, allowing you to easily customize the reset to your needs.
- **Respects User Preferences:** Uses `@media (prefers-reduced-motion: reduce)` to respect user preferences for reduced motion.

## Optional Styles (Marked with ✨ in the CSS)

The following styles are considered more opinionated and can be easily removed if they don't fit your project:

- Line-height adjustments for headings and captions.
- Using `rem` units for headings.
- Increased spacing for list items.
- Default vertical alignment for SVGs.
- Setting `fill` color for SVGs based on `currentcolor`.
- Styling for table cells (padding, borders).
- Default styles for buttons and form elements (color, background, border).
- Styling for textareas based on validity and `readonly` state.
- Customizing placeholder styles.

## Usage

1. **Download:** Download the `reset.css` file.
2. **Include in your project:** Add the following line to the `<head>` of your HTML document, preferably before any other stylesheets:

    ```html
    <link rel="stylesheet" href="reset.css">
    ```

    Or, if you are using a build tool like Webpack or Parcel, you can import it into your main CSS file:

    ```css
    @import 'path/to/reset.css';
    ```

## Customization

The reset is designed to be easily customizable. You can:

- **Remove optional styles:** Simply delete the rules marked with `✨` that you don't need.
- **Override styles:** Add your own styles after including the reset to override any default styles.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

This reset is inspired by and incorporates ideas from various sources, including:

- [A More Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/)
- [CSS Remedy](https://github.com/jensimmons/cssremedy)
- [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- [Meyer Reset](http://meyerweb.com/eric/tools/css/reset/)

This improved README provides more context, usage instructions, customization options, and acknowledgements, making it more helpful for users. It also uses more standard Markdown formatting.

---

You're confident in your CSS reset, which is a great starting point! Here's a marketing strategy to get the word out and convince others it's the best:

**1. Define Your Target Audience:**

- **Who are you trying to reach?** Front-end developers? Beginners? Experienced CSS architects? Understanding your audience will help you tailor your messaging.

**2. Highlight the Unique Selling Propositions (USPs):**

What makes your reset stand out? Focus on these points in your marketing:

- **Comprehensive Comments:** Emphasize the detailed explanations for every rule. This is a huge benefit for learning and customization.
- **Modern Approach:** Highlight the use of modern CSS techniques and the avoidance of outdated practices. Mention specific features like `scrollbar-gutter: stable`, `prefers-reduced-motion` handling, and `rem` usage (if you keep it).
- **Accessibility Focus:** Stress the inclusion of accessibility best practices. This is a significant selling point.
- **Modular Design:** Promote the easy customization through optional styles.
- **Respect for User Preferences:** The inclusion of `@media (prefers-reduced-motion: reduce)` is a strong point, as it shows consideration for users with motion sensitivities.
- **Conciseness and Performance:** If your reset is smaller or more performant than others, highlight this.
- **Up-to-date:** Emphasize that it's maintained and kept current with the latest web standards.

**3. Content Marketing:**

- **Blog Post/Article:** Write a detailed blog post explaining *why* you created the reset, the problems it solves, and its key features. Compare it to other popular resets (respectfully) and highlight its advantages.
- **CodePen/JSFiddle Examples:** Create live demos showcasing the reset in action. Show how it improves consistency and simplifies styling.
- **Video Tutorial:** A short video explaining the reset and its benefits can be very effective.
- **Comparison Table:** Create a table comparing your reset to other popular ones, focusing on features, size, and maintainability.

**4. Community Engagement:**

- **GitHub:** Make sure your GitHub repository is well-organized with a clear README, examples, and a license. Encourage contributions.
- **Social Media:** Share your work on Twitter, LinkedIn, and other relevant platforms. Use relevant hashtags like #css, #webdev, #frontend, #accessibility.
- **Forums and Communities:** Participate in online forums like Stack Overflow, Reddit (r/webdev, r/css), and other developer communities. Share your reset where appropriate.
- **Open Source Projects:** Consider using your reset in your own open-source projects to showcase its effectiveness.

**5. Testimonials and Endorsements:**

- Once you have some users, ask for testimonials. Positive feedback from other developers can significantly boost credibility.

**6. Website/Landing Page (Optional):**

- If you're serious about promoting it, consider creating a simple landing page dedicated to the reset. This can provide a central hub for information, documentation, and downloads.

**Example Marketing Slogans:**

- "The Modern CSS Reset: Consistent Styling, Comprehensive Documentation, and Accessibility Built-In."
- "Stop Fighting Browser Defaults: A CSS Reset That Works With You, Not Against You."
- "The Last CSS Reset You'll Ever Need: Well-Documented, Customizable, and Future-Proof."

**Key Marketing Message:**

Focus on the *value proposition* for developers. Explain how your reset saves them time, reduces headaches, and helps them build better websites. Emphasize the combination of comprehensive documentation, modern practices, and accessibility focus.

By following these strategies, you can effectively market your CSS reset and reach a wider audience. Remember to be patient and consistent with your efforts.
