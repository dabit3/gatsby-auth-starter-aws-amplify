# Gatsby Auth Starter AWS
Gatsby starter with user authentication using Amazon Cognito.

## Getting Started

1. Create the project

```sh
gatsby new my-aws-project https://github.com/dabit3/gatsby-auth-starter-aws-amplify
```

2. Change into the new directory

```sh
cd gatsby-auth-starter-aws-amplify
```

3. Change into the new directory

```sh
yarn
# or
npm install
```

4. Install & configure the AWS Amplify CLI

```sh
npm i -g @aws-amplify/cli

amplify configure
```

> To see a video of how to configure the CLI, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U)

5. Create a new AWS Amplify Project

```
amplify init
```

> Here, walk through the following steps:

- Enter a name for the project __YOURPROJECTNAME__
- Choose your default editor: __Visual Studio Code__ (or your editor of choice)
- Choose the type of app that you're building __javascript__
- What javascript framework are you using __react__
- Source Directory Path: __src__
- Distribution Directory Path: __public__
- Build Command: __npm run-script build__
- Start Command: __npm run-script __develop

6. Add authentication to your AWS Amplify project

```sh
amplify auth add
```

- Do you want to use the default authentication and security configuration? __Y__


7. Push the updated project configuration to AWS

```sh
amplify push
```

8. Then you can run it by:
```sh
gatsby develop
```
