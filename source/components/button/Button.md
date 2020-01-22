
Default button:

```js
<Button>
    Button
</Button>
```

Button with dynamic background and font color:

```js
<Button
    background='orange'
    color='white'
>
    Button
</Button>
```


A rounded button

```js
<Button
    rounded
>
    Button
</Button>
```

```js
<Button
    rounded='50'
>
    Button
</Button>
```

#### Fluid 
A fluid button takes up the space of the entire container

```js
<Button
    width='fluid'
    rounded
>
    Button
</Button>
```

### Font

Upper case font styling

```js
<Button
    uppercase
>
    Button
</Button>
```

Bold font

```js
<Button
    bold
>
    Button
</Button>
```

Underline font

```js
<Button
    underline
>
    Button
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
    Button
</Button>
```

### Icon

Plain icon

```js
<Button
    icon='inbox-fill'
    width={50}
    circular
/>
```

#### Shadow

A button with stripe esec shadowing

```js

<Button
    uppercase
    spaced
    bold
    rounded
    shadow='stripe'
>
    Button
</Button>

```
A button with spacious shadowing

```js
<Button
    uppercase
    spaced
    bold
    rounded
    shadow='spacious'
>
    Button
</Button>
```


#### Animation

Animations on a button

```js
<Button
	transition={'1s'}
>	Animated Button
</Button>
```