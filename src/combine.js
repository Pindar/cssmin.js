var SD = SD || {};

SD.combineCss = function (css) {
    "use strict";
    return css.replace(/@import?\s+\S*/g, function (str) {
        var files = str.split('"')[1];
        return readFile(files);
    });
};
