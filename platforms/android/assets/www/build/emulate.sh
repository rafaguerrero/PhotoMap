# EMULATE SCRIPT

# Remove resources files
rm -r resources

# Compile css
compass compile

# Compile js
node build/r.js -o build/main.build.json

# Launch cordova
cordova emulate ios