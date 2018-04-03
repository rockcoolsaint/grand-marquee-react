
# grand-marquee-react
![Downloads](https://img.shields.io/npm/dm/grand-marquee-react.svg)
![Downloads](https://img.shields.io/npm/dt/grand-marquee-react.svg)
![npm version](https://img.shields.io/npm/v/grand-marquee-react.svg)
![License](https://img.shields.io/npm/l/grand-marquee-react.svg)

**Welcome to users of react-marquee-dwyer (being deprecated 5/1/2018 and replaced with this project)**

A horizontal marquee component for React! All you do is install, require, **include 4 lines of good old CSS**, and plug in your props and you have a full fledged marquee!

**Alert** Breaking changes published April 2, 2018. The changes were made to the props supplied to <Marquee>. The props are now semantically named and all have an equivalent state inside the marquee component. See the code example below to see the props.

# Alert
You must add these lines to your CSS or the marquee will NOT work:
```shell
@keyframes marquee {
    0%   { transform: translate(0, 0); animation-timing-function: ease-in;}
    100% { transform: translate(-100%, 0); animation-timing-function: ease-out;}
}
```


- Live Example: Coming Soon
- Example Repo: Coming Soon

## Getting Started

## Install manually:
1. Go to github [https://www.github.com]
2. Copy the ~/src/index.js file into your React codebase (name in marquee.js), treat it as a stand alone component
3. Add the required 4 lines of CSS
4. Where you want the marquee, import the marquee code:
```import Marquee from './marquee'```
5. You now have access to the Marquee. In your render paste:
``` js
		<Marquee
          totalDisplays={10}
          display1={'a'}
          display2={'b'}
          display3={'c'}
          display4={'d'}
          display5={'e'}
          display6={'f'}
          display7={'g'}
          display8={'h'}
          display9={'i'}
          display10={'j'}
          changeTime={250}
          crossTime={12000}
          randomDisplayChange={true}
          htmlTag={'h1'}
          color={'purple'}
        />
 ```
6. Done!


## Install it via npm:

```shell
npm i grand-marquee-react
```


## Example

App.css (or any css file associated with your react component below) :
```css
@keyframes marquee {
    0%   { transform: translate(0, 0); animation-timing-function: ease-in;}
    100% { transform: translate(-100%, 0); animation-timing-function: ease-out;}
}
```

Your react component where you want a marquee:
```html
import React, { Component } from 'react';
import Marquee from 'grand-marquee-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Marquee
          totalDisplays={10}
          display1={'a'}
          display2={'b'}
          display3={'c'}
          display4={'d'}
          display5={'e'}
          display6={'f'}
          display7={'g'}
          display8={'h'}
          display9={'i'}
          display10={'j'}
          changeTime={250}
          crossTime={12000}
          randomDisplayChange={true}
          htmlTag={'h1'}
          color={'purple'}
        />
      </div>
    );
  }
}
```

## Props

### totalDisplays
Dictates how many marquee display options. If only one string/integer to display, then totalDisplays={1}.

- Type: Integer
- Required
- Default: 1

### display1 ... display10
The string or integer you want to display as part of the marquee. The displays will be alternately displayed based on the randomDisplayChange flag (either in order or randomly).

- Type: String or Integer
- Minimum Requirements: set the value for display1
- Default: display1={'marquee'}

### changeTime
The time in milliseconds that it takes for the sting being displayed in the marquee to rotate to the next string/integer. If this time is equal to TimeToCross the marquee will display one unique string per one pass of the screen.

- Type: Number in milliseconds
- Default: 1000

### crossTime
The time in milliseconds that it takes the text to go from the right side of the screen to the left side of the screen.

- Type: Number in milliseconds
- Default: 10000

### randomDisplayChange
If set to true, the strings you provided for the marquee will be randomly rotated and displayed. If set to false, the strings will appear in order display1, display2, ... .

- Type: Boolean
- Default: false

### htmlTag
The html tag that will be used to display the string or integers entered into display1, display2, ... . You can only use html tags that can print html (i.e. 'h1', 'h6', 'p', and NOT 'image' or 'body')

- Type: String
- Default: 'h3'

### Color
The color of the text displayed in the marquee.

- Type: CSS Color or hexadecimal color code
- Default: 'purple'

## License

MIT

Copyright 2018 Daniel P. Dwyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
