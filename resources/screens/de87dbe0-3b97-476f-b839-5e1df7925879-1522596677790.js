jQuery("#simulation")
  .on("click", ".s-de87dbe0-3b97-476f-b839-5e1df7925879 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-signUpButton")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-EmailField",
                  "property": "jimGetValue"
                },"michael2018@hotmail.com" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "signupcontrol-email" ],
                    "value": "OK"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC363B",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FC363B",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FC363B",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FC363B",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField input": {
                      "attributes": {
                        "color": "#FC363B",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Callout_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-PasswordField",
                  "property": "jimGetValue"
                },"michael2018" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "signupcontrol-password" ],
                    "value": "OK"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC363B",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FC363B",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FC363B",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FC363B",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField input": {
                      "attributes": {
                        "color": "#FC0F3B",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "signupcontrol-email"
                  },"OK" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "signupcontrol-password"
                  },"OK" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8c596d05-55dd-467b-9d4c-ad80b9e3e8a7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-ConfirmPasswordField",
                  "property": "jimGetValue"
                },"michael2018" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "signupcontrol-confirmpassword" ],
                    "value": "OK"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC363B",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FC363B",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FC363B",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FC363B",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField input": {
                      "attributes": {
                        "color": "#FC363B",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-EmailField")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-EmailField input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Callout_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-PasswordField")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-PasswordField input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Callout_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ConfirmPasswordField")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(270 - 1 - 1 - 8 - 3, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-ConfirmPasswordField input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Callout_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-de87dbe0-3b97-476f-b839-5e1df7925879 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-signUpButton") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-signUpButton": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-de87dbe0-3b97-476f-b839-5e1df7925879 #s-signUpButton": {
                      "attributes-ie": {
                        "-pie-background": "#AA0719",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-de87dbe0-3b97-476f-b839-5e1df7925879 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-signUpButton")) {
      jEvent.undoCases(jFirer);
    }
  });