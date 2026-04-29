import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { amount } = req.body

  if (!Number.isInteger(amount) || amount < 100) {
    return res.status(400).json({ error: 'Amount must be at least $1' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method_types: ['card'],
  })

  res.status(200).json({ clientSecret: paymentIntent.client_secret })
}
