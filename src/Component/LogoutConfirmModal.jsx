import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, IconButton,
} from '@mui/material';
import { Logout as LogoutIcon, Close as CloseIcon, WarningAmberRounded } from '@mui/icons-material';

export default function LogoutConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: '18px',
          padding: '8px',
          maxWidth: 400,
          width: '100%',
        },
      }}
    >
      <DialogTitle style={{ paddingBottom: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: '#fee2e2', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <WarningAmberRounded style={{ color: '#dc2626', fontSize: 22 }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a3c5e' }}>
            Confirm Logout
          </span>
          <IconButton
            size="small"
            onClick={onClose}
            style={{ marginLeft: 'auto', color: '#9e9e9e' }}
          >
            <CloseIcon style={{ fontSize: 18 }} />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent style={{ paddingTop: 16 }}>
        <DialogContentText style={{ color: '#616161', fontSize: '0.9375rem', lineHeight: 1.6 }}>
          Are you sure you want to log out? You will need to sign in again to access your account.
        </DialogContentText>
      </DialogContent>

      <DialogActions style={{ padding: '8px 24px 20px', gap: 8 }}>
        <button
          onClick={onClose}
          style={{
            flex: 1, padding: '10px 0', border: '1.5px solid #e0e0e0',
            borderRadius: 12, background: '#fff', color: '#616161',
            fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#f5f5f5'}
          onMouseOut={e => e.currentTarget.style.background = '#fff'}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          style={{
            flex: 1, padding: '10px 0', border: 'none',
            borderRadius: 12, background: '#dc2626', color: '#fff',
            fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
          onMouseOver={e => e.currentTarget.style.background = '#b91c1c'}
          onMouseOut={e => e.currentTarget.style.background = '#dc2626'}
        >
          <LogoutIcon style={{ fontSize: 16 }} />
          Yes, Logout
        </button>
      </DialogActions>
    </Dialog>
  );
}