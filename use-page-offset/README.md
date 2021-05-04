# use-page-offset

> React hook for tracking browser window offset

[![NPM](https://img.shields.io/npm/v/use-page-offset.svg)](https://www.npmjs.com/package/use-page-offset) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live Demo

[use-page-offset.netlify.app](https://use-page-offset.netlify.app)

## Install

```bash
npm install --save use-page-offset
```

## Usage

```tsx
import React from 'react'
import { usePageOffset } from 'use-page-offset'

const App = () => {
    const offset = usePageOffset()

    return <div>Page offset {offset}</div>
}

export default App
```

## Parallax Demo

This demo below is a basic example of creating a parallax background image using Tailwind CSS. See it in action at [use-page-offset.netlify.app](https://use-page-offset.netlify.app)

```
import { usePageOffset } from "use-page-offset";

const App = () => {
  const offset = usePageOffset()
  const parallaxSpeed = 3;
  return (
    <div className="relative py-64 bg-red-500 overflow-hidden">
    <div
      className="absolute top-0 left-0 w-full h-full object-cover z-10"
      style={{
        transform: 'translate(0px, ${offset / parallaxSpeed}px)',
        backgroundImage: 'url("https://via.placeholder.com/1200x400")',
      }}
    ></div>
    <div className="text-center relative z-20">
      <h1 className="text-5xl font-bold pb-4 text-blueGray-800">
        Text Overlay
      </h1>
    </div>
  </div>
  )
}

export default App
```

## How does this work?

Use Page Offset is a super simple react hook that tracks the `pageYOffset` of the browser window so you can easily build in effects like parallax & scroll effects.

## License

MIT © [garrettbland](https://github.com/garrettbland)

---
