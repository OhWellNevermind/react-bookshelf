import { getDatabase, ref, child, get, push, remove } from 'firebase/database';
import { app } from './firebase';

const db = getDatabase(app);

// export function writeUserData(userId, books) {
//   set(ref(db, 'users/' + userId), {
//     books,
//   });
// }

export async function addBook(userId, book) {
  const booksListRef = ref(db, `users/${userId}/books`);
  push(booksListRef, book);
}

export async function deleteBook(userId, bookId) {
  const saved = await getUsersBooks(userId);
  Object.entries(saved).forEach(book => {
    if (book[1]._id === bookId) {
      remove(ref(db, `users/${userId}/books/${book[0]}`));
    }
  });
}

export async function getUsersBooks(userId) {
  if (userId) {
    const dbRef = ref(db);
    return get(child(dbRef, `users/${userId}/books`)).then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return;
      }
    });
  }
}
