const ENVIRONMENT = process.env.NODE_ENV;
const isLocal = ENVIRONMENT === "development";
const isProduction = ENVIRONMENT === "production";

const constants = {
  ENVIRONMENT,
  isLocal,
  isProduction,
};

export default constants;
