(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            button {
                width: 100%;
                padding:5px;
                border: 0px;
                text-align: left;
                cursor: pointer;
                background-color: #fff;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23000'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 24px center;
            }
        </style>
        <nav>
            <button id="firstBtn">Sales Analytics</button>
            <ul id="firstUl" hidden="hidden">
                <li>Proxy Sales</li>
                <li>Proxy Analysis</li>
                <li>Proxy &O</li>
            </ul>
            <button id="secondBtn">AI Sales Forecasting</button>
            <button id="thirdBtn">AI Cash Forecasting</button>
            <ul id="thirdUl" hidden="hidden">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button id="forthBtn">Business Input</button>
        </nav>
    `;

    customElements.define('com-sap-sliding-menu', class SlidingMenu extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

            this.addEventListener("click", event => {
                var eventClick = new Event("onClick");
                this.dispatchEvent(eventClick);
            });

            this._props = {};
            this._firstConnection = false;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.firstConnection = true;
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {
            if (this.firstConnection === true){
                if (this._shadowRoot.innerHTML.length < 1){
                    this.redraw();
                    loadthis(this);
                }
            }
		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            this.redraw();
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

        redraw(){}

    });

    function loadthis(that){
        var that_ = that;
        
        // let content = document.createElement('div');
        // content.slot = "content";
        // that_.appendChild(content);

        // sap.ui.getCore().attachInit(function (){
        //     "use strict";
        // })

        document.querySelector("#firstBtn").addEventListener("click", function(){
            let firstUl = document.querySelector("#firstUl");
            let firstUlbyId = document.getElementById("firstUl");

            firstUl.removeAttribute("hidden");
            firstUlbyId.removeAttribute("hidden");
        });
    }

})();