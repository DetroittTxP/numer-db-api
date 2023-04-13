const swaggerauto = require('swagger-autogen');

const outputFile = './swaggerDOCS.json'
const endpointsFiles = ['./server']

swaggerauto(outputFile, endpointsFiles)