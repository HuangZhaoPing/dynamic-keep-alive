module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'selector-class-pattern': null,
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] }
    ]
  }
}
