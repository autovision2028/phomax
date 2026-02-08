import VerifyPaymentContent from './VerifyPaymentContent';

export default function VerifyPaymentPage({ searchParams }) {
  const reference = searchParams?.reference;
  return <VerifyPaymentContent reference={reference} />;
}
