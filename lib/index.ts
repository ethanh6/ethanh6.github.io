export const getEnvironmentVariable = (envVar: string): string => {
  const unvalidatedEnvVar = process.env[envVar];
  if (!unvalidatedEnvVar) {
    throw new Error(`Could not load environment variable ${envVar}`);
  } else {
    return unvalidatedEnvVar;
  }
};
