import fs from 'fs';
// const TODOS_FILE = '/tmp/todos.json';
import admin from '../firebase/firebaseNode';

export function addTodo(text) {
  const todos = listTodos();
  todos.push(text);
  console.log(`todos = ${todos}`);
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos));
}

export async function listTodos() {
  let todos = [];
  try {
    // todos = JSON.parse(fs.readFileSync(TODOS_FILE));
    const db = admin.firestore();
    const profileCollection = db.collection('nirparisian'); // username
    const profileTodos = await profileCollection.doc('todos').get();
    todos = profileTodos.data();
  } catch (err) {
    console.warn(`no todos file found - returning an empty list`);
  }
  return todos;
}
