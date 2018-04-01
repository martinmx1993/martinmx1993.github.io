jQuery("#simulation")
  .on("click", ".t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-saveLook")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-saveLook" ]
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
                    "target": [ "#t-tick" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#t-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Rectangle_12": {
                      "attributes": {
                        "background-color": "#2D2D2D",
                        "background-image": "none",
                        "line-height": "30px",
                        "font-size": "16.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Rectangle_12 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "16.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#2D2D2D",
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
  .on("pageload", ".t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-tick")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-tick" ]
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
  .on("mouseenter dragenter", ".t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "20.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_2 span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "20.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_2": {
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
    } else if(jFirer.is("#t-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "20.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_5 span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "20.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_5": {
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
    } else if(jFirer.is("#t-Button_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "20.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_6 span": {
                      "attributes": {
                        "color": "#2D2D2D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "20.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 #t-Button_6": {
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
    }
  })
  .on("mouseleave dragleave", ".t-1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Button_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Button_6")) {
      jEvent.undoCases(jFirer);
    }
  });