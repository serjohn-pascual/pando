import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  const baseClass = 'pando-progress'
  const ariaLabel = 'test progress bar'
  const a11yProps = {
    'aria-label': ariaLabel,
    'aria-valuemax': 100,
    'aria-valuemin': 0,
    'aria-valuenow': 0,
    role: 'progressbar',
  }
  const result = {
    bar: {
      ...a11yProps,
      className: `${baseClass}-bar bar sSize linear`,
      style: {
        width: '0%',
      },
    },
    wrapper: {
      className: `${baseClass} wrapper sSize linear`,
    },
  }

  test('should accept an ariaLabel', () => {
    expect(getProgressProps({ ariaLabel: 'test aria label' })).toEqual({
      ...result,
      bar: { ...result.bar, 'aria-label': 'test aria label' },
    })
  })

  test('should accept a kind type', () => {
    expect(getProgressProps({ ariaLabel, kind: 'linear' })).toEqual(result)
    expect(getProgressProps({ ariaLabel, kind: 'inset', now: 80 })).toEqual({
      bar: {
        ...a11yProps,
        'aria-valuenow': 80,
        style: {
          width: '80%',
        },
        className: `${baseClass}-bar bar sSize inset`,
      },
      wrapper: {
        className: `${baseClass} wrapper sSize inset`,
      },
    })
  })

  test('should accept a size type', () => {
    expect(getProgressProps({ ariaLabel, size: 's' })).toEqual(result)
    expect(getProgressProps({ ariaLabel, size: 'xs' })).toEqual({
      bar: {
        ...a11yProps,
        className: `${baseClass}-bar bar xsSize linear`,
        style: {
          width: '0%',
        },
      },
      wrapper: {
        className: `${baseClass} wrapper xsSize linear`,
      },
    })
  })

  test('should accept a now value', () => {
    expect(getProgressProps({ ariaLabel, now: 80 })).toEqual({
      ...result,
      bar: {
        ...a11yProps,
        'aria-valuenow': 80,
        style: {
          width: '80%',
        },
        className: `${baseClass}-bar bar sSize linear`,
      },
    })
  })

  test('should accept a max value', () => {
    expect(getProgressProps({ ariaLabel, max: 200 })).toEqual({
      ...result,
      bar: {
        ...a11yProps,
        'aria-valuemax': 200,
        className: `${baseClass}-bar bar sSize linear`,
        style: {
          width: '0%',
        },
      },
    })
  })

  test('should accept a min value', () => {
    expect(getProgressProps({ ariaLabel, min: 50 })).toEqual({
      ...result,
      bar: {
        ...a11yProps,
        'aria-valuemin': 50,
        className: `${baseClass}-bar bar sSize linear`,
        style: {
          width: '0%',
        },
      },
    })
  })

  test('should accept a list of classNames', () => {
    expect(
      getProgressProps({ ariaLabel, classNames: ['test', 'test2'] })
    ).toEqual({
      ...result,
      wrapper: {
        className: `${baseClass} wrapper sSize linear test test2`,
      },
    })
  })
})
