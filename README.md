# design-systems-benchmarks

Analysis and quantitive benchmarks for different design system libraries in React.

> Using the most starred open-source design systems from this list [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems).
>
> [Full list with star counts as of 2021-05-10](./shortlist/awesome-stars.txt)

## Benchmarks

#### Quantitive

- Time to install (with yarn v1)
- Time it took me to create a layout\* (incl. reading components' documentation)
- Size of the resulting bundle

> \* Specific Layout: (starting with an emptied Create React App)
>
> * Grid containing a card, that contains a button.
>   * This button opens a dialog/modal, which contains a datepicker and a submit button
>     * This submit button must not be clickable until a valid date has been picked
>     * When the modal form is submitted, a native window.alert() shows the date as an ISO result

#### Qualitative/Subjective

- Does it have good React support?
- Is it "modern react" (hooks instead of hocs, portals, no "legacy" React patterns)?
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

| Name                  | Install Time | Dev Time                    | Final Bundle Size | React friendly? | Modern React? | Date Library?                   | Tree-shakeable? | Sensible defaults? | Custom colors? | Custom fonts? | Custom type scale? | Dark theme?               | TypeScript? | Thorough unit tests? | Well maintained? | Good CSS dev practices? | Good JS dev practices? | Good docs? | Designer tools? |
| --------------------- | ------------ | --------------------------- | ----------------- | --------------- | ------------- | ------------------------------- | --------------- | ------------------ | -------------- | ------------- | ------------------ | ------------------------- | ----------- | -------------------- | ---------------- | ----------------------- | ---------------------- | ---------- | --------------- |
| palantir/blueprint    | 4.94s        | 31:42                       | 256kB             | y               | y             | uses own lib / (tz uses moment) | y               | y                  | y              | y             | y                  | y                         | y           | y                    | y                | y                       | y                      | y          | y               |
| chakra-ui/chakra-ui   | 20.55s       | 28:11                       | 178kB             | y               | y             | No date components              | y               | y                  | y              | y             | y                  | no but uses css variables | y           | y                    | y                | y                       | y                      | y          | n               |
| microsoft/fluentui    | 10.10s       | n/a (gave up after 10 mins) | n/a               | y               | y             | uses own lib                    | y               | n                  | y              | y             | y                  | n                         | y           | y                    | y                | n                       | n                      | n          | n               |
| segmentio/evergreen   | 14.59s       | 17:30                       | 129kB             | y               | y             | No date components              | y               | y                  | y              | y             | y                  | no but dynamic theme      | n           | n                    | y                | y                       | n                      | y          | y               |
| primer/css            |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |
| grommet/grommet       |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |
| ant-design/ant-design |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |
| uber/baseweb          |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |
| vmware/clarity        |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |
| uswds/uswds           |              |                             |                   |                 |               |                                 |                 |                    |                |               |                    |                           |             |                      |                  |                         |                        |            |                 |