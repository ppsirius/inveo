export const initialState = {
  language: 'pl',
  mobileMenuActive: false,
  socialMenuActive: false
};

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'
const TOGGLE_SOCIAL_MENU = 'TOGGLE_SOCIAL_MENU'

export const actions = {
  CHANGE_LANGUAGE,
  TOGGLE_MOBILE_MENU,
  TOGGLE_SOCIAL_MENU
}

export const changeLanguage = (lang) => ({ type: CHANGE_LANGUAGE, payload: lang });

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload
      })
    case TOGGLE_MOBILE_MENU:
      return Object.assign({}, state, {
        mobileMenuActive: !state.mobileMenuActive
      })
    case TOGGLE_SOCIAL_MENU:
      return Object.assign({}, state, {
        socialMenuActive: !state.socialMenuActive
      })
    default:
      return state
  }
};