#!/bin/bash
# If this file exists, chain on success with &&...
#     sed -i  means: inline replace (overwrite file)
#         replace .install(True) with .install()

PATCHFILE="${USERPROFILE}/AppData/Roaming/npm/node_modules/gitinspector/gitinspector/localization.py"
POSIX_PATH=`cygpath $PATCHFILE`
if test -f $POSIX_PATH; then
    echo $POSIX_PATH
    sed -i s'/.install(True)/.install()/' $POSIX_PATH
fi