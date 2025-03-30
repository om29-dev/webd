import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (isForgotPassword) {
      if (!email) {
        setError('Please enter your email');
        return;
      }

      setLoading(true);
      try {
        // Simulate OTP API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSuccessMessage('OTP has been sent to your email!');
        setTimeout(() => {
          navigate('/reset-password', { state: { email } });
        }, 2000);
      } catch (err) {
        setError('Failed to send OTP. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSuccessMessage('Login successful!');
        setEmail('');
        setPassword('');
      } catch (err) {
        setError('Failed to login. Please check your credentials.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="login-form p-4 shadow">
            <h2 className="text-center mb-4">
              {isForgotPassword ? 'Reset Password' : 'Sign In'}
            </h2>

            {error && <Alert variant="danger" dismissible onClose={() => setError('')}>{error}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {!isForgotPassword && (
                <>
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formRememberMe" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  </Form.Group>
                </>
              )}

              <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                  </>
                ) : isForgotPassword ? (
                  'Send OTP'
                ) : (
                  'Sign In'
                )}
              </Button>

              <div className="text-center mb-3">
                {isForgotPassword ? (
                  <Button variant="link" onClick={() => setIsForgotPassword(false)}>
                    Back to Login
                  </Button>
                ) : (
                  <Button variant="link" onClick={() => setIsForgotPassword(true)}>
                    Forgot password?
                  </Button>
                )}
              </div>

              {!isForgotPassword && (
                <div className="text-center">
                  <p className="mb-0">Don't have an account? <Link to='/signup'>Sign up</Link></p>
                </div>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;