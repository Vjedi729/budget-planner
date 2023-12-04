import "@rschedule/standard-date-adapter/setup";
// Other date adapters also exist, though
// you can only import one date adapter in a project.
// For example:
//   import '@rschedule/moment-date-adapter/setup';
//   import '@rschedule/moment-tz-date-adapter/setup';
//   import '@rschedule/luxon-date-adapter/v1/setup';
//   import '@rschedule/joda-date-adapter/setup';
//   import '@rschedule/dayjs-date-adapter/setup';

import "@rschedule/json-tools/setup"; // <-- optional json support

export * from "@rschedule/standard-date-adapter";
export * from "@rschedule/core";
export * from "@rschedule/core/generators";