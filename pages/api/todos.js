// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const todos = require('../../lib/todos');

export default async function handler(req, res) {
  console.log(req.body);
  todos.addTodo(req.body);
  res.status(200).json(await todos.listTodos());
}
