# Gatsby Auth starter with AWS Amplify

This auth starter implements a basic authentication flow for signing up signing in users as well as protected client side routing using [AWS Amplify](https://amplify.aws). Auth features:
- User sign up
- User sign in
- Multi-factor Authentication
- User sign-out

![Gatsby Amplify](https://github.com/swaminator/gatsby-auth-starter-aws-amplify/blob/master/src/images/gatby-auth.gif)

## Getting Started

1. Create the project

```sh
gatsby new gatsby-amplify-auth https://github.com/dabit3/gatsby-auth-starter-aws-amplify
```

2. Change into the new directory

```sh
cd gatsby-amplify-auth
```

3. Change into the new directory

```sh
yarn
# or
npm install
```

4. Install & configure the AWS Amplify CLI

```sh
npm i -g @aws-amplify/cli@multi-env

amplify configure
```

> To see a video of how to configure the CLI, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U)

5. Create a new AWS Amplify Project

```
amplify init
```

> Here, walk through the following steps:

- Enter a name for the project __YOURPROJECTNAME__
- Enter a name for the environment __dev__
- Choose your default editor: __Visual Studio Code__ (or your editor of choice)
- Choose the type of app that you're building __javascript__
- What javascript framework are you using __react__
- Source Directory Path: __src__
- Distribution Directory Path: __public__
- Build Command: __npm run-script build__
- Start Command: __npm run-script develop__

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

## Hosting with the AWS Amplify Console

1. Push your code to a Git repository of your choice.
1. Login to the (AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
1. Connect your repository and branch.
1. In the build settings, modify the **backend** phase to reuse the *dev* environment you created using the Amplify CLI.

```sh
backend:
  phases:
    build:
      commands:
        - '# Get Amplify CLI Cloud-Formation stack info from environment cache'
        - export STACKINFO="$(envCache --get stackInfo)"
        - '# Execute Amplify CLI with the helper script'
        - amplifyPush --environment dev
        - '# Store Amplify CLI Cloud-Formation stack info in environment cache'
        - >-
          envCache --set stackInfo "$(amplify env get --json --name
          dev)"
```

1. Review your changes and then choose **Save and deploy**
