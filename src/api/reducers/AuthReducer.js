const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN_INIT':
      return {
        ...state,
        isError: false,
        isLoading: true,
        errorMessage: false,
        token: null,
        user: null,
      }
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isError: false,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      }
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: "Echec de l'authentification.",
        token: null,
        user: null,
      }

    case 'SIGN_UP_INIT':
      return {
        ...state,
        isError: false,
        isLoading: true,
        errorMessage: false,
        token: null,
        user: null,
      }
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        isError: false,
        isLoading: false,
        // token: action.payload.token,
        user: action.payload.user,
      }
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: 'Erreur lors de la création du profil.',
        token: null,
        user: null,
      }

    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
        user: null,
      }

    case 'RESTORE_USER_INIT':
      return {
        ...state,
        token: null,
        user: null,
      }
    case 'RESTORE_USER_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      }
    case 'RESTORE_USER_ERROR':
      return {
        ...state,
        token: null,
        user: null,
      }

    case 'EXPO_PUSH_TOKEN_SUCCESS':
      return {
        ...state,
        expoPushToken: action.payload.expoPushToken,
      }

    case 'NOTIFICATION_SUCCESS':
      return {
        ...state,
        notification: action.payload.notification,
      }

    case 'CLEAR_ERRORS':
      return {
        ...state,
        isError: false,
        errorMessage: null,
      }

    default:
      return state
  }
}

export default AuthReducer
