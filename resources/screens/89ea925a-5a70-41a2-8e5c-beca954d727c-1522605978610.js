jQuery("#simulation")
  .on("click", ".s-89ea925a-5a70-41a2-8e5c-beca954d727c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "changeavatar" ],
                    "value": "black"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f45c19d5-ebea-4db7-af81-9f5d92e28688"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_3" ]
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tick" ]
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
    } else if(jFirer.is("#s-Label_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/717f4c1d-6afd-4b0e-b55a-8fc9487b5bad"
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
    } else if(jFirer.is("#s-Label_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/717f4c1d-6afd-4b0e-b55a-8fc9487b5bad"
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ]
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tick_1" ]
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/b915fdac-647f-4bae-b19c-fc623a7e2746.jpg')"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/b915fdac-647f-4bae-b19c-fc623a7e2746.jpg') no-repeat center center scroll transparent",
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/293730db-bedc-4be4-a183-284cc9f28ac8.jpg')"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/293730db-bedc-4be4-a183-284cc9f28ac8.jpg') no-repeat center center scroll transparent",
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
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tick_2" ]
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/a360f862-46b0-4113-882f-971bf3fb75d0.jpg')"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/a360f862-46b0-4113-882f-971bf3fb75d0.jpg') no-repeat center center scroll transparent",
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f99dcf4-418d-44e7-85b7-464077f3c9e3"
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
  .on("pageload", ".s-89ea925a-5a70-41a2-8e5c-beca954d727c .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-tick")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tick" ]
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
    } else if(jFirer.is("#s-tick_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tick_1" ]
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
    } else if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/ec3a4700-8074-4fd6-a33d-0d288c214077.jpg')"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Panel_1": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ec3a4700-8074-4fd6-a33d-0d288c214077.jpg') no-repeat center center scroll transparent",
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
    } else if(jFirer.is("#s-tick_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tick_2" ]
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
  .on("mouseenter dragenter", ".s-89ea925a-5a70-41a2-8e5c-beca954d727c .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_55") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Label_55": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Label_55": {
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
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#F5F5F5",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_3": {
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
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#F5F5F5",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_6": {
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
    } else if(jFirer.is("#s-Label_56") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Label_56": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Label_56": {
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
    } else if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#F5F5F5",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_12": {
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
    } else if(jFirer.is("#s-Rectangle_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#AA0719",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89ea925a-5a70-41a2-8e5c-beca954d727c #s-Rectangle_13": {
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
  .on("mouseleave dragleave", ".s-89ea925a-5a70-41a2-8e5c-beca954d727c .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_55")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_56")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_13")) {
      jEvent.undoCases(jFirer);
    }
  });