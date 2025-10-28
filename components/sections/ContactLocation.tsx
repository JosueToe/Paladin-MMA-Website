'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailJSConfigured } from '@/lib/emailjs-config'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import Button from '../ui/Button'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  program: string
  experience: string
  preferredTime: string
  message: string
}

const ContactLocation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const programOptions = [
    { value: 'mma-crosstraining', label: 'MMA / Crosstraining' },
    { value: 'mma-kids', label: 'MMA Kids Program' },
    { value: 'mma-adults', label: 'MMA Adults' },
    { value: 'personal-training', label: 'Personal Training' },
    { value: 'after-school', label: 'After School Program' },
  ]

  const experienceOptions = [
    { value: 'beginner', label: 'Beginner - No Experience' },
    { value: 'some', label: 'Some Experience (< 1 year)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
  ]

  const timeOptions = [
    { value: 'morning', label: 'Morning (6AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 6PM)' },
    { value: 'evening', label: 'Evening (6PM - 9PM)' },
  ]

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '2091 W 76th St, Hialeah, FL 33016',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '(786) 237-4918',
      link: 'tel:+17862374918',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@paladinmma.com',
      link: 'mailto:contact@paladinmma.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      content: 'Mon-Fri: 6AM-9PM | Weekends: Closed',
    },
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      setSubmitError(
        'Email service is not configured. Please contact us at contact@paladinmma.com or call (786) 237-4918.'
      )
      setIsSubmitting(false)
      return
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          program: data.program,
          experience: data.experience,
          preferred_time: data.preferredTime,
          message: data.message,
          to_email: 'contact@paladinmma.com',
        },
        emailjsConfig.publicKey
      )

      console.log('Email sent successfully:', result.text)
      setIsSubmitted(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitError(
        'Failed to send message. Please try again or contact us directly at contact@paladinmma.com or (786) 237-4918.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wider mb-4">
            <span className="text-light">FIND US & </span>
            <span className="text-gradient">START YOUR JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visit our world-class facility or get in touch for a free trial class
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-primary mb-3 flex justify-center">{info.icon}</div>
              <h3 className="font-bebas text-lg text-light tracking-wider mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-400 text-sm">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0858967729285!2d-80.32437542469447!3d25.82773827736453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9d5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s2091%20W%2076th%20St%2C%20Hialeah%2C%20FL%2033016!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            ></iframe>
            <div className="absolute top-4 right-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/dir/?api=1&destination=2091+W+76th+St+Hialeah+FL+33016',
                    '_blank'
                  )
                }
              >
                GET DIRECTIONS
              </Button>
            </div>

            {/* Parking & Transit Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
              <h4 className="font-bebas text-sm text-light mb-2 tracking-wider">
                PARKING & TRANSIT
              </h4>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>✓ Free parking on-site</li>
                <li>✓ Miami Metro accessible</li>
                <li>✓ Multiple bus routes nearby</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bebas tracking-wider text-light mb-6">
              GET YOUR FREE TRIAL
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >

              <Input
                label="Full Name"
                {...register('fullName', { required: 'Name is required' })}
                error={errors.fullName?.message}
                placeholder="John Doe"
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  error={errors.email?.message}
                  placeholder="john@example.com"
                  required
                />

                <Input
                  label="Phone"
                  type="tel"
                  {...register('phone', { required: 'Phone is required' })}
                  error={errors.phone?.message}
                  placeholder="(305) 555-0123"
                  required
                />
              </div>

              <Select
                label="Program Interest"
                {...register('program', { required: 'Please select a program' })}
                error={errors.program?.message}
                options={programOptions}
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Experience Level"
                  {...register('experience', {
                    required: 'Please select experience level',
                  })}
                  error={errors.experience?.message}
                  options={experienceOptions}
                  required
                />

                <Select
                  label="Preferred Contact Time"
                  {...register('preferredTime')}
                  options={timeOptions}
                />
              </div>

              <Textarea
                label="Message"
                {...register('message')}
                placeholder="Tell us about your goals and any questions you have..."
                rows={4}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'SENDING...'
                ) : (
                  <>
                    SEND MESSAGE
                    <Send className="ml-2" size={20} />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <motion.div
                  className="bg-green-900/30 border border-green-500 text-green-500 p-4 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={24} />
                  <div>
                    <strong>Success!</strong> {"We'll get back to you within 24 hours."}
                  </div>
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  className="bg-red-900/30 border border-red-500 text-red-500 p-4 rounded-lg flex items-start gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={24} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Error!</strong> {submitError}
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Why Train With Us */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/30"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-bebas text-3xl text-light tracking-wider mb-6 text-center">
            WHY TRAIN WITH US?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">World-Class Coaches:</strong>
                <span className="text-gray-300"> Train with championship-level instructors</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">Flexible Schedule:</strong>
                <span className="text-gray-300"> Classes available Monday through Friday</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">All Levels Welcome:</strong>
                <span className="text-gray-300"> From beginner to professional</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">State-of-the-Art Facility:</strong>
                <span className="text-gray-300"> Premium equipment and training space</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">Supportive Community:</strong>
                <span className="text-gray-300"> Join a family of warriors</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <strong className="text-light">Free Trial Class:</strong>
                <span className="text-gray-300"> Try any program risk-free</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactLocation

