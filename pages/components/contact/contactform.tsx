import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Define correct event type for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Define correct event type for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg">
      <div>
        <label className="block text-gray-600">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-gray-600">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows={4} // ✅ Change `rows="4"` to `rows={4}`
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {success && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
    </form>
  );
}
