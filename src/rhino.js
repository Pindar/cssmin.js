function writeFile(filename, content) {
    var fstream = new java.io.FileWriter(filename);
    var out = new java.io.BufferedWriter(fstream);
    out.write(content);
    out.close();
}

// Command line integration via Rhino
(function (args) {
    var name = args[0],
        outputFile = args[1],
        linebreakpos= args[2],
        output,
        input,
        combinededInput = "";

    if (!name) {
        print('No files present in the fileset; Check your pattern match in build.xml');
        quit(1);
    }
    path = name.split("/");path.pop();path=path.join("/");

    input = readFile(name);

    if (!input) {
        print('cssmin: couldn\'t open file ' + name);
        quit(1);
    }
    
    combinededInput = SD.combineCss(input);
    
    output = YAHOO.compressor.cssmin(combinededInput, linebreakpos);
    writeFile(outputFile, output);
    print("done");

}(arguments));