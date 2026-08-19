/**
 * Small reusable utility module for generating readable, unique-enough IDs
  * without pulling in an external dependency.
   */
   let counter = 0;

   export function generateId(prefix = "item") {
   counter += 1;
   const timestamp = Date.now().toString(36);
   return `${prefix}-${timestamp}-${counter}`;
   }
