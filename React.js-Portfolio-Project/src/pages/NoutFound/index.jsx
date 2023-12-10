import { Link } from 'react-router-dom';

export const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{fontSize: 20}}>Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link
        style={{
          textDecoration: 'underline',
          color: 'blue',
        }}
        to="/"
      >
        Back to our site
      </Link>
    </div>
  );
};
