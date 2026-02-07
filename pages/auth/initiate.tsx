// pages/auth/initiate.tsx
import { useRouter } from 'next/router';
export default function AuthInitiate() {
  const router = useRouter();

  const startZohoAuth = () => {
    const zohoAuthUrl = "https://accounts.zoho.com/oauth/v2/auth";
    
    const params = new URLSearchParams({
      scope: "ZohoCRM.modules.ALL,ZohoCRM.settings.ALL",
      client_id: "1000.DIQB96LPVFS5KA3HVHL5IBT6CI977X",
      response_type: "code",
      access_type: "offline",
      redirect_uri: "http://localhost:3000/api/auth/zoho/callback",
      state: Math.random().toString(36).substring(7)
    });

    window.location.href = `${zohoAuthUrl}?${params.toString()}`;
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          🔐 Zoho CRM Authorization
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Authorize Phomax to access your Zoho CRM for lead management and customer data.
        </p>

        <button
          onClick={startZohoAuth}
          style={{
            backgroundColor: '#0088cc',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Authorize Zoho CRM
        </button>

        <div style={{ marginTop: '3rem', maxWidth: '600px', textAlign: 'left' }}>
          <h3>📋 Steps:</h3>
          <ol>
            <li>Click "Authorize Zoho CRM" button</li>
            <li>Log in to your Zoho account (if not already)</li>
            <li>Grant permission to Phomax Integration</li>
            <li>You'll be redirected back with your tokens</li>
            <li>Save your refresh token in .env.local file</li>
          </ol>

          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '6px', 
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: '#6c757d'
          }}>
            <strong>⚠️ Important:</strong> Keep your refresh token secure and never expose it in frontend code.
          </div>
        </div>
      </div>
    </div>
  );
}
