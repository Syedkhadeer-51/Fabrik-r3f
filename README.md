# VARK - Fabrik : 
This is the core front-end application for Vark

- [Setup](#setup)
- [How to Use Repo](#how-to-use-repo)
- [Testing](#testing)



## Setup
### Install Node.js

Download Node.js by visiting the Node.js website.[node](https://nodejs.org/en/download)
Double click on the downloaded file and follow the installation instructions.

To verify that Node.js is installed, open your terminal or command prompt and run the following command:

```sh
$ node -v
```
### Install pnpm

Once Node.js is installed, you need to install pnpm. Visit the [pnpm installation guide](https://pnpm.io/installation) guide for instructions on how to install pnpm.

### Browser

There are many browsers out there. However, At fabrik we strongly recommend Google Chrome. : 

### Code Editor

This project is compatible with almost all the code editors, At fabrik we recommend you to use Visual studio to keep the developement experience uniform since we make use of extensions provided by VScode.
[download Visual Studio Code](https://code.visualstudio.com/) and follow the installation instructions.

## How to Use Repo

Open your terminal or Windows PowerShell and navigate to the desired folder where you want to have the project.

Run the following commands to clone the repository and navigate to the project folder:

```bash
git clone https://github.com/Syedkhadeer-51/Fabrik-r3f.git
cd Fabrik-r3f
```
Once you're inside the Fabrik-r3f folder, install the project dependencies by running the following command: 

```bash
pnpm install
```
This will install and resolve all the dependencies required to proceed with the project

## Run the developement server :

To start the development server, run the following command:

```bash
pnpm run dev
```
This will start the development server and you can begin making changes to the project
Create a new branch from the main branch to make your changes:

```bash
git checkout -b "branch name"
```
After making the necessary changes, commit them with a meaningful message and push the changes to the branch you created. For instructions on committing and pushing changes, refer to th[Github-documentation](https://docs.github.com/en/get-started/quickstart)

## Tech Stack : 

-[Next.js](https://nextjs.org/)
-[React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
-[Three.js](https://threejs.org/)
-[pmndrs-drei : R3f components](https://github.com/pmndrs/drei)
-[Jest](https://jestjs.io/docs/getting-started)
-[pnpm](https://pnpm.io/installation)

Refer to the provided links for each framework to gain a better understanding of the folder structure and syntaxes specific to the project requirements.

## Testing: 
At fabrik we prefer Test-Driven Development (TDD) approach to build components in a simple way.

To quicky get started create a test file with .test.tsx extension for the respective component within __tests__ folder available at the root of the application, 

and then run : 

```bash
pnpm test
```

This goes through all the test cases on watch mode and prints result on you're terminal. 

For detailed understanding of how to write test cases, please refer :
[Jest](https://jestjs.io/docs/getting-started)
[React-three-fiber: Testing](https://docs.pmnd.rs/react-three-fiber/tutorials/testing)



