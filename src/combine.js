/*global readFile:true */
var SD = SD || {};

SD.combineCss = function (css) {
    "use strict";
    var regex = /@import?\s+[\S\s]*;$/g;

    function replaceImportIn(css1) {
        return css1.replace(regex, function (str) {
            var files;
            str = str.replace(/'/g, '"');
            files = str.split('"')[1];
            return (files) ? readFile(files) : "";
        });
    }

    while (regex.test(css)) {
        css = replaceImportIn(css);
    }

    return css;
};
