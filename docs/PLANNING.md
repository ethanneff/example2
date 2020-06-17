# Planning

## Top goals

- [ ] Deploy Android app
  - [ ] login flow
  - [ ] activity
  - [ ] deploy android
- [ ] Deploy iOS app
- [ ] Publish landing page
- [ ] Obtain 10 users
- [ ] Question users

## Actionables

| action                                                                                            | type         | impact | complexity |
| ------------------------------------------------------------------------------------------------- | ------------ | :----: | :--------: |
| hourly update                                                                                     | core         |   5    |     5      |
| login                                                                                             | core         |   5    |     1      |
| signup                                                                                            | core         |   5    |     1      |
| codepush                                                                                          |              |   1    |     5      |
| app center deploy                                                                                 |              |   1    |     5      |
| firebase backend                                                                                  | core         |   5    |     5      |
| landing page                                                                                      | core         |   2    |     3      |
| automatic deploys                                                                                 |              |        |            |
| swipe                                                                                             | fun          |        |            |
| slack                                                                                             | fun          |        |            |
| remove dayjs                                                                                      | debt         |        |            |
| stripe                                                                                            | money        |        |            |
| google abmob                                                                                      | money        |        |            |
| facebook ads                                                                                      | money        |        |            |
| nps                                                                                               | feedback     |        |            |
| review app                                                                                        | feedback     |        |            |
| email landing                                                                                     | feedback     |        |            |
| deeplink                                                                                          | reach        |        |            |
| push notifications                                                                                | reach        |        |            |
| local notifications                                                                               | reach        |        |            |
| text me the app                                                                                   | reach        |        |            |
| referrals                                                                                         | reach        |        |            |
| error boundary                                                                                    | core         |   5    |     1      |
| storybook                                                                                         |              |        |            |
| auto update dependency                                                                            |              |        |            |
| splitwise                                                                                         |              |        |            |
| [snoopy profiling](https://github.com/jondot/rn-snoopy)                                           |              |        |            |
| [deploy rollback](https://eng.uber.com/ubereats-react-native/)                                    |              |        |            |
| [chat datamodels](https://www.youtube.com/watch?v=m_u6P5k0vP0&feature=share)                      |              |        |            |
| each app landing page                                                                             |              |        |            |
| [badges](https://www.youtube.com/watch?v=4-s1qoADXok)                                             | gamification |        |            |
| [points](https://www.youtube.com/watch?v=i-08jn0VP-A) (teamtreehouse, khanacadamey, codeacadamey) | gamification |        |            |
| leader boards                                                                                     | gamification |        |            |
| spend points (gifts, subscription)                                                                | gamification |        |            |
| daily rewards                                                                                     | gamification |        |            |
| [basketball](https://github.com/FaridSafi/react-native-basketball)                                | game         |        |            |
| [flappybird](https://github.com/GeekyAnts/FlappyBird-ReactNative)                                 | game         |        |            |
| snake                                                                                             | game         |        |            |
| papi jump                                                                                         | game         |        |            |
| drift get bigger and faster                                                                       | game         |        |            |
| hourly update                                                                                     | app          |        |            |
| checklist                                                                                         | app          |        |            |
| todo                                                                                              | app          |        |            |
| cant hurt me                                                                                      | app          |        |            |
| portfolio                                                                                         | app          |        |            |
| journal                                                                                           | app          |        |            |
| one page notes                                                                                    | app          |        |            |
| questionnaires                                                                                    | feature      |        |            |
| chat                                                                                              | feature      |        |            |
| markdown                                                                                          | feature      |        |            |

## Resources

- [ ] main landing page https://www.lemonade.com/ https://www.any.do/ https://i.imgur.com/e4svRwy.png https://evernote.com/ https://telegram.org/ https://lyft.com http://www.shegy.nazwa.pl/materialupmarket/mdlp/index_light.html https://ifttt.com/

## Done

- [x] `{showReview && <Review onComplete />`
- [x] install accelerator
- [x] fix ios build (pods)
- [x] backup google drive offline
- [x] rename app to playground
- [x] debug menu
- [x] dark mode
- [x] fix build (web) (@react-native-community/netinfo)
- [x] revive focus
- [x] cant hurt me dialog
- [x] use net info
- [x] make ios work
- [x] fix tests
- [x] deploy ios
- [x] update docs dependencies
- [x] run on android
- [x] push code
- [x] remove react-native-version-number for updated react-native-device-info
- [x] code splitting by screen
- [x] error boundary
- [x] redux offline
- [x] dynamic import screens
- [x] remove moment.js
- [x] cant hurt me modals like focus
- [x] fix pinch spread
- [x] fix dark mode card size
- [x] icons for web
- [x] set metro.config to `true` without crashing because of `react-native-vector-icons`
- [x] ~~relay~~
- [x] ~~[styled components](https://github.com/styled-components/styled-components)~~
- [x] vscode (editor)
- [x] remote-redux-devtools
- [x] [typescript](https://medium.com/@rintoj/
- [x] ~~[storybook](https://github.com/storybooks/storybook/tree/master/app/react-native) (component builder)~~
- [x] [duck or duck++](https://github.com/erikras/ducks-modular-redux) (redux management)
- [x] ~~[react-native-interactable](https://github.com/wix/react-native-interactable) (native animations)~~
- [x] ~~[redux injectors](http://nicolasgallagher.com/redux-modules-and-code-splitting/)~~
- [x] add error boundary in app and show error alert
- [x] remove `@babel/plugin-transform-object-assign` dependency when updating `react` `react-dom` or `react-test-renderer`
- [x] remove `YellowBox` warning after upgrading react native to 0.59.5+
- [x] prevent `Trace: The node type SpreadProperty has been renamed to SpreadElement` in app center build
- [x] ~~airbnb lint~~
- [x] prettier lint
- [x] github ci
- [x] deploy ci
- [x] jest
- [x] codecov
- [x] dependency check
- [x] change log
- [x] commit restriction
- [x] main tableview
- [x] main navigation
- [x] main counter
- [x] main app statusbar
- [x] fix stopwatch
- [x] logout clear everything
- [x] attempt icons again
- [x] useRootSelector
- [x] darkmode
- [x] fix test because of hooks
- [x] useRootDispatch
- [x] finish redux for user (async typeactions)
- [x] hook up auth to sign in flow
- [x] add tests to auth
- [x] clean up navigation layer
- [x] fix checklists and canthurtme
- [x] push v2 fix
- [x] move all code to /app
- [x] move modals to /screen
- [x] remove modal1 and modal2
- [x] get ci working again
- [x] create a root initial state for redux tests
- [x] figure out auto import relative pathing
- [x] clean up debug index screen
- [x] add keyboard listener to device
- [x] convert other reduxes to new syntax
- [x] fix web for device-info and version-number
- [x] complete device tests for 100% test coverage
- [x] checklist redux
- [x] clean all branches
- [x] clean up all todos
- [x] remove react-scripts-ts without breaking yarn lint
- [x] attempt to replace react-scripts-ts with react-scripts without breaking ci or app center ci
- [x] update to react native 0.59
- [x] infinite scroll image collection
- [x] fix broken ci
- [x] look into [react navigation for web](https://github.com/react-navigation/example-web)
- [x] update to react native 58
- [x] validate commit messages work
- [x] make redux clean
- [x] update dependencies with new redux tools
- [x] figure out why not releasing
- [x] get semantic release and changelog working
- [x] make nav buttons larger
- [x] button icon color
- [x] pull in button and text update
- [x] remove icon && <Component>
- [x] add button colors
- [x] figure out release
- [x] add ios push notifications config
- [x] successful ios archive
- [x] go though all dependencies and move them to contributing
- [x] push ios bundle to itunes
- [x] add icons and splash screens
- [x] increase coverage threshold and add coverall pr report
- [x] fix github ci
- [x] prevent travis from running 2 builds on pr
- [x] rename android to com.eneff.example
- [x] update create-react-app v2 (waiting on template PR)
- [x] add app center
- [x] add firebase native
- [x] figure out mock store
- [x] add tests to all files
- [x] upgrade to react native 0.57
- [x] add explosion to debug
- [x] confirm timestamp from done list
- [x] test debugger
- [x] add debug drag ball
- [x] add precommit commitmsg
- [x] clean up router to use classes, nest auth, next route
- [x] create debug screen with everything
- [x] add text sizing
- [x] keyboard dismiss prevents horizontal scroll
- [x] keyboard avoid prevents flex
- [x] add keyboard dismiss
- [x] add slide
- [x] test deinit nav
- [x] add icon native dependencies