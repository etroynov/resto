/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IMenuReducerState = {
  loading: false,
  selected: ['0'],
  data: [{
    _id: 0,
    title: 'Рабочий стол',
    href: '/',
    icon: 'dashboard',
  }, {
    _id: 1,
    title: 'Страницы',
    href: '/pages',
    icon: 'file-text',
  }, {
    _id: 2,
    title: 'Категории',
    href: '/categories',
    icon: 'book',
  }, {
    _id: 3,
    title: 'Заведения',
    href: '/organizations',
    icon: 'book',
  }, {
    _id: 4,
    title: 'Пользователи',
    href: '/users',
    icon: 'idcard',
  }, {
    _id: 5,
    title: 'Новости',
    href: '/news',
    icon: 'profile',
  }, {
    _id: 6,
    title: 'Настройки',
    href: '/settings',
    icon: 'tool',
  }],
};

/*!
 * Actions
 */

import {
  menuSelectItem,
} from '../actions/menuActions';

/*!
 * Expo
 */

const menuReducer = createReducer(
  {
    // List course
    [menuSelectItem]: (state: IReducerState, { key }) => ({ ...state, selected: [key] }),
  },
  initialState,
);

export default menuReducer as any;
