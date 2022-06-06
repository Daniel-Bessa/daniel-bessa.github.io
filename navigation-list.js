(function() {
  let _shadowRoot;
  let _id;
  let password;

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <style>
    </style>
    <div id="ui5_content" name="sapui5/xmlview">
      <slot name="content"></slot>

      <script id="oView" type="sapui5/xmlview">
        <mvc:View
          controllerName="sap.tnt.sample.NavigationList.C"
          xmlns="sap.m"
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:tnt="sap.tnt"
          height="100%">
          <OverflowToolbar>
            <Button
              text="Toggle Collapse/Expand"
              icon="sap-icon://menu2"
              press=".onCollapseExpandPress" />
            <Button
              text="Show/Hide SubItem 3"
              icon="sap-icon://menu2"
              press=".onHideShowSubItemPress" />
          </OverflowToolbar>
          <tnt:NavigationList
            id="navigationList"
            width="320px"
            selectedKey="subItem3">
            <tnt:NavigationListItem text="Item 1" key="rootItem1" icon="sap-icon://employee">
              <tnt:NavigationListItem text="Sub Item 1" />
              <tnt:NavigationListItem text="Sub Item 2" />
              <tnt:NavigationListItem text="Sub Item 3" id="subItemThree" key="subItem3" />
              <tnt:NavigationListItem text="Sub Item 4" />
              <tnt:NavigationListItem text="Invisible Sub Item 5" visible="false" />
              <tnt:NavigationListItem text="Invisible Sub Item 6" visible="false" />
            </tnt:NavigationListItem>
            <tnt:NavigationListItem
              text="Invisible Section"
              icon="sap-icon://employee"
              visible="false">
              <tnt:NavigationListItem text="Sub Item 1" />
              <tnt:NavigationListItem text="Sub Item 2" />
              <tnt:NavigationListItem text="Sub Item 3" />
              <tnt:NavigationListItem text="Sub Item 4" />
            </tnt:NavigationListItem>
            <tnt:NavigationListItem text="Item 2" icon="sap-icon://building">
              <tnt:NavigationListItem text="Sub Item 1" />
              <tnt:NavigationListItem text="Sub Item 2" />
              <tnt:NavigationListItem text="Sub Item 3" />
              <tnt:NavigationListItem text="Sub Item 4" />
            </tnt:NavigationListItem>
          </tnt:NavigationList>
        </mvc:View>
      </script>
    </div>
  `;

  class NavigationList extends HTMLElement {

    constructor() {
      super();

      _shadowRoot = this.attachShadow({
        mode: "opne"
      });
      _shadowRoot.appendChild(tmpl.content.cloneNode(true));

      _id = createGuid();

      _shadowRoot.querySelector("#oView").id = id + "_oView";
      
      this._export_settings = {};
      this._export_settings.password = "";

      this.addEventListener("click", event => {
        console.log('click');
      });
    }

    connectedCallback() {}

    disconnectedCallback() {
      if (this._subscription){
        this._subscription();
        this._subscription = null;
      }
    }

    onCustomWidgetBeforeUpdate(changedProperties){
      if ("designMode" in changedProperties){
        this._designMode = changedProperties["designMode"];
      }
    }

    onCustomWidgetAfterUpdate(changedProperties){
      loadthis(this);
    }

    _firePropertiesChanged(){
      this.dispatchEvent(new CustomEvent("propertiesChanged", {

      }));
    }
  }

  customElements.define("com-ds-nav-list-sap-sac", NavigationList);

  //Utils
  function loadthis(that) {
    var that_ = that;

    let content = document.createElement('div');
    content.slot = "content";
    that_.appendChild(content);

    sap.ui.getCore().attachInit(function() {
      "use strict";

      //### Controller ###
      sap.ui.define([
        //"jquery.sap.global",
        "sap/ui/core/mvc/Controller"
      ], function(Controller){
        "use strict";

        return Controller.extend("sap.tnt.sample.NavigationList.C", {
          onCollapseExpandPress: function () {
            var oNavigationList = this.byId("navigationList");
            var bExpanded = oNavigationList.getExpanded();

            oNavigationList.setExpanded(!bExpanded);
          },

          onHideShowSubItemPress: function() {
            var oNavListItem = this.byId("subItemThree");
            oNavListItem.setVisible(!oNavListItem.getVisible());
          }
        });
      });
      
    })
  }

})