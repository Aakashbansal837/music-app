import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });
export const doUpdateUser = (id , array) =>
    db.ref(`users/${id}`).update({
        array,
    })

export const onceGetUsers = () =>
    db.ref('users').once('value');

export const getvideo = () =>
	db.ref('songs').once('value');
