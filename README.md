# react-as-input

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-as-input.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-as-input?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-as-input.png)](https://travis-ci.org/LingyuCoder/react-as-input)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-as-input.svg)](https://david-dm.org/LingyuCoder/react-as-input)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-as-input/dev-status.svg)](https://david-dm.org/LingyuCoder/react-as-input#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-as-input.svg?style=flat-square)](http://npmjs.org/package/react-as-input)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-as-input.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-as-input.svg?style=flat-square)](https://npmjs.org/package/react-as-input)

> Simple React text input wrapped with styles

## Demo

[Demo here](http://LingyuCoder.github.io/react-as-input/demo/index.html)

## Installation

```bash
$ npm install --save react-as-input
```

## Usage

```javascript
import Input from 'react-as-input';
<Input />;
```

## Properties

All properties of React `input` are support;

[insert]: # (start:src/index.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| className | className of the input | String |  | `'ra-input'` |
| disabled | whether the input is disabled | Boolean |  | `false` |
| skin | skin of the input | 'success'│'error'│'default' |  | `'default'` |
[insert]: # (end:src/index.jsx)

## Development

[Online test page here](http://LingyuCoder.github.io/react-as-input/test/test.html)

```bash
$ npm run dev # startup local dev server
$ npm run build # build
$ npm run test # run tests
$ npm run cov # run coverage
$ npm run build-demo # build demo, auto run in 'npm run build'
$ npm run build-test # build test, auto run in 'npm run build'
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
