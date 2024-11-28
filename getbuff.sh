#!/bin/sh

set -e

TEMP=$(mktemp)
URL="https://xivapi.com/status/$1"

curl -s "$URL" >"$TEMP" || { echo >&2 "Error fetching $URL"; false; }
ERROR=$(jq <"$TEMP" .Error)
if [ "$ERROR" = "true" ]; then jq >&2 <"$TEMP" .Message; false; fi
ICON=$(jq <"$TEMP" .IconID)
NAME=$(jq <"$TEMP" .Name_en)
DESC=$(jq <"$TEMP" .Description)
cat <<DONE
[${2:-new-buff}]
name = $NAME
id = $1
icon = $ICON
description = $DESC
# explanation = ""
# phases = []
DONE

rm $TEMP
