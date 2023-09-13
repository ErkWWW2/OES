## Initialize Your Project with npm:
You can initialize your project by running
and following the prompts to create a package.json file. This file will store information about your project and its dependencies:
```
npm init 
```
<br>

## Install ESLint Locally:
To use ESLint in your project, it's recommended to install it locally. Run the following command to install ESLint:
```
npm install eslint --save-dev
```
<br>

## Initialize ESLint Configuration:
After installing ESLint, you need to set up its configuration. You can manually create an ESLint configuration file or use the built-in ESLint setup wizard. To use the wizard, run:

```
npx eslint --init
```
<br>

Create or edit your JavaScript files within your project directory.
Run ESLint:
To lint your JavaScript files, run ESLint from the command line. For example, to lint a single file:

````
npx eslint my-file.js
````

To lint all JavaScript files in your project:
```
npx eslint .
````
<br>

Fix Issues (Optional):
ESLint will report any issues it finds in your code. If you want ESLint to automatically fix some of these issues, you can run the following command:
```
npx eslint --fix my-file.js
```

