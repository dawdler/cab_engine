export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 61,
          "column": 8
        }
      },
      "moduleName": "cabiee/templates/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container1");
      var el2 = dom.createTextNode("\n			");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row main");
      var el3 = dom.createTextNode("\n				");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","panel-heading");
      var el4 = dom.createTextNode("\n	               ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","panel-title text-center");
      var el5 = dom.createTextNode("\n	               		");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      dom.setAttribute(el5,"class","title");
      var el6 = dom.createTextNode("ActivelyLearn");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n	               		");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("hr");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n	               	");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	            ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" \n				");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","main-login main-center");
      var el4 = dom.createTextNode("\n					");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("form");
      dom.setAttribute(el4,"class","form-horizontal");
      dom.setAttribute(el4,"method","post");
      dom.setAttribute(el4,"action","#");
      var el5 = dom.createTextNode("\n						\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group");
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","name");
      dom.setAttribute(el6,"class","cols-sm-2 control-label");
      var el7 = dom.createTextNode("Your Employee ID");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","cols-sm-10");
      var el7 = dom.createTextNode("\n								");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","input-group");
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","input-group-addon");
      var el9 = dom.createElement("i");
      dom.setAttribute(el9,"class","fa fa-user fa");
      dom.setAttribute(el9,"aria-hidden","true");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("input");
      dom.setAttribute(el8,"type","text");
      dom.setAttribute(el8,"class","form-control");
      dom.setAttribute(el8,"value","employeeID");
      dom.setAttribute(el8,"name","name");
      dom.setAttribute(el8,"id","name");
      dom.setAttribute(el8,"placeholder","Enter your Name");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n								");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n							");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n						");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group");
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","email");
      dom.setAttribute(el6,"class","cols-sm-2 control-label");
      var el7 = dom.createTextNode("From");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","cols-sm-10");
      var el7 = dom.createTextNode("\n								");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","input-group");
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","input-group-addon");
      var el9 = dom.createElement("i");
      dom.setAttribute(el9,"class","fa fa-envelope fa");
      dom.setAttribute(el9,"aria-hidden","true");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("input");
      dom.setAttribute(el8,"type","text");
      dom.setAttribute(el8,"class","form-control");
      dom.setAttribute(el8,"name","email");
      dom.setAttribute(el8,"id","email");
      dom.setAttribute(el8,"placeholder","Enter starting point");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n								");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n							");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n						");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group");
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","username");
      dom.setAttribute(el6,"class","cols-sm-2 control-label");
      var el7 = dom.createTextNode("To");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","cols-sm-10");
      var el7 = dom.createTextNode("\n								");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","input-group");
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","input-group-addon");
      var el9 = dom.createElement("i");
      dom.setAttribute(el9,"class","fa fa-users fa");
      dom.setAttribute(el9,"aria-hidden","true");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("input");
      dom.setAttribute(el8,"type","text");
      dom.setAttribute(el8,"class","form-control");
      dom.setAttribute(el8,"name","username");
      dom.setAttribute(el8,"id","username");
      dom.setAttribute(el8,"placeholder","Enter destinaion point");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n								");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n							");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n						");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group");
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","password");
      dom.setAttribute(el6,"class","cols-sm-2 control-label");
      var el7 = dom.createTextNode("Time");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","cols-sm-10");
      var el7 = dom.createTextNode("\n								");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","input-group");
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","input-group-addon");
      var el9 = dom.createElement("i");
      dom.setAttribute(el9,"class","fa fa-lock fa-lg");
      dom.setAttribute(el9,"aria-hidden","true");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n									");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("input");
      dom.setAttribute(el8,"type","password");
      dom.setAttribute(el8,"class","form-control");
      dom.setAttribute(el8,"name","password");
      dom.setAttribute(el8,"id","password");
      dom.setAttribute(el8,"placeholder","Enter time");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n								");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n							");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n						");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("						\n\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group ");
      var el6 = dom.createTextNode("\n							");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"type","button");
      dom.setAttribute(el6,"class","btn btn-primary btn-lg btn-block login-button");
      var el7 = dom.createTextNode("Search");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n						");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n						");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","login-register");
      var el6 = dom.createTextNode("\n				            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","index.php");
      var el7 = dom.createTextNode("Login");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				         ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n					");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n				");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n			");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n		");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1, 3, 1, 9, 1]);
      var morphs = new Array(1);
      morphs[0] = dom.createElementMorph(element0);
      return morphs;
    },
    statements: [
      ["element","action",["searchCabs"],[],["loc",[null,[53,83],[53,106]]]]
    ],
    locals: [],
    templates: []
  };
}()));