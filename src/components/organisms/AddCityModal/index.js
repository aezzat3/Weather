import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {AppInput, Button} from '../../atom';
import {Modal} from '../../molecules/Modal';
import styles from './styles';
import {useFormik} from 'formik';
import validationSchema from './validationSchema';

let AddCityModal = ({
  onPressClose,
  visible,
  onPressConfirm,
  editable,
  onPressCancel,
}) => {
  const {values, handleChange, handleSubmit, errors, isValid} = useFormik({
    initialValues: {
      cityName: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    initialErrors: {},
    onSubmit: values => onSubmit(values),
  });

  const onSubmit = item => {
    onPressConfirm(item?.cityName);
  };
  return (
    <Modal closeModal={onPressClose} visible={visible}>
      <View style={styles.modalContent}>
        <AppInput
          editable={editable}
          value={values.cityName}
          label={'Add new city'}
          onChangeText={handleChange('cityName')}
          error={errors.cityName}
        />
        <View style={styles.content}>
          <Button
            style={styles.btnTitleStyle}
            title={'Cancel'}
            onPress={onPressCancel}
          />
          <Button
            style={styles.btnTitleStyle}
            title={'Add'}
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </View>
      </View>
    </Modal>
  );
};

AddCityModal.propTypes = {
  onPressClose: PropTypes.func,
  onPressConfirm: PropTypes.func,
  visible: PropTypes.bool,
};
AddCityModal = React.memo(AddCityModal);
export {AddCityModal};
