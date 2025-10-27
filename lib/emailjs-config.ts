// EmailJS Configuration
// These are PUBLIC credentials and safe to include in client-side code
export const emailjsConfig = {
  serviceId: 'service_5ggvmit',
  templateId: 'template_lv83sib',
  publicKey: 'WeAfJ5qoW4j5FrIz4',
}

// Validate that all required credentials are set
export const isEmailJSConfigured = () => {
  return (
    emailjsConfig.serviceId !== '' &&
    emailjsConfig.templateId !== '' &&
    emailjsConfig.publicKey !== ''
  )
}

