jQuery("#simulation")
  .on("click", ".s-c2900f68-2eee-4a4a-887e-18d4350b57a9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-createNewAccountLabel")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/de87dbe0-3b97-476f-b839-5e1df7925879"
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
    } else if(jFirer.is("#s-continueButton")) {
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
                    "variable": [ "logincontrol-email" ],
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField input": {
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
                    "variable": [ "logincontrol-password" ],
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC0D1B",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FC0D1B",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FC0D1B",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FC0D1B",
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField input": {
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
                    "element": "logincontrol-email"
                  },"OK" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "logincontrol-password"
                  },"OK" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/219bd522-6ce7-43b6-9c64-d61dbc0f50f6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-EmailField input": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField input": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField": {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "14.0pt"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-PasswordField input": {
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
  .on("mouseenter dragenter", ".s-c2900f68-2eee-4a4a-887e-18d4350b57a9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-createNewAccountLabel") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-createNewAccountLabel": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-createNewAccountLabel .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-createNewAccountLabel span": {
                      "attributes": {
                        "color": "#8A8A8A",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#s-continueButton") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-continueButton": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c2900f68-2eee-4a4a-887e-18d4350b57a9 #s-continueButton": {
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
  .on("mouseleave dragleave", ".s-c2900f68-2eee-4a4a-887e-18d4350b57a9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-createNewAccountLabel")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-continueButton")) {
      jEvent.undoCases(jFirer);
    }
  });