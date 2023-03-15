### Details
This is a simple CRUD made with NodeJS + MongoDB + Serverless.

### Prequisites
These are the list of things that you need to do before you can install this API in your local. Please check in your own local machine whether you already have the tools or not. Feel free to install if you don't have it.
- Make sure you already have [serverless](https://www.serverless.com/blog/getting-started-with-serverless-framework) in your local machine. 
- To make it easier, you can install [serverless-offline plugin](https://www.serverless.com/plugins/serverless-offline) in your local machine.
- Make sure you have [postman](https://www.postman.com/) in your local machine to test the API using HTTP Request

### How to install
- clone this project with running 
```shell
git clone git@github.com:waggyman/crud-nodejs-serverless.git
```
- go inside the project
```shell
cd crud-nodejs-serverless
```
- install the needed packages with running npm command
```shell
npm install
```
- Once the installation done, you can run the application easily with
```shell
<!-- If you are willing to run and deploy --!>
serverless deploy 

<!-- OR --!>
<!-- If you want to run it in your local using serverless-offline --!>
serverless offline start
```

- Once the application running you can using postman to test the API using HTTP Request. You can check it under http://localhost:3000
- You can also download the sample collection from here. Then you can import it to your own Postman