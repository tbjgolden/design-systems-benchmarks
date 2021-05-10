# design-systems-benchmarks

Analysis and quantitive benchmarks for different design system libraries in React.

> Using the most starred open-source design systems from this list [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems).
>
> [Full list with star counts as of 2021-05-10](./shortlist/awesome-stars.txt)

## Benchmarks

#### Quantitive

- Time to install (with yarn v1)
- Time for a dev to create a layout\*
- Size of the resulting bundle

> \* Layout:
>
> * Grid containing a card, that contains a button.
>   * This button opens a modal, which contains a datepicker and a submit button
>     * This submit button must not be clickable until a valid date has been picked
>     * When the modal form is submitted, a toast/alert or native window.alert() shows the date as an ISO result

#### Qualitive/Subjective

- Does it have good React support?
- Is it hooks friendly (no HOCs)?
- Which date library did it use under the hood?
- Is it tree-shakeable?
- Did it have sensible defaults?
- Is it possible to change the brand (colors, font, type scale)?
- Does it have TypeScript support?
- Subjective: Is it still well maintained?
- Subjective: how good is the CSS code quality?
- Subjective: how good is the JS code quality?

## Results
