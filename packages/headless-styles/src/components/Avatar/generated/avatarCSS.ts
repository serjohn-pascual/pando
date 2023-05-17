// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
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
  pando_avatarImage: {
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeInAnimation',
    animationTimingFunction: 'ease-in-out',
    height: '100%',
    left: '0',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    width: '100%',
  },
  keyframesPopInAnimation: {
    '@keyframes popInAnimation': {
      from: {
        opacity: '0',
        transform: 'scale(0.9)',
      },
      to: {
        opacity: '1',
        transform: 'scale(1)',
      },
    },
  },
  pando_defaultAvatar: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    fontFamily: 'inherit',
    '&:is([aria-disabled=true], :disabled)': {
      opacity: '0.5',
    },
    alignItems: 'center',
    appearance: 'none',
    aspectRatio: '1/1',
    backgroundColor: 'var(--ps-background)',
    border: 'none',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0',
    position: 'relative',
    userSelect: 'none',
    color: 'var(--ps-text-medium)',
  },
  pando_actionAvatar: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
    fontFamily: 'inherit',
    '&:is([aria-disabled=true], :disabled)': {
      opacity: '0.5',
    },
    alignItems: 'center',
    appearance: 'none',
    aspectRatio: '1/1',
    backgroundColor: 'var(--ps-action-background)',
    border: 'none',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0',
    position: 'relative',
    userSelect: 'none',
    color: 'var(--ps-action-text)',
  },
  pando_avatarLabel: {
    fontVariationSettings: '"wght" 500',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  pando_xsAvatar: {
    height: '2rem',
    width: '2rem',
  },
  pando_xsAvatarLabel: {
    fontSize: '0.875rem',
    lineHeight: '0',
  },
  pando_sAvatar: {
    height: '3rem',
    width: '3rem',
  },
  pando_sAvatarLabel: {
    fontSize: '1.25rem',
  },
  pando_mAvatar: {
    height: '5rem',
    width: '5rem',
  },
  pando_mAvatarLabel: {
    fontSize: '2.25rem',
  },
  pando_lAvatar: {
    height: '7.5rem',
    width: '7.5rem',
  },
  pando_lAvatarLabel: {
    fontSize: '3rem',
  },
  pando_xlAvatar: {
    height: '10rem',
    width: '10rem',
  },
  pando_xlAvatarLabel: {
    fontSize: '3.75rem',
  },
} satisfies GeneratedStyles
