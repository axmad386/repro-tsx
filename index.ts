import Bree from "bree";
const schedule = new Bree({
  hasSeconds: true,
  jobs: [
    {
      cron: "*/10 * * * * *",
      name: "hello script",
      path: async () => {
        const { workerData } = await import("node:worker_threads");
        console.log({ workerData });
      },
      worker: {
        workerData: {
          foo: "bar",
        },
      },
    },
  ],
  doRootCheck: false,
  root: false,
});
await schedule.start();
