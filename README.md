# design-systems-benchmarks

Analysis and quantitive benchmarks for different design system libraries in
React.

> Using the most starred open-source design systems from this list
> [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems).
>
> [Full list with star counts as of 2021-05-10](./shortlist/awesome-stars.txt)

## Results

| Name                        | Dev Time | Final Bundle Size (kB) | Components | Install Time (s) | React friendly? | Modern React? | Date Library?                   | Tree-shakeable? | Sensible defaults? | Custom colors? | Custom fonts? | Custom type scale? | Dark theme?       | Written in TypeScript? | Thorough unit tests? | Well maintained? | Good CSS dev practices? | Good JS dev practices? | Good docs? | Designer tools included?     |
| --------------------------- | -------- | ---------------------- | ---------- | ---------------- | --------------- | ------------- | ------------------------------- | --------------- | ------------------ | -------------- | ------------- | ------------------ | ----------------- | ---------------------- | -------------------- | ---------------- | ----------------------- | ---------------------- | ---------- | ---------------------------- |
| palantir/blueprint          | 0:31:42  | 256                    | 66         | 4.9              | Yes             | Yes           | uses own lib / (tz uses moment) | Yes             | Yes                | Yes            | Yes           | Yes                | Yes               | Yes                    | Yes                  | Yes              | Yes                     | Yes                    | Yes        | Sketch                       |
| chakra-ui/chakra-ui         | 0:28:11  | 178                    | 54         | 20.6             | Yes             | Yes           | No date components              | Yes             | Yes                | Yes            | Yes           | Yes                | Possible          | Yes                    | Yes                  | Yes              | Yes                     | Yes                    | Yes        | None (some unofficial exist) |
| segmentio/evergreen         | 0:17:30  | 129                    | 33         | 14.6             | Yes             | Yes           | No date components              | Yes             | Yes                | Yes            | Yes           | Yes                | Possible          | No (but with types)    | No                   | Yes              | Yes                     | No                     | Yes        | Figma                        |
| primer/css                  | 0:41:16  | 154                    | 43         | 17.7             | Yes             | Yes           | No date components              | Yes             | No                 | Yes            | Yes           | Yes                | Yes               | Yes                    | Yes                  | Yes              | Meh                     | Yes                    | Yes        | Figma                        |
| ant-design/ant-design       | 0:16:39  | 224                    | 63         | 19.0             | Yes             | Yes           | moment (customizable)           | Yes             | Yes                | Yes            | Yes           | Yes                | Probably possible | Yes                    | Yes                  | Yes              | Yes                     | Yes                    | Yes        | Figma                        |
| uber/baseweb                | 0:15:54  | 139                    | 54         | 18.0             | Yes             | Yes           | date-fns                        | Yes             | Yes                | Yes            | Yes           | Yes                | Yes               | No (but with types)    | Yes                  | Yes              | Yes                     | Yes                    | Yes        | Figma                        |
| carbon-design-system/carbon | 0:27:48  | 127                    | 35         | 24.0             | Yes             | Yes           | Flatpickr                       | Yes             | No                 | Yes            | Yes           | Yes                | Yes               | No                     | Yes                  | Yes              | Yes                     | Yes                    | Yes        | Sketch                       |

## (Personal) Conclusions

In my opinion, `uber/baseweb` was the strongest performer.

Also good was `ant-design/ant-design`, but its current implementation of CSS leaks into global styles, which will be a deal-breaker for many.



## Benchmark notes and details

### Quantitive

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

### Qualitative/Subjective

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
