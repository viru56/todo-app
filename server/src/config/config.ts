// containter for all environments

const environments = {
  development: {},
  production: {},
  testing: {}
};

// development environment (default)
environments.development = {
  httpPort: 3000,
  hostName: "http://127.0.0.1:3000",
  envName: "development",
  secret: "thisisasecret",
  mongoUrl:
    "mongodb+srv://viru1:viru1@cluster-todo-th79s.mongodb.net/test?retryWrites=true&w=majority",
};

// production environment
environments.production = {
  httpPort: 3000,
  hostName: "http://127.0.0.1:3000",
  envName: "production",
  secret: "thisisasecret",
  mongoUrl:
    "mongodb+srv://viru1:viru1@cluster-todo-th79s.mongodb.net/test?retryWrites=true&w=majority"
};

// testing environment
environments.testing = {
  httpPort: 1000,
  hostName: "http://127.0.0.1:1000",
  envName: "testing",
  secret: "thisistestingsecret",
  mongoUrl:
    "mongodb+srv://viru1:viru1@cluster-todo-th79s.mongodb.net/test?retryWrites=true&w=majority",
};

// determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == "string" && process.env.NODE_ENV.trim() !== ""
    ? process.env.NODE_ENV
    : "development";

//chech that the current environment is one of the environments above, if not, default to development
// export the module
export const config =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.development;
