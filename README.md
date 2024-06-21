# react-native-responsive-surender

An npm package for responsive your react native app

# Install this Package

```js
npm i react-native-responsive-surender
```

It will automatically make Responsive fontSize, height, width according to device width

```js
import Size from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{fontSize: Size(16)}}>
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

Using different size you need to use Size(lg, md, sm).

```js
import Size from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View>
      <Text style={{fontSiz: size(40,30,20)}}>Hello World!</Text>
    </View>
  );
};
```

```js

 * 1. lg is for screen that is between 600 to 767.
 * 2. md is for screen that is between 400 to 599.
 * 3. sm is for screen that is smaller than 399.

```

#use percentages for for all screen Size

```js
import Size from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{height: Size("10%")}}>
      <Text>Hello World!</Text>
    </View>
  );
};

```

#use percentages for specific screen Size

```js
import Size from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{height: Size("10%", "15%", "20%")}}>
      <Text>Hello World!</Text>
    </View>
  );
};

```
