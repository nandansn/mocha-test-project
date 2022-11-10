const l = require('lodash')

const { assert } = require("chai");

let test_data = [
  {
    id: 123,
    name: "c_1",
    payload: {
      city: "erode",
    },
    states: ["TX", "IN"],
  },
  {
    id: 124,
    name: "c_2",
    payload: {
      state: "kovai",
    },
    states: ["IN", "IN"],
  },
];

let transformed_test_data = [];

l.forEach(test_data, function (data) {
    let carrier_states = data.states
    l.forEach(carrier_states, function (state) {
        let transformed_payload = l.cloneDeep(data.payload)
        transformed_payload["state"] = state
        transformed_test_data.push(transformed_payload);

    })
    
})

 function testApi() {
  let testObj = this;
  it('', async function () {
    await apiCall()
    assert.equal(testObj.state, "IN");
  } );

 }

function apiCall() {
  return new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
      console.log("in time out");
      resolve("done");
    }, 1000);
  });
}

describe('State Suite', () => {
  transformed_test_data.forEach((data) => {
    testApi.call(data);
  });
});

