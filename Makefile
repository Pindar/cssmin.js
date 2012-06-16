VERSION = 1.0
#
# Build cssmin.js
#
SRC = src
RHINO = dist/cssmin-rhino-${VERSION}.js

test: rhino
	make -i -C test

rhino:
	@@mkdir -p dist
	@@touch ${RHINO}
	@@cat ${SRC}/combine.js\
	      ${SRC}/cssmin.js\
	      ${SRC}/rhino.js > ${RHINO}
	@@echo ${RHINO} built.