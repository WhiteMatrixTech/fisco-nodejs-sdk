const decode = require("./api/decoder");

// let abi = getAbi(contractName, pureFunctionName, inputs);
let decoder = decode.createMethodDecoder(abi, null);
