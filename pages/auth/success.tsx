// pages/auth/success.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AuthSuccess() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [tokens, setTokens] = useState<any>(null);

  useEffect(() => {
    const { access_token, refresh_token, expires_in } = router.query;
    
    if (access_token && refresh_token) {
      setTokens({
        access_token,
        refresh_token,
        expires_in
      });
    }
  }, [router.query]);

  const copyTokens = () => {
    if (tokens?.refresh_token) {
      navigator.clipboard.writeText(tokens.refresh_token as string);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#28a745' }}>
           Zoho CRM Authorization Successful!
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Your tokens have been generated successfully. Save your refresh token securely.
        </p>

        {tokens ? (
          <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h3>Your Tokens:</h3>
            <p><strong>Access Token:</strong> {(tokens.access_token as string).substring(0, 20)}...</p>
            <p><strong>Refresh Token:</strong> {(tokens.refresh_token as string).substring(0, 20)}...</p>
            <p><strong>Expires in:</strong> {tokens.expires_in} seconds</p>
            
            <button 
              onClick={copyTokens}
              style={{
                backgroundColor: copied ? '#28a745' : '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              {copied ? ' Copied!' : ' Copy Refresh Token'}
            </button>
          </div>
        ) : (
          <p>Loading tokens...</p>
        )}

        <div style={{ 
          background: '#fff3cd', 
          padding: '1rem', 
          borderRadius: '6px', 
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#856404'
        }}>
          <strong> Next Steps:</strong>
          <ol style={{ textAlign: 'left', marginTop: '0.5rem' }}>
            <li>Copy your refresh token using the button above</li>
            <li>Add it to your .env.local file as ZOHO_REFRESH_TOKEN</li>
            <li>Restart your development server</li>
            <li>Test the lead creation functionality</li>
          </ol>
        </div>

        <button
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '14px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '2rem'
          }}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
