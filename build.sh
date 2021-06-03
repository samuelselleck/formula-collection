#!/bin/bash
set -o nounset
set -o errexit

#load build variables
declare -A build_variables

while IFS=' ' read -r key value; do
    build_variables[$key]=$value
done < 'build_config.txt'

echo "BUILD VARIABLES"
echo ""
for b_var in "${!build_variables[@]}"; do echo "$b_var - ${build_variables[$b_var]}"; done
echo ""

function print_desc {
	echo ""
	echo $1
	echo ""
	echo "---------------------------------------------------------------"
}

echo "Required software: python3, node"

if [[ ${build_variables['download']} == true ]]; then
  print_desc "Downloading source from Overleaf..."
  (cd generate_source/source && \
   curl ${build_variables['overleaf_source']}/download/zip \
  -H "cookie: overleaf_session2=${build_variables['overleaf_session_cookie']};" \
  --compressed --output Formelsamling.zip)
else
  echo "Not downloading changes from overleaf (download = false)."
fi


if [[ ${build_variables['compile']} == true ]]; then
  print_desc "Compiling latex source to website"
  #build json source from latex
  python3 generate_source/latex_to_json.py
  
  #install packages and build
  npm install
  npm run build
else
  echo "Not compiling (compile = false)."
fi


if [[ ${build_variables['upload']} == true ]]; then
  print_desc "uploading to webserver";
  scp -r formulas ${build_variables['ssh_dest']}:/www/;
else
  echo "Not upploading changes to webserver (upload = false)."
fi

echo "DONE!"
