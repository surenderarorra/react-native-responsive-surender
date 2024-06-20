# react-native-responsive-surender
An npm package for responsive your react native app

```javascript
import {size} from 'react-native-responsive-surender';

interface HeaderBarProps {
  title?: string;
}

const App = ()= > {
  return (
    <View style={{fontSize: size(16)}}>
      <Text>Hello World!</Text>
    </View>
  );
};

