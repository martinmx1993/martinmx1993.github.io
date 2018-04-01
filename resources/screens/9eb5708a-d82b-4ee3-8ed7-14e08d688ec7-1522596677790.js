jQuery("#simulation")
  .on("click", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .click", function(event, data) {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoes": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoes": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top2": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_102": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_102": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_105": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_105": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_105": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_105": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_102": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_102": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_106": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_106": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_109": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_109": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_109": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_109": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_106": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_106": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_135": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Rectangle_135": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoesFilter": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-topsFilter": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-pantsFilter": {
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
    }
  })
  .on("drag", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .drag", function(event, data) {
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
  .on("dragend", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .pageload", function(event, data) {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/875e306b-c2e0-46a1-8a30-5913db73eebc.jpg')"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/875e306b-c2e0-46a1-8a30-5913db73eebc.jpg') no-repeat center center scroll transparent",
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-top1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-btm1": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoes": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-shoes": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "'Leelawadee UI',Arial"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter span": {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-allfilter": {
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
  .on("variablechange.jim", ".s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 .variablechange", function(event, data) {
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/ac8ab975-5b0d-496f-8b59-ed59de3c7767.jpg')"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ac8ab975-5b0d-496f-8b59-ed59de3c7767.jpg') no-repeat center center scroll transparent",
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/946c7dda-140f-4175-8e39-0dc3b55f7f29.jpg')"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/946c7dda-140f-4175-8e39-0dc3b55f7f29.jpg') no-repeat center center scroll transparent",
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/e91d0bb7-e59a-473f-9dd4-69ba7f5be86e.jpg')"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/e91d0bb7-e59a-473f-9dd4-69ba7f5be86e.jpg') no-repeat center center scroll transparent",
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
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-attachment": "scroll",
                        "background-size": "cover",
                        "background-image": "url('./images/746ecc53-a7d1-4894-b4cd-40c0ce822798.jpg')"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-9eb5708a-d82b-4ee3-8ed7-14e08d688ec7 #s-Panel_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/746ecc53-a7d1-4894-b4cd-40c0ce822798.jpg') no-repeat center center scroll transparent",
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