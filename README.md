# TailwindCSS Current

Style active (current) state for your page links, selected tabs etc with ease

## Why?

Typical situation: you're on `/foo` page and you want to style active link with different styles

```html
<a href="/" class="bg-gray-100">Home</a>
<a href="/foo" class="active bg-gray-100">I'm active and want to be green...</a>
```

With this plugin you can do it with `current:` variant

```html
<a href="/" class="bg-gray-100">Home</a>
<a href="/foo" class="active current:bg-green-500 bg-gray-100">Now I'm green</a>
```

## Installation

```sh
npm i tailwindcss-current
```

Add it in configuration file in `plugins` section

```js
module.exports = {
    plugins: [
        require('tailwindcss-current'),
    ],
}
```

By default `current` state will be applied for every element with `.active` class but you can specify any selector like

```js
module.exports = {
    plugins: [
        require('tailwindcss-current')('.is-active'),
    ],
}
```

it could be really any selector - just pass a string

```js
module.exports = {
    plugins: [
        require('tailwindcss-current')('[data-active]'),
    ],
}
```

```html
<a href="/" class="b    g-gray-100">Home</a>
<a href="/foo" data-active class="current:bg-green-500 bg-gray-100">Now I'm green</a>
```

Also you may use `group-current` variant

```html
<ul>
    <li class="bg-gray-100 active current:bg-red-500">
        <a href="/" class="group-current:font-bold">I'm bold and my parent is red</a>
    </li>
    <li class="bg-gray-100 current:bg-red-500">
        <a href="/" class="group-current:font-bold">Normal gray link</a>
    </li>
</ul>
```
