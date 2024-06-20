# react-native-responsive-surender
An npm package for responsive your react native app

# Install this Package
```install
npm i react-native-responsive-surender
```

It will automatically make Responsive fontSize, heigh, width according to devcice width

```javascript
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

```javascript
import {screenWidth, screenHeight} from 'react-native-responsive-surender';


const App = ()= > {
  return (
    <View style={{height: screenHeight, width: screenWidth}}>
      <Text>Hello World!</Text>
    </View>
  );
};
```


