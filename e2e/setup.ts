import { device } from 'detox'
/**
 * Initialize detox app instance before any test suite runs
 */
beforeAll(async () => {
  console.log('Before all ran')
  await device.launchApp({ newInstance: true })
  await device.reloadReactNative();
})

/**
 * Any cleanup needed after a test suite runs
 */
afterAll(async () => {
  console.log("After all ran!")
})
