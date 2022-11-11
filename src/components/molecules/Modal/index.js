import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import OriginalModal from 'react-native-modal';
import styles from './styles';

function Modal({children, visible, closeModal, contentStyle, modalStyle}) {
  return (
    <OriginalModal
      style={[styles.modal, modalStyle]}
      isVisible={visible}
      backdropOpacity={0.6}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View style={[styles.contentModal, contentStyle]}>{children}</View>
    </OriginalModal>
  );
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export {Modal};
