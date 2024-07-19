// // server/models/userRepository.js
// const AbstractRepository = require('./abstractRepository');
// const bcrypt = require('bcryptjs');

// class UserRepository extends AbstractRepository {
//   constructor() {
//     super({ table: 'users' });
//   }

//   async findByUsername(username) {
//     const result = await this.database.query('SELECT * FROM users WHERE username = $1', [username]);
//     return result.rows[0];
//   }

//   async createUser(username, password) {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await this.database.query(
//       'INSERT INTO users (username, password, is_admin) VALUES ($1, $2, true) RETURNING *',
//       [username, hashedPassword]
//     );
//     return result.rows[0];
//   }

//   async matchPassword(enteredPassword, storedPassword) {
//     return await bcrypt.compare(enteredPassword, storedPassword);
//   }
// }

// module.exports = new UserRepository();
