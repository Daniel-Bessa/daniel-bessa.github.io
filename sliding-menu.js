(function()  {

  let _shadowRoot;

  let tmpl = document.createElement('template');
  tmpl.innerHTML = `
      <script><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></script>
      <style>
          .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
          }
          nav {
              width: 50px;
              height: 100%;
              overflow: hidden;
              white-space: nowrap;
              display: block;
              cursor: pointer;
          }
          button {
              position: relative;
              // width: 100%;
              top: -20px;
              padding:10px;
              border: 0px;
              text-align: left;
              cursor: pointer;
              background-color: #fff;
              font-size: 20px;

              
          }
          span {
            display: inline-block;
            width: 50px;
            height: 50px;
            background-repeat: no-repeat;
            background-position: left 0px center;
          }
          small {
            position: relative;
            display: inline-block;
            height: 20px;
            width: 20px;
            top: -15px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23000'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: left 0px center;

          }
          ul {
              margin: 0;
              list-style: none;
          }
          li {
            padding: 5px;
            font-size: 18px;
            cursor: pointer;
          }
      </style>
      <nav id="nav">
        <div>
          <div><span style="background-image: url('https://sac-dev-cw.novartis.net/cw/dev/NAVIGATION_LIST/icons/show_chart_FILL0_wght400_GRAD0_opsz48.svg')"></span><button id="firstBtn">Sales Analytics</button><small></small></div>
          <ul id="firstUl">
            <li>Proxy Sales</li>
            <li>Proxy Analysis</li>
            <li>Proxy &O</li>
          </ul>
        </div>

        <div>
          <div><span style="background-image: url('https://sac-dev-cw.novartis.net/cw/dev/NAVIGATION_LIST/icons/bar_chart_FILL0_wght400_GRAD0_opsz48.svg')"></span><button id="secondBtn">AI Sales Forecasting</button><small></small></div>
        </div>

        <div>
          <div><span style="background-image: url('https://sac-dev-cw.novartis.net/cw/dev/NAVIGATION_LIST/icons/area_chart_FILL0_wght400_GRAD0_opsz48.svg')"></span><button id="thirdBtn">AI Cash Forecasting</button><small></small></div>
          <ul id="thirdUl">
            <li>Proxy Sales</li>
            <li>Proxy Analysis</li>
            <li>Proxy &O</li>
          </ul>
        </div>
        
        <div>
          <div><span style="background-image: url('https://sac-dev-cw.novartis.net/cw/dev/NAVIGATION_LIST/icons/signal_cellular_alt_FILL0_wght400_GRAD0_opsz48.svg')"></span><button id="forthBtn">Business Input</button><small></small></div>
        </div>
      </nav>
  `;

  customElements.define('com-sap-sliding-menu', class SlidingMenu extends HTMLElement {


    constructor() {
      super(); 
      this._shadowRoot = this.attachShadow({mode: "open"});
      this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

      // this.addEventListener("click", event => {
      //     var eventClick = new Event("onClick");
      //     this.dispatchEvent(eventClick);
      // });

      this._props = {};
      this._firstConnection = false;
    }

    //Fired when the widget is added to the html DOM of the page
    connectedCallback(){
        this.firstConnection = true;
        this.redraw();
    }

      //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
    disconnectedCallback(){
    
    }

    //When the custom widget is updated, the Custom Widget SDK framework executes this function first
    onCustomWidgetBeforeUpdate(oChangedProperties) {
            
    }

    //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
    onCustomWidgetAfterUpdate(oChangedProperties) {
      // if (this._firstConnection){
        var that = this;
        loadthis(that);
        this.redraw();
      // }
    }
          
    //When the custom widget is removed from the canvas or the analytic application is closed
    onCustomWidgetDestroy(){
    }

    
    //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
    // Commented out by default
    /*
    onCustomWidgetResize(width, height){
    }
    */

    redraw(){
    }

  });

  function loadthis(that){
    // var that_ = that;

    let navBar = that._shadowRoot.getElementById("nav");

    let firstBtn = that._shadowRoot.getElementById("firstBtn");
    let secondBtn = that._shadowRoot.getElementById("secondBtn");
    let thirdBtn = that._shadowRoot.getElementById("thirdBtn");

    let firstUl = that._shadowRoot.getElementById("firstUl");
    firstUl.style.display = "none";
    let thirdUl = that._shadowRoot.getElementById("thirdUl");
    thirdUl.style.display = "none";
    
    navBar.addEventListener("mouseover", function (event){
      navBar.style.width = "100%";
    });

    navBar.addEventListener("mouseout", function (event){
      navBar.style.width = "50px";
    });

    navBar.addEventListener("mouseleave", function (event){
      firstUl.style.display = "none";
      thirdUl.style.display = "none";
    });


    firstBtn.addEventListener("click", function (event){
      if(firstUl.style.display === "none"){
        firstUl.style.display = "";
      }else {
        firstUl.style.display = "none";
      }
    });

    secondBtn.addEventListener("click", function (event){
      // firstUl.removeAttribute("hidden");
    });

    thirdBtn.addEventListener("click", function (event){
      if(thirdUl.style.display === "none"){
        thirdUl.style.display = "";
      }else {
        thirdUl.style.display = "none";
      }
    });
    
    navBar.onclick = e => {
      let target = e.target || e.srcElement;
      let clickedNode = target.innerHTML;
      console.log(clickedNode);
    }

  }

})();