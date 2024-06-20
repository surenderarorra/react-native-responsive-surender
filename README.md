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
Using different size properties will not effect the device that are below 600 screen width
if you making an app for mobile device use only size otherwise choose any one that is fit according to you.

```js
import {size, size_sm, size_md, size_lg, size_xl} from 'react-native-responsive-surender';

const App = ()= > {
  return (
    <View style={{fontSize: size_xl(16)}}>
      <Text>Hello World!</Text>
    </View>
  );
};
```



