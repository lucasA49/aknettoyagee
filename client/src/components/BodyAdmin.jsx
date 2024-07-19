// import '../styles/BodyAdmin.css';

// function BodyAdmin() {
//   const [isLogin, setIsLogin] = useState(true); 
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error] = useState(''); // Ajout de setError pour utiliser cette variable

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ajoutez votre logique de soumission ici
//   };

//   return (
//     <div className="container-auth">
//       <div className="carte">
//         <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
//         {error && <div className="erreur">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="groupe-formulaire">
//             <label htmlFor="username">Nom d'utilisateur</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="groupe-formulaire">
//             <label htmlFor="password">Mot de passe</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">{isLogin ? 'Connexion' : 'Inscription'}</button>
//           <div className="alternatif">
//             <p className='texte-alternatif'>
//               {isLogin ? "Tu n'as pas de compte ?" : 'Tu as un compte ?'}
//               <button type="button" onClick={() => setIsLogin(!isLogin)}>
//                 {isLogin ? 'Inscription' : 'Connexion'}
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BodyAdmin;

