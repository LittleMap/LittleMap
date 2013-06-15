#!/bin/bash

find ../ -type f -iname '*.svg' -exec inkscape -z {} --export-plain-svg={} --vacuum-defs \;
