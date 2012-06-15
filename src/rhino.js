/*global SD, YAHOO, java, print, quit, readFile*/
function writeFile(filename, content) {
    "use strict";
    var fstream = new java.io.FileWriter(filename),
        out = new java.io.BufferedWriter(fstream);
    out.write(content);
    out.close();
}

// Command line integration via Rhino
(function (args) {
    "use strict";
    var name = args[0],
        outputFile = args[1],
        linebreakpos = args[2],
        output,
        input,
        combinededInput = "",
        path = "";

    if (!name || !outputFile) {
        print('Please add a name of an input file and a name of an output file as argument.');
        quit(1);
    }

    path = name.split("/");
    path.pop();
    path = path.join("/");

    input = readFile(name);

    if (!input) {
        print('cssmin: couldn\'t open file ' + name);
        quit(1);
    }

    combinededInput = SD.combineCss(input);

    output = YAHOO.compressor.cssmin(combinededInput, linebreakpos);
    writeFile(outputFile, output);
    print('done');

}(arguments));