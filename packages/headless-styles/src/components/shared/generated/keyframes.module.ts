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
  pandoFadeIn: {
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeInAnimation',
    animationTimingFunction: 'ease-in-out',
  },
} satisfies GeneratedStyles
