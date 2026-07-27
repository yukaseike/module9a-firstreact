function UserProfile() {
  const name = "Yuka Seike";
  const bio = "UX Designer passionate about creating user-friendly designs and applications.";
const profileImage = "https://images.unsplash.com/photo-1541130292430-a832637ddc0d?w=150&h=150&fit=crop&crop=face";
  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;