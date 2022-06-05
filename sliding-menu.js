(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            button {
                width: 100%;
                padding:5px;
                background-color: #fff;
                border: 0px;
                text-align: left;

            }
        </style>
        <nav>
            <button>Sales Analytics</button>
            <ul hidden="hidden">
                <li>Proxy Sales</li>
                <li>Proxy Analysis</li>
                <li>Proxy &O</li>
            </ul>
            <button>AI Sales Forecasting</button>
            <button>AI Cash Forecasting</button>
            <ul hidden="hidden">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button>Business Input</button>
        </nav>
    `;

    customElements.define('com-sap-sliding-menu', class SlidingMenu extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

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
})();