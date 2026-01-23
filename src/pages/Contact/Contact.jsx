import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useAxiossecure from '../../Hooks/useAxiossecure';
import { toast } from 'kitzo';
const Contact = () => {
  const axiosSecure = useAxiossecure()
  const {
    register,
    handleSubmit,
    reset
    
  } = useForm();
  const contactData = [
    {
      id: 1,
      title: 'Our Location',
      desc: 'Rajshahi, Bangladesh',
      icon: <MapPin className="text-blue-600" size={24} />,
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Phone Number',
      desc: '+880 1908716502',
      icon: <Phone className="text-green-600" size={24} />,
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      title: 'Email Address',
      desc: 'mdnirob30k@gmail.com',
      icon: <Mail className="text-orange-500" size={24} />,
      bgColor: 'bg-orange-50',
    },
    {
      id: 4,
      title: 'Working Hours',
      desc: 'Sat - Thu: 09:00 AM - 10:00 PM',
      icon: <Clock className="text-purple-600" size={24} />,
      bgColor: 'bg-purple-50',
    },
  ];
  const handleConnect = async(data) => {
    const contact = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    await axiosSecure.post('/contact/createcontact', contact)
   reset()
  toast.success('Message sent successfully')

  };
  return (
    <div>
      <div className="bg-[#312c85]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center p-10 text-white">
            <h1 className="text-[clamp(1.875rem,1.2015rem+2.9126vw,3.75rem)] font-semibold">Contact With Us</h1>
            <p>We are ready to provide you with the best service from the heart of Rajshahi. Contact us for any need.</p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="flex max-lg:flex-col gap-4 mx-auto max-w-[1400px] my-20">
          <div className="flex-1 justify-center flex">
            <div className="w-full  space-y-4">
              {contactData.map((item) => (
                <div key={item.id} className="flex  items-center p-6  rounded-[32px] shadow-sm border border-gray-100 ">
                  {/* Icon Container */}
                  <div className={`p-4 ${item.bgColor} rounded-2xl mr-5`}>{item.icon}</div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Follow Us Section */}
              <div className="mt-8  rounded-[32px] p-8 shadow-sm border border-gray-100 text-center ">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">FOLLOW US</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 rounded-full border border-gray-100 hover:bg-blue-50 transition-colors">
                    <Facebook className="text-blue-600" size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-full border border-gray-100 hover:bg-blue-50 transition-colors">
                    <Linkedin className="text-blue-700" size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
                    <Github className="text-slate-800" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2 bg-white shadow-sm border border-gray-100 p-6 rounded-[32px] ">
            <h2 className="text-3xl font-black text-slate-800 mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit(handleConnect)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="n" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input type="text" id="n" {...register('name', { required: true })} placeholder="Your Name" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="e" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input type="email" id="e" {...register('email', { required: true })} placeholder="yourname@gmail.com" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="s" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Subject
                </label>
                <input type="text" id="s" {...register('subject', { required: true })} placeholder="How can we help?" className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="ta" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Message
                </label>
                <textarea rows="5" id="ta" {...register('message', { required: true })} placeholder="Write your message here..." className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full py-4 bg-[#5433FF] hover:bg-[#4528d8] text-white font-bold rounded-2xl shadow-lg transition-all uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
