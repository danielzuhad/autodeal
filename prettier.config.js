module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  // The number of characters in a line, if it exceeds, a line break will be performed, the default is 80
  printWidth: 80,
  // A tab represents the number of spaces, the default is 80
  tabWidth: 2,
  // Whether to use tabs for indentation, the default is false, which means to use spaces for indentation
  useTabs: false,
  // Whether the string uses single quotes, the default is false, use double quotes
  singleQuote: false,
  // Whether to use a semicolon in the line position, the default is true
  semi: false,
  // Whether to use a trailing comma, there are three optional values"<none|es5|all>"
  trailingComma: 'none',
  // Whether there is a space directly between the curly braces of the object, the default is true, the effect:{ foo: bar }
  bracketSpacing: true
}
