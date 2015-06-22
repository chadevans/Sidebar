/*jslint white:true, nomen: true, plusplus: true */
/*global mx, define, require, browser, devel, console, document, jQuery, window */
/*mendix */
/*
    Sidebar
    ========================

    @file      : Sidebar.js
    @version   : 0.2
    @author    : Chad Evans
    @date      : 03 Jun 2015
    @copyright : 2015 Mendix B.V.
    @license   : Apache v2

    Documentation
    ========================
    Describe your widget here.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-class',
    'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text', 'dojo/html', 'dojo/_base/event',
    'Sidebar/lib/jquery-1.11.2', 'dojo/text!Sidebar/widget/template/Sidebar.html'
], function (declare, _WidgetBase, _TemplatedMixin,
    dom, dojoDom, domQuery, domClass,
    domConstruct, dojoArray, lang, text, html, event,
    _jQuery, widgetTemplate) {
    'use strict';

    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    return declare('Sidebar.widget.Sidebar', [_WidgetBase, _TemplatedMixin], {

        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // Parameters configured in the Modeler.
        cssClass: "",
        layoutClass: "",

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _cookieHost: "",
        _cookie: "mx_expandsidebar",
        _isOpen: true,
        _sidebarNode: null,

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {},

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            //console.log(this.id + '.postCreate');

            this._setupEvents();
        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () {},

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () {},

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {},

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },

        // Attach events to HTML dom elements
        _setupEvents: function () {
            var rawHostName = window.location.hostname.split("."),
                width;
            rawHostName.shift();
            this._cookieHost = rawHostName.join(".");

            // set up default state of open
            this._isOpen = true;

            domClass.add(this.domNode, this.cssClass);

            this._sidebarNode = $(this.layoutClass);

            this.connect(this.domNode, 'click', function () {
                this._isOpen = !this._isOpen;
                this._sidebarNode.animate({
                    width: 'toggle'
                }, 350);
            });
        }
    });
});
require(['Sidebar/widget/Sidebar'], function () {
    'use strict';
});