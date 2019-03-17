import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../../assets/signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('../../assets/signup.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  // root: {
  //   stack: {
  //     id: 'App',
  //     children: [
  //       {
  //         component: {
  //           name: 'Home',
  //         }
  //       }
  //   ],
  //   }
  // }
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      icon: require('../../assets/icons/ic_nav_user.png'),
                      color: 'black'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../../assets/icons/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../../assets/icons/ic_tab_home.png'),
              testID: 'FIRST_TAB_BAR_BUTTON',
              text: 'Home',
            }
          }
        }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'Screen2',
              options: {
                topBar: {
                  title: {
                    text: 'Schedule'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      icon: require('../../assets/icons/ic_nav_user.png'),
                      color: 'black'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../../assets/icons/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../../assets/icons/ic_nav_calendar.png'),
              testID: 'SECOND_TAB_BAR_BUTTON',
              text: 'Schedule',
            }
          }
        }
      },{
        stack: {
          children: [{
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'TAB 1'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      icon: require('../../assets/icons/ic_nav_user.png'),
                      color: 'black'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../../assets/icons/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../../assets/icons/ic_nav_creative.png'),
              testID: 'FIRST_TAB_BAR_BUTTON',
              text: 'Tab1',
            }
          }
        }
      },{
        stack: {
          children: [{
            component: {
              name: 'Menu',
              options: {
                topBar: {
                  title: {
                    text: 'Menu'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      icon: require('../../assets/icons/ic_nav_user.png'),
                      color: 'black'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('../../assets/icons/ic_nav_logout.png'),
                      color: 'black'
                    }
                  ]
                }
              }
            }
          }],
          options: {
            bottomTab: {
              icon: require('../../assets/icons/ic_tab_menu.png'),
              testID: 'FIRST_TAB_BAR_BUTTON',
              text: 'Menu',
            }
          }
        }
      }]
    }
  }
})