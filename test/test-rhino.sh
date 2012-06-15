#!/bin/bash

java -jar js.jar ../dist/cssmin-rhino-1.0.js foo.css output.css

MD5_OUTPUT=$(md5 -q output.css)
MD5_COMPARE=$(md5 -q output.compare.css)

if [[ $MD5_OUTPUT  ==  $MD5_COMPARE ]]; then
	echo "ok";
else
	echo $MD5_OUTPUT
	echo $MD5_COMPARE
	echo "fail";
fi
