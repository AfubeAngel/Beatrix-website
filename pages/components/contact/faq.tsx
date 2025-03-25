export default function FAQ() {
    return (
      <div className="mt-12 grid grid-col-1 lg:grid-cols-2">
        <h2 className="text-2xl lg:text-[48px] font-semibold">Frequently Asked Questions</h2>

        <div className="mt-4 space-y-4">
          <details className="p-6 border-b-2 border-gray-200">
            <summary className="cursor-pointer font-medium text-primary-main">How long are the sessions?</summary>
            <p className="mt-2 text-gray-600">Initial consultations are 50 minutes and free of charge, allowing us to dive deep into your health goals and progress.</p>
          </details>
  
          <details className="p-6 border-b-2 border-gray-200">
            <summary className="cursor-pointer font-medium text-primary-main">Do you offer virtual sessions?</summary>
            <p className="mt-2 text-gray-600">Yes! We offer worldwide virtual consultations.</p>
          </details>
  
          <details className="p-6 border-b-2 border-gray-200">
            <summary className="cursor-pointer font-medium text-primary-main">Do you provide meal plans?</summary>
            <p className="mt-2 text-gray-600">Yes, we customize meal plans based on your needs.</p>
          </details>

          <details className="p-6 border-b-2 border-gray-200">
            <summary className="cursor-pointer font-medium text-primary-main">What payment methods do you accept?</summary>
            <p className="mt-2 text-gray-600">We offer plans based on your budget and health needs.</p>
          </details>
        </div>
      </div>
    );
  }
  