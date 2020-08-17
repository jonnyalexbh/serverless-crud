# Serverless Framework CRUD

**Create project**

```sh
$ sls create -t aws-nodejs -p serverless-crud
```

**Serverless offline**

```sh
$ sls offline
```

**Create migrations & seeders**

```sh
$ sls migrations create -n create-author
$ sls migrations create -n create-publication
$ sls migrations up
$ sls migrations down
```
