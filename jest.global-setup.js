module.exports = async () => {
  process.env.API_URL = '/dev/employee'
  console.log('API url set: ', process.env.API_URL)
};
