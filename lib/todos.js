// import fs from 'fs';
// const TODOS_FILE = '/tmp/todos.json';
import admin from '../firebase/nodeApp';

export function addTodo(text) {
  const todos = listTodos();
  todos.push(text);
  console.log(`todos = ${todos}`);
  // fs.writeFileSync(TODOS_FILE, JSON.stringify(todos));
  // const db = admin.firestore();
  // const profileCollection = db.collection('nirparisian'); // username
  // const todosDoc = await profileCollection.doc('todos').get();

  // todosDoc.set({[text]: false}, {merge: true})
}

export async function listTodos() {
  const db = admin.firestore();
  const profileCollection = db.collection('nirparisian'); // username
  const todosDoc = await profileCollection.doc('todos').get();

  let todos = [];
  try {
    // todos = JSON.parse(fs.readFileSync(TODOS_FILE));
    todos = await todosDoc.data();
  } catch (err) {
    console.warn(`no todos file found - returning an empty list`);
  }
  return todos;
}
