jQuery("#simulation")
  .on("click", ".t-2fb3a813-ea34-4449-a122-67d14589726a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-ViewLook_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/209b7019-5434-4cad-b3f4-d3ff85fd2f31"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-WardRobe_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-logoutLabel")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c2900f68-2eee-4a4a-887e-18d4350b57a9"
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
  .on("pageload", ".t-2fb3a813-ea34-4449-a122-67d14589726a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-2fb3a813-ea34-4449-a122-67d14589726a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1 span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#t-ViewLook_Button") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-ViewLook_Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#t-WardRobe_Button") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-WardRobe_Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#t-logoutLabel") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-logoutLabel": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#t-2fb3a813-ea34-4449-a122-67d14589726a #t-logoutLabel": {
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
  .on("mouseleave dragleave", ".t-2fb3a813-ea34-4449-a122-67d14589726a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-ViewLook_Button")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-WardRobe_Button")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-logoutLabel")) {
      jEvent.undoCases(jFirer);
    }
  });