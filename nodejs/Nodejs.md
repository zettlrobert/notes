# Nodejs

## Setup Nodejs and express with Typescript
1. install typescript globally `npm i -g typescript`
2. init typescript `tsc --init`
3. configure tsconfig
4. install dev dependencys 
5. `npm i -D typescript ts-node nodemon @types/node @types/express`
6. Add scripts
	1. start script
		1. `node dist/app.js`
	2. dev script
		1. `nodemon src/app.ts`
	3. build
		1. `tsc -p .`

#### Linting
1. install tslint
	1. `npm i -D tslint`
2. `tslint --init`
3. edit .eslint.json

### What is HTTP(Hyper Text Transfer Protocol)
- communication between web servbers & clients
- HTTP Requests / Responses
	- GET
	- DELETE
	- PUT
	- PATCH
	- UPDATE
- includes headrs & body
	- every request has a 'Content-type'
	- every response has a 'Content-type'
	- res.write sends something can be called multiple times
	
### HTTP Status Codes
- from 100 to 500 range
- [All Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Sending Data to the Server
- values for example JSON Webtokens can be sent in the header
- request is a readable stream 
```
req.on('data', chunk => {
	body.push(chunk);
}).on('end', () => {
	body = Buffer.concat(body);
	console.log(body)
})
```` 

### HTTP Methods & RESTful APIs
### Routes
prefix apis with /api/verssion/endpoint
- /api/v1/something

### Express Router
