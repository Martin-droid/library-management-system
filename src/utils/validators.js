/**
 * Reusable validation helpers shared across services.
  */
export function assertRequiredFields(data, fields) {
  const missing = fields.filter((field) => data[field] === undefined || data[field] === null || data[field] === "");
  if (missing.length > 0) {
    throw new Error(`Missing required field(s): ${missing.join(", ")}`);
  }
}

    export function isNonEmptyString(value) {
      return typeof value === "string" && value.trim().length > 0;
    }
