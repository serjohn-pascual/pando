// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  root: {
    '--ps-backdrop': 'rgba(0 0 0 / 65%)',
  },
  html: {
    '&[data-theme=light]': {
      '--ps-backdrop': 'rgba(255 255 255 / 65%)',
    },
  },
  light: {
    '--ps-backdrop': 'rgba(255 255 255 / 65%)',
  },
  pando_alertDialogBackdrop: {
    background: 'var(--ps-backdrop)',
    height: '100vh',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100vw',
    zIndex: '1300',
  },
  pando_alertDialogFooter: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '1.5rem',
  },
  pando_alertFocusGuard: {
    height: '0',
    left: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'fixed',
    top: '1px',
    width: '1px',
  },
  pando_alertDialogSection: {
    WebkitAnimationDelay: '100ms',
    animationDelay: '100ms',
    background: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border-weak)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.01), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    color: 'var(--ps-text)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'inherit',
    marginBottom: '3.75rem',
    marginTop: '3.75rem',
    maxWidth: '50ch',
    opacity: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    paddingBottom: '1.5rem',
    WebkitPaddingEnd: '1.5rem',
    paddingInlineEnd: '1.5rem',
    WebkitPaddingStart: '1.5rem',
    paddingInlineStart: '1.5rem',
    position: 'relative',
    width: '100%',
    zIndex: '1400',
    WebkitAnimationDuration: '150ms',
    animationDuration: '150ms',
    WebkitAnimationFillMode: 'forwards',
    animationFillMode: 'forwards',
    WebkitAnimationName: 'fadeInAnimation',
    animationName: 'fadeInAnimation',
    WebkitAnimationTimingFunction: 'ease-in-out',
    animationTimingFunction: 'ease-in-out',
  },
  pando_alertDialogWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    height: '100dvh',
    justifyContent: 'center',
    left: '0',
    overflow: 'auto',
    position: 'fixed',
    top: '0',
    width: '100vw',
    zIndex: '1400',
  },
  pando_alertDialogHeader: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: '1.5rem',
    marginTop: '2rem',
  },
  pando_alertDialogTitleIcon: {
    color: 'var(--ps-danger-border)',
    lineHeight: 'initial',
    WebkitMarginEnd: '0.625rem',
    marginInlineEnd: '0.625rem',
  },
  keyframesFadeInAnimation: {
    '@keyframes fadeInAnimation': {
      from: {
        opacity: '0',
      },
      to: {
        opacity: '1',
      },
    },
  },
  keyframesPopInAnimation: {
    '@keyframes popInAnimation': {
      from: {
        opacity: '0',
        WebkitTransform: 'scale(0.9)',
        transform: 'scale(0.9)',
      },
      to: {
        opacity: '1',
        WebkitTransform: 'scale(1)',
        transform: 'scale(1)',
      },
    },
  },
  pando_alertDialogLabel: {
    display: 'block',
    fontVariationSettings: '"wght" 500',
    fontWeight: '500',
    marginTop: '1.2rem',
  },
  pando_alertDialogInputWrapper: {
    marginTop: '1rem',
  },
} satisfies GeneratedStyles
