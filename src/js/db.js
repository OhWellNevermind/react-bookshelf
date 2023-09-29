import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';

const db = getDatabase(app);

export function writeUserData(userId, books) {
  set(ref(db, 'users/' + userId), {
    books,
  });
}
