# 4.0.1

Removed the `no-unused-variable` rule as it is deprecated.

# 4.0.0

Disabled unused imports, variables, functions, and private class members, using `no-unused-variable` rule.

Rationale: `tsc`'s equivalent `--noUnusedParameters` and `--noUnusedLocals` options are an obligatory compilation failure that cannot be controlled even via `exclude` as long as those files are used by "included" code.

So, e.g. for auto-generated API code or external copy-pasted forks, our users would like to control this behaviour via a linter instead, ignoring failures as needed.

# 3.0.1

Disabled arguments alignment linting as it should be handled by Prettier.

# 3.0.0

Enforced consistent usage of type casts: `as Foo` instead of `<Foo>`.

# 2.2.1

Relaxed the requirement for type aliases naming convention. Non-strict PascalCase is now allowed. 

Rationale: interface type aliases where you would like to preserve the 'I' variable in front of the.
# 2.1.0

Bugfix: disabled `newline-per-chained-call` rule as it should be handled by Prettier.

# 2.0.0

Breaking changes:

1. We now recommend [`Prettier`](https://prettier.io/docs/en/install.html) for all your code formatting. The rules related to whitespace, indents, etc. have all been disabled.
2. [`no-arrow-functions](https://palantir.github.io/tslint/rules/only-arrow-functions/) is now enabled to ensure that `this` is always properly bound.

# 1.1.0

Breaking change: extended [`tslint-no-circular-imports`](https://www.npmjs.com/package/tslint-no-circular-imports) configuration.
