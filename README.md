# Gatsby Auth Starter AWS
Gatsby starter with user authentication using Amazon Cognito.

## Getting Started

1. Create the project

```sh
gatsby new my-aws-project https://github.com/dabit3/gatsby-auth-starter-aws-amplify
```

2. Change into the new directory

```sh
cd my-aws-project
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

> If you don't already have the AWS Amplify CLI installed & configured, click [here](https://aws-amplify.github.io/amplify-js/index.html) to do so.

```
amplify init
```

6. Add authentication to your AWS Aplify project

```sh
amplify auth add
```

7. Publish the updated project configuration to AWS

```sh
amplify publish
```

8. Then you can run it by:
```sh
gatsby develop
```
