# react-native-responsive-surender

An npm package for responsive your react native app

# Install this Package

```js
npm i react-native-responsive-surender
```

It will automatically make Responsive fontSize, height, width according to device width

```js
import {size} from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{fontSize: size(16)}}>
      <Text>Hello World!</Text>
    </View>
  );
};
```

Get the Device Width and Height Using Below

```js
import {screenWidth, screenHeight} from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{height: screenHeight, width: screenWidth}}>
      <Text>Hello World!</Text>
    </View>
  );
};
```

# Get the Multiple Sizes if any not getting fit

Using different size you need to pass object.

```js
import {size} from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={size({xs:30 sm:30, md:30, lg:30, xl:30, xxl:30})}>
      <Text>Hello World!</Text>
    </View>
  );
};
```

```js

1. xs is for screen that is smaller than 399.
2. sm is for screen that is between 400 to 599.
3. md is for screen that is between 600 to 767.
4. lg is for screen that is between 768 to 1007.
5. xl is for screen that is between 1008 to 1279
6. xxl is for screen that is greater than 1280.

```
