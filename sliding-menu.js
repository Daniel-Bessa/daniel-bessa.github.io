(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            nav {
                width: 30%;
                overflow: hidden;
                white-space: nowrap;
            }
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
            ul {
                margin: 0;
                list-style: none;
            }
        </style>
        <nav>
            <button id="firstBtn">Sales Analytics</button>
            <ul id="firstUl">
                <li>Proxy Sales</li>
                <li>Proxy Analysis</li>
                <li>Proxy &O</li>
            </ul>
            <button id="secondBtn">AI Sales Forecasting</button>
            <button id="thirdBtn">AI Cash Forecasting</button>
            <ul id="thirdUl">
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
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {
            if (this.firstConnection === true){
                // if (this._shadowRoot.innerHTML.length < 1){
                //     this.redraw();
                //     loadthis(that);
                // }
            }
		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            var that = this;
            loadthis(that);
            // this.redraw();
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
            var shadow = window.getSelection(this._shadowRoot);
            console.log("shadow", shadow);
            // this._shadowRoot.appendChild
        }

    });

    function loadthis(that){
        var that_ = that;

        let firstBtn = this.$().find("#firstBtn");
        console.log("This is a test to see firstBtn", firstBtn.parentNode);
        let button = document.getElementById("firstBtn");
        console.log("This is button", button);

        let navDiv = this.$().find("nav");
        console.log("this is a test too see nav", navDiv);

        windows.onclick = e => {

            let target = e.target || e.srcElement;

            console.log("this is target", target);
        }
    }

})();