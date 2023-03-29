#!/bin/sh
UUID=${UUID:-'c9a32d8d-0173-45fc-986b-be52c0a09602'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
