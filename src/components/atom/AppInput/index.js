import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../common';
import PropTypes from 'prop-types';
import {AppText} from '../AppText';

let AppInput = ({
  inputRef,
  label,
  error,
  value,
  containerStyle,
  inputStyle,
  onChangeText,
  editable,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <AppText style={styles.labelStyle}>{label}</AppText>}
      <TextInput
        editable={editable}
        ref={inputRef}
        style={[styles.input, error && styles.errorStyle, inputStyle]}
        placeholderTextColor={COLORS.coolGrey}
        underlineColorAndroid={'transparent'}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {error && (
        <AppText style={styles.errorText} numberOfLines={1}>
          {error}
        </AppText>
      )}
    </View>
  );
};

AppInput = React.memo(AppInput);
export {AppInput};

AppInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  inputRef: PropTypes.any,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};
