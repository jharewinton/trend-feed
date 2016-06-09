var TrendExampleData = require('./TrendExampleData');
var TrendWebAPIUtils = require('./js/utils/TrendWebAPIUtils');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React; // export for http://fb.me/react-devtools

var TrendApp = require('./js/components/TrendApp.react');
require('./scss/main.scss');


TrendExampleData.init();

TrendWebAPIUtils.getAllItems();

ReactDOM.render(
    <TrendApp />,
    document.getElementById("app")
);
