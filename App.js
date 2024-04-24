/**
 * Parcel (Beast)
 * HMR - Hot Module Reloading
 * File Watcher Alogorithem - Writen in C++
 * Bundeling Files
 * Minify Files (JS optimization)
 * Cleaning Code (Console.logs)
 * DEV and PRODUCTION Build 
 * Super Fast Build Alogirithem
 * JS code Optimization
 * Image Optimization
 * Cashing While Development
 * Compression Files (Renames varibles)
 * COmpactible with old version of browser support code generation
 * HTTPS on DEV env support
 * Parcel will manges the Ports also when we run multiple projects
 * Consistent hashing Algorithems to cashing things
 * Zero Configuration
 * Transitive Depencies (Not a Parcel thing but it is what happing in our code over the pakages lock files)
 */

import React from "react";
import ReactDOM from "react-dom/client";

const headElement1 = React.createElement("h2", { id: "title1" }, "Welcome To");
const headElement2 = React.createElement("h1", { id: "title2" }, "React World");
const divElement = React.createElement("div", { id: "container" }, [
  headElement1,
  headElement2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);
