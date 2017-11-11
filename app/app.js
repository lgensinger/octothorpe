/*************************** STYLE ***************************/

// app stylesheets
var styleBase = "./style/app/";
var systemBase = styleBase + "system/";
var platformBase = styleBase + "platforms/";
var themeBase = styleBase + "themes/";

// design system
require("./style/app/system");

// base platform
require(platformBase + "desktop.scss");

// global components

// main

// themes
require(systemBase + "palettes.scss");
require(themeBase + "dark.scss");
require(themeBase + "light.scss");

// secondary platforms
require(platformBase + "desktop-small.scss");

/*************************** CONFIGS ***************************/

// app configuration
require("./app-frontend-config");

/*************************** MODULES ***************************/

// app initialized
var app = window.app = (function(app) {
    app.init = function() {
        // init other stuff if needed
    };
    return app;
}(app || {}));

// initialize app
app.init();