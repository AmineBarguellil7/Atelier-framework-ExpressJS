const express = require("express");
const os = require("os");
const router = express.Router();

router.get("/", (req, res) => {
  const osInfo = {
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
  };
  res.json(osInfo);
});

router.get("/cpus", (req, res) => {
  const cpus = os.cpus();
  res.send(cpus);
});

router.get("/cpus/:id", (req, res) => {
  const cpus = os.cpus();
  const id = req.params.id;
  const cpu = cpus[id];
  if (cpu) {
    res.send(cpu);
  } else {
    res.status(404).send("CPU not found");
  }
});

module.exports = router;
