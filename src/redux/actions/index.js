import * as auth from './auth';
import * as home from './home';
import * as common from './common';
import * as switchTheme from './themeAction';

export default {
    ...auth,
     ...home,
     ...common,
     ...switchTheme,
};
