# SidebarCollaspibleCard

A SidebarCollapsibleCard component contains content with the ability to collapse or expand, presented in a Card UI. This component is typically used in sidebars. This component uses the [Collapsible](../Collapsible) component to handle the expand/collapse interactions.


## Example

```jsx
<SidebarCollapsibleCard title='Quote'>
  <div>By the beard of Zeus!</div>
</SidebarCollapsibleCard>
```


### Custom Header

Typically, this component renders a title provided by the `title` prop. However, you can provide it with custom markup to render in the header area via the `header` prop.

```jsx
const customHeader = (
  <div className='custom-heading'>
    <h1>Big Quote></h1>
  </div>
)

<SidebarCollapsibleCard header={customHeader}>
  <div>By the beard of Zeus!</div>
</SidebarCollapsibleCard>
```

Note: `header` will override `title` if both are used.



### Sortable

This component can be drag sortable using the [Sortable](../Sortable) component. Due to the design of this component, you must pass `useDragHandle` and `hideDragHandles` into `Sortable`. This is because this component has it's own drag handles, which is activated when either `sortable` is true or when it is used within `Sortable`.

```jsx
<Sortable
  useDragHandle
  hideDragHandles
  pressDelay={100}
>
  <SidebarCollapsibleCard title='Zoolander 2'>
    <dl>
      <dt>Character</dt>
      <dd>Jacobim Mugatu</dd>
      <dt>Year</dt>
      <dd>2016</dd>
    </dl>
  </SidebarCollapsibleCard>
  <SidebarCollapsibleCard title='The Lego Movie'>
    <dl>
      <dt>Character</dt>
      <dd>Lord Business</dd>
      <dt>Year</dt>
      <dd>2014</dd>
    </dl>
  </SidebarCollapsibleCard>
</Sortable>
```

Note: In order for this component to play nicely with [Sortable](../Sortable), a `pressDelay` prop must be defined (recommended minimum of `100`). This allows for the collapse timing to synchronize with the Sortable item height calculations.



## Props

| Prop | Type | Description |
| --- | --- | --- |
| className | `string` | Custom class names to be added to the component. |
| duration | `number` | Time (ms) for the expand/collapse animation. |
| header | `element` | Custom markup to render into the header of this component. |
| isOpen | `bool` | Opens/collapses the component. |
| onClose | `function` | Callback function when the component closes. |
| onOpen | `function` | Callback function when the component opens. |
| onSortEnd | `function` | Callback function when component stops being sorted. |
| onSortStart | `function` | Callback function when component starts being sorted. |
| sortable | `bool` | Renders the drag handler for sorting. See [Sortable](../Sortable) |
| style | `string` | Custom styles to be added to the component. |
| title | `string` | Title for the header in this component. |
