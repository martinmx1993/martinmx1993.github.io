jQuery("#simulation")
  .on("click", ".s-c3168d83-faae-4b67-b82a-970509210594 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-shoes")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "shoes" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoes": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoes": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-btm2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm2" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm1" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm2": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm2": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-btm1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm1" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm2" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-top2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top2" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top1" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top2": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top2": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-top1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top1" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top2" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Rectangle_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top2" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top1" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_102": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_102": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_105": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_105": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Rectangle_105")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top1" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_105": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_105": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top2" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_102": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_102": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Rectangle_106")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm2" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm1" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_106": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_106": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_109": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Rectangle_109")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm1" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_109": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm2" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_106": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_106": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Rectangle_135")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "shoes" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_135": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Rectangle_135": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-allfilter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-all" ]
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
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
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
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
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
    } else if(jFirer.is("#s-topsFilter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tops" ]
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
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
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
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
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
    } else if(jFirer.is("#s-pantsFilter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-pants" ]
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
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
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
    } else if(jFirer.is("#s-shoesFilter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-topsFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-pantsFilter": {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-shoesPanel" ]
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
    } else if(jFirer.is("#s-zoomOut")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "100"
                    },
                    "height": {
                      "type": "percentage",
                      "value": "100"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-zoomOut" ]
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
                    "target": [ "#s-zoomIn" ]
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
    } else if(jFirer.is("#s-zoomIn")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "200"
                    },
                    "height": {
                      "type": "percentage",
                      "value": "200"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-zoomIn" ]
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
                    "target": [ "#s-zoomOut" ]
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
    } else if(jFirer.is("#s-saveLook")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-saveLook" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
    } else if(jFirer.is("#s-Rectangle_1")) {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-c3168d83-faae-4b67-b82a-970509210594 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Container" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Container" ],
                    "parent": "#s-Panel_1"
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
  .on("dragend", ".s-c3168d83-faae-4b67-b82a-970509210594 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-c3168d83-faae-4b67-b82a-970509210594 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-c3168d83-faae-4b67-b82a-970509210594 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/2ffe6dfb-d1e4-430b-8c5a-4c6ed4ca7fd3.jpg')"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/2ffe6dfb-d1e4-430b-8c5a-4c6ed4ca7fd3.jpg') no-repeat center center scroll transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-totalPrice_1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-top1",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-btm1",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-shoes",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-top1": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-btm1": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoes": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-shoes": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "dashed",
                        "border-top-color": "#666666",
                        "border-right-width": "3px",
                        "border-right-style": "dashed",
                        "border-right-color": "#666666",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "dashed",
                        "border-bottom-color": "#666666",
                        "border-left-width": "3px",
                        "border-left-style": "dashed",
                        "border-left-color": "#666666",
                        "border-radius": "0px 0px 0px 0px"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "shoes" ],
                    "value": "1"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "top1" ],
                    "value": "1"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "btm1" ],
                    "value": "1"
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
    } else if(jFirer.is("#s-allfilter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Leelawadee UI',Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-all" ]
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
    } else if(jFirer.is("#s-zoomOut")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-zoomOut" ]
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
    } else if(jFirer.is("#s-tick")) {
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
    }
  })
  .on("variablechange.jim", ".s-c3168d83-faae-4b67-b82a-970509210594 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "btm1"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "top1"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/37977df9-807f-4c93-9de7-802f62a48fc5.jpg')"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/37977df9-807f-4c93-9de7-802f62a48fc5.jpg') no-repeat center center scroll transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-totalPrice_1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-top1",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-btm1",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-shoes",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-saveLook" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "btm2"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "top1"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/dffe9408-2141-4dd0-9e82-892c7ee32c1f.jpg')"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/dffe9408-2141-4dd0-9e82-892c7ee32c1f.jpg') no-repeat center center scroll transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-totalPrice_1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-top1",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-btm2",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-shoes",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-saveLook" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "btm1"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "top2"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/965b41dc-6e0e-4f5b-bcb6-c7a135e17c3d.jpg')"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/965b41dc-6e0e-4f5b-bcb6-c7a135e17c3d.jpg') no-repeat center center scroll transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-totalPrice_1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-top2",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-btm1",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-shoes",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-saveLook" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "btm2"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "top2"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/013edb90-fb45-4c32-a4b5-39ac9007ee38.jpg')"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-c3168d83-faae-4b67-b82a-970509210594 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/013edb90-fb45-4c32-a4b5-39ac9007ee38.jpg') no-repeat center center scroll transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-totalPrice_1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-top2",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-btm2",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "datatype": "property",
                        "target": "#s-shoes",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-saveLook" ]
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
  });