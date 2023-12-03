module.exports = {
  extends: ["@hh.ru/stylelint-config-hh"],
  //plugins: ['stylelint-prettier'],
  rules: {
    "declaration-property-value-disallowed-list": null,
    "declaration-property-value-allowed-list": null,
  },
  ignoreFiles: ["dist/*"],
};
