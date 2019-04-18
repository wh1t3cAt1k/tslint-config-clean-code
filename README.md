# tslint-config-clean-code

An opinionated TSLint configuration for enforcing clean code and avoiding hard-to-debug errors

# Choices

## Single automatic code formatting

We consciously disable rules related to whitespace, indents, etc. and recommend using [`Prettier`](https://prettier.io/docs/en/install.html) instead, as a complementary tool to your linter. Having wasted numerous workdays bickering about minor formatting issues, this is the only sane choice for all projects, in our opinion.