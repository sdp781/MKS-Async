# Async

## Introduction
This app will change the world asynchronously!

# Task
1. landing page, index.html, main search
1. login/signup page, oauth, user vs provider, email validation
1. images, mlab database
1. host heroku, testing
1. booking (need login), shopping cart, local storage,
1. api calendar, contact info, payment
1.

# MEAN stack

1. angular, bootstrap
1. node/express
1. mongo/postgres
1. travis-ci, mocha/chai
1. heroku, grunt

## Reference
1. https://www.npmjs.com/package/angular-material
1. https://docs.travis-ci.com/user/languages/javascript-with-nodejs/

# Misc

## Git Flow Example
0. github fork
1. git pull --rebase upstream master
2. git checkout -b <branch>
3. git pull --rebase upstream master
4. git push origin <branch>

- git log --graph --oneline --decorate

##Git Commit Message Template
<type>(<scope>): <subject>

Allowed <type> values:
feat -(new feature for the user, not a new feature for build script)
fix - (bug fix for the user, not a fix to a build script)
docs - (changes to the documentation)
style - (formatting, missing semi colons, etc; no production code change)
refactor - (refactoring production code, eg. renaming a variable)
test - (adding missing tests, refactoring tests; no production code change)
chore - (updating grunt tasks etc; no production code change)

Example <scope> values:
init
runner
web-client
web-server
db
etc

git commit -m "feat(web-client): add new signup page"
git commit -m "fix(web-server): server connecting to heroku correctly"

## Meeting Aug 25, 2016
- login, dialog
- eslint
- git, commit message

## database
- http://dbdesigner.net/designer/schema/45235
- picture of the schema in server/models.png
- json-server, localhost (mongod), and mlab 
