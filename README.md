# README

## Resources

- https://www.strictmode.io/articles/setting-up-rails-7-for-typescript-and-react
- https://www.youtube.com/watch?v=Chiu-0EVW3g
- https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755

## Steps taken

```s
# Process taken
$ rails new demo-rails-with-react-frontend -j esbuild
$ cd demo-rails-with-react-frontend
$ yarn add react react-dom
$ bin/rails g controller components index
# Start the server
$ bin/dev
```

Update `app/views/components/index.html.erb`:

```js
<h1>Components#index</h1>
<div id="clock"></div>
```

Update `app/javascript/application.ts`:

```js
// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./components/clock";
```

Inside of `app/javascript/application.ts`:

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return <div>Hello, Rails 7!</div>;
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("clock");
  ReactDOM.render(<App />, rootEl);
});
```

Update your `config/routes.rb`:

```rb
Rails.application.routes.draw do
  root 'components#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
```

If `bin/dev` is already running, then visit `http://localhost:3000` and ya done.
