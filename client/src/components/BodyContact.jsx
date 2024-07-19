// import { useState } from "react";
// import "../styles/BodyContact.css"; 
// // import emailjs from "@emailjs/browser"

// function BodyContact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateId = "template_9cygyff";
//     const serviceId = "service_w9e9eqs";
//   //   // sendFeedback(serviceId, templateId, {
//   //     firstName: formData.firstName,
//   //     lastName: formData.lastName,
//   //     phone: formData.phone,
//   //     email: formData.email,
//   //     message: formData.message,
//   //   });
//   //   e.target.reset();
//   // };

//   const sendFeedback = (serviceId, templateId, variables) => {
//     emailjs
//       .send(serviceId, templateId, variables, 'YOUR_USER_ID') // Remplacez 'YOUR_USER_ID' par votre vrai user ID de EmailJS
//       .then((res) => {
//         // console.log('Email envoyé avec succès !');
//       })
//       .catch((err) => {
//         // console.error('Échec de l\'envoi de l\'email :', err);
//       });
//   };

//   return (
//     <div className="body-contact">
//       <div className="container-contact">
//         <h2>Contactez-nous</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstName">Prénom</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Nom</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Numéro de téléphone</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Adresse e-mail</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Envoyer</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BodyContact
