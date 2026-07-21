#!/usr/bin/env node

"use strict";

if (!process.argv.includes("--flows")) process.argv.push("--flows");
require("./generate-pilot-docs.js");
