(function(window, undefined) {
  var dictionary = {
    "fde12adb-401b-4301-85ad-7b675858290a": "Zalora Add Products to SP (Pants)",
    "38bdd977-c927-43ac-a9a9-9b10c9ec6a87": "Create Avatar (Step 2)",
    "86c0f091-ca3c-4d23-9da9-61cf9ac5dd4b": "Zalora Page Instructions 1",
    "d9a59969-7a66-48da-afb6-a2e6ed7ad3e1": "Zalora Page Instruction 2",
    "299b3aea-b65d-476d-b2e1-308fea2526b0": "Zalora Add Products to SP",
    "717f4c1d-6afd-4b0e-b55a-8fc9487b5bad": "View Looks Page 1-2",
    "cca1e7ca-0803-4355-9556-df228762bdb9": "WardRobe (Update looks)",
    "3e41fe23-8b68-4865-98c3-3e9d8bb39f92": "Ward Robe Black (Edit Look)",
    "209b7019-5434-4cad-b3f4-d3ff85fd2f31": "View Looks (After updating)",
    "8c596d05-55dd-467b-9d4c-ad80b9e3e8a7": "Create Avatar Instructions Page",
    "954e4ec8-cfea-40fe-afdd-f766da4ccf3a": "Create Avatar (Step 3)",
    "de87dbe0-3b97-476f-b839-5e1df7925879": "SIgn up Screen",
    "9c19cadd-e125-4b25-b642-f547a5551000": "wardrobeBlack",
    "a01be64b-5efb-42f8-b7c0-e556f2b08ce3": "View Looks Page VB2",
    "c3168d83-faae-4b67-b82a-970509210594": "WardRobe Page Updated",
    "8f99dcf4-418d-44e7-85b7-464077f3c9e3": "Compare Looks",
    "2ab856ee-5903-4fe0-8a21-58950f7695dc": "Zalora Add Products to SP (Shoes)",
    "05bbb449-2fed-4f2e-b54e-71ef0ca0d399": "View Looks Page VB",
    "f45c19d5-ebea-4db7-af81-9f5d92e28688": "Create Avatar (Step 1)",
    "219bd522-6ce7-43b6-9c64-d61dbc0f50f6": "Home Page",
    "48d5a849-1fa2-45a0-a0b3-5d61a2d9a325": "Compare Looks Page (Version B-2)",
    "9eb5708a-d82b-4ee3-8ed7-14e08d688ec7": "WardRobe Page",
    "0fec13cc-5eac-49aa-b9a8-59d31ecedacb": "View Looks Page 4",
    "c2900f68-2eee-4a4a-887e-18d4350b57a9": "Login Screen",
    "17467b8a-101a-41d3-a1c2-45b1a7aca249": "View Looks Page 3",
    "8453ae18-945e-4f55-bdc4-7b900eeaa6ed": "View Looks Page 2",
    "89ea925a-5a70-41a2-8e5c-beca954d727c": "View Looks Page 1",
    "e13e81b7-90c2-4e15-b6c8-780a2709d05b": "View Looks Page 1 (Version B)",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "30fe90e6-b1ad-4782-8329-0e3b8e047c5f": "WardRobeNavBarTemplate",
    "242fd4df-50bc-4e37-9039-45779075e4be": "Zalora Template",
    "2c9543e0-7389-4735-a26d-14467babbf98": "HomePageNavBarTemplate",
    "97cb8cf2-b77a-463d-965a-3ea37642c248": "SP template",
    "1bb87b91-e2e9-4a28-bb7f-eaf4eef443c6": "wardrobe",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "002ee4ce-7adb-470e-8f9d-089da7663443": "viewlooks template",
    "e38e0e53-f728-4eb2-90f1-26ed222cd7da": "ViewLookNavBarTemplate",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "c2e2c4b8-30f8-4731-9d47-e321b2b1f8cf": "wardrobe-duplicate",
    "2fb3a813-ea34-4449-a122-67d14589726a": "SP template (update looks)",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);