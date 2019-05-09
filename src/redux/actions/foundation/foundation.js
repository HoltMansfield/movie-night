/* eslint import/prefer-default-export: "off" */
export const setLoggedInUser = loggedInUser => (
  {
    type: 'SET_USER',
    loggedInUser
  }
)

export const setSelectedLanguage = selectedLanguage => (
  {
    type: 'SET_SELECTED_LANGUAGE',
    selectedLanguage
  }
)

// show and hide the spinner
export const setShowSpinner = newSpinnerState => (
  {
    type: 'SET_SHOW_SPINNER',
    newSpinnerState
  }
)

// show and hide the overlay
export const setShowOverlay = newOverlayState => (
  {
    type: 'SET_SHOW_OVERLAY',
    newOverlayState
  }
)
