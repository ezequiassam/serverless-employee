**Serveless Employee**
----

Retornando todos os funcionários cadastrados.
----

* **URL**

  /dev/employee

* **Method:**

  `GET`

* **URL Params**
  None

* **Data Params**

  None

* **Success Response:**


* **Code:** 200 <br />
  **
  Content:** `{"code":0,"message":"success","data":[{"_id":"60897c860f160ce286a58554","name":"Nome","id":1,"createdAt":"2021-04-28T15:17:26.689Z","modifiedAt":"2021-04-28T15:17:26.689Z"}]}`

* **Error Response:**


* **Code:** 200 ERROR <br />
  **Content:** `{"code":0,"message":"error"`

Retorna um funcionário.
----

* **URL**

  /dev/employee/{id}

* **Method:**

  `GET`

* **URL Params**
  `id=[number]`


* **Data Params**

  None

* **Success Response:**


* **Code:** 200 <br />
  **
  Content:** `{"code":0,"message":"success","data":{"_id":"60897c860f160ce286a58554","name":"Nome","id":1,"createdAt":"2021-04-28T15:17:26.689Z","modifiedAt":"2021-04-28T15:17:26.689Z"}}`

* **Error Response:**


* **Code:** 200 ERROR <br />
  **Content:** `{"code":0,"message":"error"`

Criando um funcionário
----

* **URL**

  /dev/employee

* **Method:**

  `POST`

* **URL Params**
  None


* **Data Params**

  ``
  {
  "id": number,
  "name": string,
  "age": number,
  "role": string }
  ``

* **Success Response:**


* **Code:** 200 <br />
  **
  Content:** `{"code":0,"message":"success","data":{"_id":"60897c860f160ce286a58554","name":"Nome","id":1,"createdAt":"2021-04-28T15:17:26.689Z","modifiedAt":"2021-04-28T15:17:26.689Z"}}`

* **Error Response:**


* **Code:** 200 ERROR <br />
  **Content:** `{"code":0,"message":"error"}`

Atualizando um funcionário
----

* **URL**

  /dev/employee/{id}

* **Method:**

  `PUT`

* **URL Params**
  `id=[number]`


* **Data Params**

  ``
  {
  "id": number,
  "name": string,
  "age": number,
  "role": string }
  ``

* **Success Response:**


* **Code:** 200 <br />
  **
  Content:** `{"code":0,"message":"success","data":{}}`

* **Error Response:**


* **Code:** 200 ERROR <br />
  **Content:** `{"code":0,"message":"error"}`

Removendo um funcionário
----

* **URL**

  /dev/employee/{id}

* **Method:**

  `DELETE`

* **URL Params**
  `id=[number]`


* **Data Params**
  None

* **Success Response:**


* **Code:** 200 <br />
  **
  Content:** `{"code":0,"message":"success","data":{}}`

* **Error Response:**


* **Code:** 200 ERROR <br />
  **Content:** `{"code":0,"message":"error"}`
