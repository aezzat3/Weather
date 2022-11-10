import { Platform } from 'react-native';

export const ICONS = {
  phone: 'phone',
  menu: 'menu',
  check: 'check-circle',
  unCheck: 'checkbox-blank-circle-outline',
  upload: 'upload',
  checkbox_marked: 'checkbox-marked',
  checkbox_blank_outline: 'checkbox-blank-outline',
  radiobox_blank: 'radiobox-blank',
  radiobox_marked: 'radiobox-marked',
  chevron_right: 'chevron-right',
  chevron_left: 'chevron-left',
  chevron_down: 'chevron-down',
  chevron_up: 'chevron-up',
  star: 'star',
  heart_outline: 'heart-outline',
  heart: 'heart',
  content_copy: 'content-copy',
  fire: 'fire',
  shopping: 'shopping',
  location: 'map-marker-outline',
  cell_phone: 'cellphone-iphone',
  share: 'share',

  /** HOME TABS */
  home: 'home',
  message: 'message',
  account: 'account',
  file_document: 'file-document',

  arrowDown: 'chevron-down',
  arrowUp: 'chevron-up',
  search: 'magnify',
  leftArrow: 'chevron-left',
  rightArrow: 'chevron-right',
  notifications: 'bell-outline',
  filter: 'filter',

  back: Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left',
  close: 'close',
  right: 'check',
  calendar_range: 'calendar-range',

  // order
  mapPin: 'map-marker-outline',
  mobile: 'cellphone-android',
  chat: 'chat',
  call: 'phone',
  close_circle: 'close-circle',
  check_circle: 'check-circle',

  /** DRAWER ICONS */
  wallet: 'wallet',
  settings: 'cog',
  chat_processing: 'chat-processing',
  credit_card: 'credit-card',
  text_box: 'text-box',
  logout: 'logout',
};
