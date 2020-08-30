import Styles from '~/assets/styles/_variables.scss'
export const state = () => ({
  variables: {...Styles}
})
export const getters= ()=>({
  // ...
  getVariableByName: (state) => (variableName) => {
    return state.variables[variableName];
  }
})
