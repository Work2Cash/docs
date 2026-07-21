#!/usr/bin/env node

"use strict";

if (!process.argv.includes("--tasks")) process.argv.push("--tasks");
require("./generate-pilot-docs.js");
