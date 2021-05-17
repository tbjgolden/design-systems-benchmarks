# design-systems-benchmarks

Analysis and quantitive benchmarks for different design system libraries in
React.

> Using the most starred open-source design systems from this list
> [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems).
>
> [Full list with star counts as of 2021-05-10](./shortlist/awesome-stars.txt)

## Benchmarks

#### Quantitive

- Time to install (with yarn v1)
- Time it took me to create a layout\* (incl. reading components'
  documentation)
- Size of the resulting bundle

> \* Specific Layout: (starting with an emptied Create React App)
>
> * Grid containing a card, that contains a button.
>   * This button opens a dialog/modal, which contains a datepicker and
>     a submit button
>     * This submit button must not be clickable until a valid date has been
>       picked
>     * When the modal form is submitted, a native window.alert() shows the
>       date as an ISO result

#### Qualitative/Subjective

- Does it have good React support?
- Is it "modern react" (hooks instead of hocs, portals, no "legacy" React
  patterns)?
- Which date library did it use under the hood?
- Is it tree-shakeable?
- Did it have sensible defaults?
- Is it possible to change the brand (colors, font, type scale)?
- Does it include a dark theme?
- Was it written in TypeScript?
- Is it unit tested?
- Subjective: Is it well maintained?
- Subjective: how good is the CSS code quality?
- Subjective: how good is the JS code quality?
- Subjective: how good are the docs?
- Subjective: are there tools for designers?

## Results

https://docs.google.com/spreadsheets/d/1_S3KVSax0-BB1hD0DY06zgwgOxDe30y-TCaUWIeTqnE/edit?usp=sharing
