
#load build variables
declare -A build_variables

while IFS=' ' read -r key value; do
    build_variables[$key]=$value
done < 'build_config.txt'

echo "----------------BUILD VARIABLES----------------"
echo ""
for b_var in "${!build_variables[@]}"; do echo "$b_var - ${build_variables[$b_var]}"; done
echo ""
echo "-----------------------------------------------"

function print_desc {
	echo ""
	echo "---------------------------------------------------------------"
	echo $1
	echo "---------------------------------------------------------------"
}

print_desc "Installing required software"
sudo apt install sshpass

print_desc "Compiling latex source to website"
#build json source from latex
python3 latex_to_json/latex_to_json.py

#install packages and build
npm install
npm run build

#change output dir
rm -r formulas
mv build formulas

print_desc "uploading to webserver"
sshpass -p ${build_variables['ssh_password']} scp -r formulas ${build_variables['ssh_dest']}:/www/

echo "DONE!"
