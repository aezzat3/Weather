import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {AppText} from '../AppText';
import PropTypes from 'prop-types';
import styles from './styles';
import {useSafeArea} from 'react-native-safe-area-context';
import {calcHeight} from '../../../utils';

let Button = ({
  title,
  isBottom,
  style,
  titleStyle,
  onPress,
  loading,
  disabled,
  left,
  right,
  ...props
}) => {
  const {bottom} = useSafeArea();
  const buttonHeight = {height: calcHeight(60) + bottom / 2};
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.disabledStyle,
    isBottom && [styles.bottomButton, buttonHeight],
    (right || left) && [styles.horizontalButton],
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
      {...props}>
      {left}
      {loading ? (
        <ActivityIndicator size={25} color={'#FFF'} />
      ) : (
        <AppText style={[styles.text, titleStyle]}>{title}</AppText>
      )}
      {right}
    </TouchableOpacity>
  );
};

Button = React.memo(Button);
export {Button};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  isBottom: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
  left: PropTypes.node,
  right: PropTypes.node,
  loading: PropTypes.bool,
};
