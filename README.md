<h1 align="center">
  Notify Me
</h1>

<h4 align="center">
  <a href="https://github.com/brunocroh/notify-me#usage">How To Use</a>
</h4>

<p align="center">
    Create notifications on your OS from terminal or node 
</p>
<p align="center">
  <a href="https://badge.fury.io/js/local-package-manager">
    <img src="https://badge.fury.io/js/@brunocroh%2Fnotify-me.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/brunocroh/local-package-manager/blob/main/license">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@brunocroh/notify-me is released under the MIT license." />
  </a>
  <a href="https://github.com/brunocroh/local-package-manager/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/brunocroh">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Contact%20me%20at%20@brunocroh" alt="Contact me at @brunocroh" />
  </a>
</p>

## Installation

```
npm install  @brunocroh/notify-me
```

then, you can create notification from your code like this:

```js
import NotifyMe from "@brunocroh/notify-me";

NotifyMe.notify("Hello", "Something happen here", {
  sound: true,
});
```

<p align="center">
    OR 
</p>

### use it from your terminal

```
npm install -g  @brunocroh/notify-me
```

then

```bash
$ notify-me
```

## Usage on Terminal

### Running on terminal

#### A simple notification

```bash
$ notify-me

```

#### Change title and description of notification

```bash
$ notify-me -t "Title" -d "Description"

```

#### running after other program finished

```bash
$ pnpm install && notify-me -t "pnpm install" -d "Finished"

```

#### running after other program finished with sound

```bash
$ pnpm install && notify-me -t "pnpm install" -d "Finished" -s
```

---

## Inside of your node project

```js
import NotifyMe from "@brunocroh/notify-me";

const SomethingThatTookAlotOfTime = async () => {
  // code here
};

const main = async () => {
  await SomethingThatTookAlotOfTime();
  NotifyMe.notify("Hello", "Something happen here", {
    sound: true,
  });
};
```

## Maintainers

- [brunocroh](https://github.com/brunocroh)
