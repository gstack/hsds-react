# Icon

An Icon component renders an SVG icon.

## Example

```jsx
<Icon name="emoji" />
```

## Props

| Prop        | Type              | Description                                                    |
| ----------- | ----------------- | -------------------------------------------------------------- |
| center      | `bool`            | Center aligns component.                                       |
| className   | `string`          | Custom class names to be added to the component.               |
| clickable   | `bool`            | Enables the component to be clickable.                         |
| ignoreClick | `bool`            | Ignores click events. Bubbles click event to parent component. |
| inline      | `bool`            | Displays the component as `inline-block`.                      |
| muted       | `bool`            | Applies muted styles.                                          |
| name        | `string`          | Determines the SVG image. Required.                            |
| onClick     | `function`        | Callback function when component is clicked.                   |
| state       | `string`          | Changes icon color to represent a state.                       |
| shade       | `string`          | Changes icon color shade.                                      |
| size        | `number`/`string` | Adjusts the size of the component.                             |
| title       | `string`          | Provides a name for the component.                             |
| withCaret   | `bool`            | Renders a caret icon, next to the component's SVG icon.        |

### Shades

| Prop         | Description        |
| ------------ | ------------------ |
| `subtle`     | Medium-light grey. |
| `muted`      | Lighter grey.      |
| `faint`      | Very lighter grey. |
| `extraMuted` | Extra light grey.  |

### States

| Prop      | Description              |
| --------- | ------------------------ |
| `error`   | Changes color to red.    |
| `success` | Changes color to green.  |
| `warning` | Changes color to yellow. |
