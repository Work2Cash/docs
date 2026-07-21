#!/usr/bin/env node

"use strict";

if (!process.argv.includes("--contracts")) process.argv.push("--contracts");
require("./generate-pilot-docs.js");
