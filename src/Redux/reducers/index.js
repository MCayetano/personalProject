import {combineReducers} from 'redux'

import user from './user';
import auto from './auto';
import commercial from './commercial';
import home from './home';

export default combineReducers({ user, auto, commercial, home })