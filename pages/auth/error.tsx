// pages/auth/error.tsx
import { useRouter } from 'next/router';

export default function AuthError() {
  const router = useRouter();
  const message = router.query.message as string || 'Unknown error occurred';

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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#dc3545' }}>
           Zoho CRM Authorization Failed
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          {message}
        </p>

        <div style={{ 
          background: '#f8d7da', 
          padding: '1rem', 
          borderRadius: '6px', 
          marginBottom: '2rem',
          fontSize: '0.9rem',
          color: '#721c24'
        }}>
          <strong> Troubleshooting:</strong>
          <ul style={{ textAlign: 'left', marginTop: '0.5rem' }}>
            <li>Check your Zoho client credentials</li>
            <li>Ensure redirect URI matches in Zoho console</li>
            <li>Verify your Zoho account has CRM access</li>
            <li>Try authorizing again</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => window.location.href = '/auth/initiate'}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              fontSize: '14px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              fontSize: '14px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
