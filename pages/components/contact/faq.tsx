export default function FAQ() {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">How long are the sessions?</summary>
            <p className="mt-2 text-gray-600">Sessions last 45-60 minutes...</p>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">Do you offer virtual sessions?</summary>
            <p className="mt-2 text-gray-600">Yes! We offer worldwide virtual consultations.</p>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">Do you provide meal plans?</summary>
            <p className="mt-2 text-gray-600">Yes, we customize meal plans based on your needs.</p>
          </details>
        </div>
      </div>
    );
  }
  