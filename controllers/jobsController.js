const createJob = async (req, res) => {
  res.send("ساخت کار");
};

const getAllJobs = async (req, res) => {
  res.send("get all job");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

const showStats = async (req, res) => {
  res.send("show Stats");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
