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
    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-10 bg-white rounded-lg">
      <div className='flex flex-col gap-4'>
        <label className="block text-black">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
          placeholder='Enter your full name'
          required
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label className="block text-black">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email address'
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
          required
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label className="block text-black">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter your phone number'
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label className="block text-black">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Tell me about your health goals'
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
          rows={5} // ✅ Change `rows="4"` to `rows={4}`
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary-main text-white p-3 hover:bg-primary-main transition"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {success && <p className="text-primary-main text-center mt-2">Message sent successfully!</p>}
    </form>
  );
}
