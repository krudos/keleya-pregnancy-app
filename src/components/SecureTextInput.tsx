import React, {forwardRef, useCallback, useState} from 'react';
import {TextInput} from 'react-native-paper';

interface Props {}
export const SecureTextInput = forwardRef<typeof TextInput, Props>(
  (props, ref) => {
    const [showText, setShowText] = useState(true);

    const toggleTextSecurity = useCallback(
      () => setShowText(!showText),
      [setShowText, showText],
    );
    const icon = showText ? 'eye' : 'eye-slash';
    return (
      <TextInput
        ref={ref}
        {...props}
        secureTextEntry={showText}
        right={props => (
          <TextInput.Icon name={icon} onPress={toggleTextSecurity} {...props} />
        )}>
        {props.children}
      </TextInput>
    );
  },
);
