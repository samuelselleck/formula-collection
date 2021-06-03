# Formula Collection Website

## Description
This project automatically generates a website from a latex document at overleaf.com. After configuring the project (see Building), simply run build.sh to automatically update the website from the overleaf source.

## Latex Document Notation
- The document title becomes the main header of the website
- The sections, subsections turn into navigation pages
- Once one has navigated to a subsection, the page is filled by blocks/sections based on subsubsections. Currently only equations are vissible, but in the future both textblocks, tables and figures will hopefully all be supported.

## Building
- requires node.js and python 3.X
- Copy build_config_template.txt and rename to build_config.txt and fill in fields
- Setup ssh keys to the remote webserver
- Run build.sh

## Fields in build_config.txt
- overleaf_source <overleaf source document> - overleaf source document, in the form "https://www.overleaf.com/project/<project id>"
- overleaf_session_cookie <cookie (overleaf_session2)> - overleaf session cookie, in chrome this is retrieved by pressing F12 after logging in to your overleaf account, navigating to Application -> Cookies and copying the value of "overleaf_session2"
- ssh_dest <ssh destination> - in the form username@destination.com
- download/compile/upload are boolean variables, to enable/disable parts of the build process during testing
