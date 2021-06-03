# Formula Collection Website

## Description
This project automatically generates a website from a latex document at overleaf.com. After configuring the project (see Building), simply run build.sh to automatically update the website from the overleaf source.

## Latex Document Notation
- The document title becomes the main header of the website
- The sections, subsections turn into navigation pages
- Once one has navigated to a subsection, the page is filled by blocks/sections based on subsubsections. Currently only equations are vissible, but in the future both textblocks, tables and figures will hopefully all be supported.

## Building
- Copy build_config_template.txt and rename to build_config.txt and fill in fields
- Setup ssh keys to the remote webserver
- Run build.sh

## Fields in build_config.txt
- TODO
