declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: "dev" | "prod" | "debug";
      ACCELERATE_URL?: string;
      DATABASE_UR?: string;
    }
  }
}

export default {};
