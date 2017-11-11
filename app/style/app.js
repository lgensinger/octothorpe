// app stylesheets
var styleBase = "./app/";
var systemBase = styleBase + "system/";
var platformBase = styleBase + "platforms/";
var themeBase = styleBase + "themes/";

// design system
require("./app/system");

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