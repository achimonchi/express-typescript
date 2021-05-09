# Simple Project with Express Typescript Sequelize Mysql

## Install
Clone project ini dengan cara :
```bash
$ git clone -b master https://github.com/achimonchi/express-typescript.git <namafolder>
```
Jika sudah di clone, lakukan :
```bash
$ cd <namafolder>
$ npm run tsc
```
hal ini akan menjalankan makefile untuk melakukan init dan migrate dari sequelize.

## Setup Projec
1. Install Database MySQL

    Pastikan mysql telah terinstall. Atau jika menggunakan docker, bisa melakukan :
    ```bash
    $ sh script/db.sh
    ```
2. Buat ENV variable

    Buat sebuah `.env` mengikuti contoh pada file `.env.sample`. 

3. Jalankan Project

    Untuk menjalankan project, lakukan :
    ```bash
    $ npm run dev
    ```

## API Spec
Pada project ini, hanya menggunakan 1 modul yaitu modul user. Adapun base url dari project ini adalah `localhost:<port>/api/v1/`

### GET /users
Endpoint ini berfungsi untuk menampilkan seluruh data user.

Request Header 
```bash
{
    headers : {}
}
```
Request Params
```bash
BASE_URL/users?limit=<limit>&page=<page>
```
keterangan :
- limit [integer] : secara default, bernilai 5
- page [integer] : secara default, bernilai 0

Request Body
```bash
{}
```

Response
```javascript
{
    status : 200,
    data : {
        limit : number,
        page : number,
        count : number,
        users : [
            {
                id : number,
                fullname : stirng,
                email : stirng,
                majors: string,
                createdAt : string,
                updatedAt : string
            }
        ]
    }
}
```

### GET /users/:id
Endpoint ini berfungsi untuk menampilkan user berdasarkan ID.

Request Header 
```bash
{
    headers : {}
}
```
Request Params
```bash
BASE_URL/users/:id
```
keterangan :
- id [integer]

Request Body
```bash
{}
```

Response
```javascript
{
    status : 200,
    data : {
        id : number,
        fullname : stirng,
        email : stirng,
        majors: string,
        createdAt : string,
        updatedAt : string
    }
}
```

### POST /users
Endpoint ini berfungsi untuk menambah / membuat user baru

Request Header 
```bash
{
    headers : {}
}
```
Request Params
```bash
BASE_URL/users/
```

Request Body
```javascript
{
    fullname : string, // required
    majors : string, // required
    email : string, // required
}
```

Response
```javascript
{
    status : 201,
    msg : "User created !",
    data : {
        id : number, // auto increament
        fullname : string,
        majors: string,
        email : string,
        createdAt : time,
        updatedAt : time
    }
}
```

### PUT /users/:id
Endpoint ini berfungsi untuk mengubah data user

Request Header 
```bash
{
    headers : {}
}
```
Request Params
```bash
BASE_URL/users/:id
```

Request Body
```javascript
{
    fullname : string, // required
    majors : string, // required
    email : string, // required
}
```

Response
```javascript
{
    status : 200,
    msg : "Update success !",
    data : {
        fullname : string,
        majors: string,
        email : string,
    }
}
```

### DELETE /users/:id
Endpoint ini berfungsi untuk menghapus data user

Request Header 
```bash
{
    headers : {}
}
```
Request Params
```bash
BASE_URL/users/:id
```

Request Body
```javascript
{}
```

Response
```javascript
{
    status : 200,
    msg : "Delete success !",
}
```