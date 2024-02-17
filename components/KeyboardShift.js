import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  findNodeHandle
} from "react-native";

const KeyboardShift = ({ children }) => {
  const shift = useRef(new Animated.Value(0)).current;
  const [focusedInput, setFocusedInput] = useState(null); // State to track the currently focused TextInput

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (event) =>
      handleKeyboardDidShow(event, focusedInput)
    );
    const hideSub = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [focusedInput]); // Depend on focusedInput to re-register listeners when it changes

  const handleKeyboardDidShow = (event, focusedInputRef) => {
    if (!focusedInputRef) return;

    const { height: windowHeight } = Dimensions.get("window");
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = findNodeHandle(focusedInputRef);

    if (currentlyFocusedField) {
      focusedInputRef.measureInWindow((x, y, width, height) => {
        const fieldHeight = height;
        const fieldTop = y;
        const { height: windowHeight } = Dimensions.get("window");
        const keyboardHeight = event.endCoordinates.height;
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(shift, {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const handleKeyboardDidHide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ translateY: shift }] }]}>
      {children()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

KeyboardShift.propTypes = {
  children: PropTypes.func.isRequired,
};

export default KeyboardShift;