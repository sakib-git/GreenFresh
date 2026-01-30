import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Github,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import useAxiossecure from '../../hooks/useAxiossecure';
import { toast } from 'kitzo';
const Contact = () => {
  const axiosSecure = useAxiossecure();
  const { register, handleSubmit, reset } = useForm();
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
  const handleConnect = async (data) => {
    const contact = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    await axiosSecure.post('/contact/createcontact', contact);
    reset();
    toast.success('Message sent successfully');
  };
  return (
    <div>
      <div className="bg-[#312c85]">
        <div className="mx-auto max-w-[1400px]">
          <div className="p-10 text-center text-white">
            <h1 className="text-[clamp(1.875rem,1.2015rem+2.9126vw,3.75rem)] font-semibold">
              Contact With Us
            </h1>
            <p>
              We are ready to provide you with the best service from the heart
              of Rajshahi. Contact us for any need.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="mx-auto my-20 flex max-w-[1400px] gap-4 max-lg:flex-col">
          <div className="flex flex-1 justify-center">
            <div className="w-full space-y-4">
              {contactData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center rounded-[32px] border border-gray-100 p-6 shadow-sm"
                >
                  {/* Icon Container */}
                  <div className={`p-4 ${item.bgColor} mr-5 rounded-2xl`}>
                    {item.icon}
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="font-medium text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Follow Us Section */}
              <div className="mt-8 rounded-[32px] border border-gray-100 p-8 text-center shadow-sm">
                <h3 className="mb-6 text-sm font-black tracking-widest text-slate-800 uppercase">
                  FOLLOW US
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="rounded-full border border-gray-100 p-3 transition-colors hover:bg-blue-50"
                  >
                    <Facebook className="text-blue-600" size={20} />
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-gray-100 p-3 transition-colors hover:bg-blue-50"
                  >
                    <Linkedin className="text-blue-700" size={20} />
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                  >
                    <Github className="text-slate-800" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-8 text-3xl font-black text-slate-800">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(handleConnect)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="n"
                    className="text-xs font-bold tracking-wider text-slate-800 uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="n"
                    {...register('name', { required: true })}
                    placeholder="Your Name"
                    className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-4 transition-all outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="e"
                    className="text-xs font-bold tracking-wider text-slate-800 uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="e"
                    {...register('email', { required: true })}
                    placeholder="yourname@gmail.com"
                    className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-4 transition-all outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="s"
                  className="text-xs font-bold tracking-wider text-slate-800 uppercase"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="s"
                  {...register('subject', { required: true })}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-4 transition-all outline-none focus:border-indigo-500 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="ta"
                  className="text-xs font-bold tracking-wider text-slate-800 uppercase"
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  id="ta"
                  {...register('message', { required: true })}
                  placeholder="Write your message here..."
                  className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-4 transition-all outline-none focus:border-indigo-500 focus:bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#5433FF] py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-all hover:bg-[#4528d8]"
              >
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
