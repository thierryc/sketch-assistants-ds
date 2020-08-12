# TODO: Would like to use `tsc --build` or `yarn workspaces run build` in the
# monorepo root here but `@sketch-hq/sketch-core-assistant` needs to be built
# using Babel since LinguiJS uses Babel Macros. That means we can't rely on
# TypeScript Project References to sort out the build order 100% across the
# monorepo, and it needs to be defined manually here - i.e. ensure the core
# rules assistant is built before packages that depend on it.
# Solution: implement an i18n approach in the core assistant that doesn't
# introduce a requirement to build its TypeScript with Babel.

# ref: https://github.com/sketch-hq/sketch-assistants/blob/main/build.sh

set -e

yarn workspace @ap.cx/sketch-assistant-colors run build