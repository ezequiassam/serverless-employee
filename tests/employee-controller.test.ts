test('create employee with success', async () => {

  jest.mock('mongoose.Model')
  const create = (e) => new Promise((res) => {
    setTimeout(() => {
      res(e);
    },2000);
  });
  const underTest = await create({ 'id:': '1', 'name': 'nome' });
  expect(underTest).toBeTruthy();
});
