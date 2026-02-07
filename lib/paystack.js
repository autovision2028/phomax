import Paystack from 'paystack';

const paystack = Paystack(process.env.PAYSTACK_SECRET_KEY);

export const initializeTransaction = async (email, amount, metadata = {}) => {
try {
 const response = await paystack.transaction.initialize({
   email,
   amount: amount * 100, // Convert to kobo
   currency: 'NGN',
   callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/verify-payment`,
   metadata,
 });
 
 return {
   success: true,
   data: response.data,
 };
} catch (error) {
 console.error('Paystack initialization error:', error);
 return {
   success: false,
   error: error.message,
 };
}
};

export const verifyTransaction = async (reference) => {
try {
 const response = await paystack.transaction.verify(reference);
 
 return {
   success: response.data.status === 'success',
   data: response.data,
 };
} catch (error) {
 console.error('Paystack verification error:', error);
 return {
   success: false,
   error: error.message,
 };
}
};

export default paystack;
