class Style {
    constructor(style) {
        this.width = function(w) { return { style : "css", type : "width", width: w + "px" } };
        this.height = function(h) { return { style : "css", type : "height", height: h + "px" } };
        //this.size = function(w, h) { return { style : "css", type : "size", width: w + "px", height: h + "px" } };
        this.position = function(_position) { return { style : "css", type : "position", position: _position } };
        this.display = function(_display) { return { style : "css", type : "display", display : _display } };
        this.padding = function(_padding) { return { style : "css", type : "padding", padding : _padding } };
        this.cursor = function(_cursor) { return { style : "css", type : "cursor", cursorType : _cursor } };
        this.border = function(_border) { return { style : "css", type : "border", border : _border } };
        this.background = function(_background) { return { style : "css", type : "background", background : _background } };
        this.font = function(size, family, color) { return { style : 'css', type : 'font', fontFamily : family, 'fontSize' : size, 'color' : color }};
        this.merge = function() {
            var keys = {};
            for (var i=0;i<arguments.length; i++) {
                if (arguments[i].style == "css") {
                    if (arguments[i].type == "size") { keys.width = arguments[i].width; keys.height = arguments[i].height; }
                    if (arguments[i].type == "width") keys.width = arguments[i].width;
                    if (arguments[i].type == "height") keys.height = arguments[i].height;
                    if (arguments[i].type == "display") keys.display = arguments[i].display;
                    if (arguments[i].type == "position") keys.position = arguments[i].position;
                    if (arguments[i].type == "padding") keys.padding = arguments[i].padding + "px";
                    if (arguments[i].type == "border") keys.border = arguments[i].border;
                    if (arguments[i].type == "background") keys.background = arguments[i].background;
                    if (arguments[i].type == "color") keys.color = arguments[i].color;
                    if (arguments[i].type == "cursor") keys.cursor = arguments[i].cursorType;
                    if (arguments[i].type == "font") { keys.color = arguments[i].color; keys.fontFamily = arguments[i].fontFamily; keys.fontSize = arguments[i].fontSize + 'px'; }
                }
            }
            return keys;
        }
        return this;
    }
}