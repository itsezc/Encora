
Default button:

```js
<Button>
    Push Me
</Button>
```

Button with dynamic background and font color:

```js
<Button
    background='orange'
    color='white'
>
    Push Me
</Button>
```


A rounded button

```js
<Button
    rounded
>
    Push Me
</Button>
```

```js
<Button
    rounded='50'
>
    Push Me
</Button>
```

### Fluid 
A fluid button takes up the space of the entire container

```js
<Button
    width='fluid'
    rounded
>
    Push Me
</Button>
```

## Font

Upper case font styling

```js
<Button
    uppercase
>
    Push Me
</Button>
```

Bold font

```js
<Button
    bold
>
    Push Me
</Button>
```

Underline font

```js
<Button
    underline
>
    Push Me
</Button>
```

Spaced out font

```js
<Button
    uppercase
    spaced
    bold
    rounded
>
    Push Me
</Button>
```

## Icon

Plain icon

```js
<Button
    icon='inbox-fill'
    width={50}
    circular
/>
```

### Shadow

A button with stripe esec shadowing

```js
<Button
    rounded
    shadow='stripe'
>
    Push Me
</Button>
```
A button with spacious shadowing

```js
<Button
    rounded
    shadow='spacious'
>
    Push Me
</Button>
```