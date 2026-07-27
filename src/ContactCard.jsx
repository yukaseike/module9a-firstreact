function ContactCard() {
  const email = "yuka_seike@student.smc.edu";
  const phone = "(123) 456-7890";
  const location = "Marina del Rey, CA";

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>Contact Info</h2>
      <p style={{ fontSize: '16px', color: '#555', margin: '8px 0' }}>📧 {email}</p>
      <p style={{ fontSize: '16px', color: '#555', margin: '8px 0' }}>📞 {phone}</p>
      <p style={{ fontSize: '16px', color: '#555', margin: '8px 0' }}>📍 {location}</p>
    </div>
  );
}

export default ContactCard;