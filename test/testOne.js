const { assert } = require('chai');
let config = require('../service.json')
let service = require('../service-client/user_service_client.js')

var expect = require('chai').assert




describe('test user service', function () {

    describe('test get api - positive usecases', function ()  {
        it("test get user", async function () {
         
          let res = await service.getUsers()
          assert.equal(res.data.data.length,5)

          })
        });
    });
    