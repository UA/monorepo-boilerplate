## Usage

### OS X:

```sh
yarn install
cd packages/mobile
npm install -g wml
wml add ../common ./node_modules/@monorepo/common
open . -a iterm && wml start
open . -a iterm && cd ../common && yarn watch
open . -a iterm && cd ../mobile/ios && pod install && cd ../ && npx react-native run-ios -- --reset-cache
open . -a iterm && cd ../web && yarn start
cd ../../ && code .
```

### Windows:    
Notes:  
* wml is not working on windows so you can use Grunt instead of wml.
* iterm is not exist in windows. Therefore you can use cmder instead of iterm.
* Cmder has no duplicate tab command. So you can duplicate tabs manually by right clicking current tab and selecting "Restart or duplicate" > "Duplicate root"

```sh
yarn install && cd packages/common && npm install grunt --save-dev && npm install grunt-contrib-watch --save-dev && npm install grunt-sync --save && grunt --watch
# Duplicate tab
cd ../common && yarn watch
# Duplicate tab
cd ../mobile && npx react-native run-android -- --reset-cache
# Duplicate tab
cd ../web && yarn start
# Duplicate tab
code .
```

## Adding library to common module
If you added library to common module like react-native-svg, you have to add that library into mobile package. And nohoist array.

```json
{
  "name": "mobile",
  "workspaces": {
    "nohoist": [
      "react-native",
      "react-native/**",
      "react-native-svg",
      "react-native-svg/**"
    ]
  },
  "dependencies": {
    "react": "16.8.6",
    "react-native": "0.60.5",
    "react-native-svg": "^11.0.1"
  }
}

```

## Development setup

For development, you should install these CLI tools:

- Node ^8.11
- npm ^6.2.0
- yarn ^1.22.0
- wml
