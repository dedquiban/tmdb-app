import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';
import { selectUser } from '../store/user/user.slice';
import { toast } from 'react-toastify';
import {
  EmailVerifiedOverlayContainer,
  Message,
  Spinner,
} from '../styles/email-verified-overlay.styles';
import { sendAuthEmailVerification } from '../utils/firebase.utils';
import { auth } from '../utils/firebase.utils';

const EmailVerifiedOverlay = () => {
  const ref = useRef(null);
  const { isEmailOverlayActive, setIsEmailOverlayActive } =
    useContext(AppContext);

  const currentUser = useSelector(selectUser);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsEmailOverlayActive(false);
        setStatus('idle');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  const resendEmailVerification = async () => {
    const promise = new Promise(async (resolve, reject) => {
      await sendAuthEmailVerification(auth.currentUser)
        .then(() => {
          resolve(console.log('verification sent'));
          setStatus('sent');
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/too-many-requests':
              setStatus('wait');
            default:
              error.code = error.code;
          }
          reject(toast(error.code));
        });
    });
  };

  return (
    <EmailVerifiedOverlayContainer isEmailOverlayActive={isEmailOverlayActive}>
      <Message ref={ref}>
        <h3>
          Hi <span>{currentUser?.email}</span>,
        </h3>
        <button
          onClick={
            status === 'idle' || status === 'wait'
              ? () => resendEmailVerification()
              : undefined
          }
        >
          {status === 'idle' && <p>Verify email</p>}
          {status === 'wait' && <p>Wait a minute</p>}
          {status === 'sent' && <p>Sent</p>}
        </button>
      </Message>
    </EmailVerifiedOverlayContainer>
  );
};

export default EmailVerifiedOverlay;
