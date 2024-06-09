import dotenv from "dotenv";

function configEnv(path) {
  dotenv.config({
    path,
  });
}

export default configEnv;
