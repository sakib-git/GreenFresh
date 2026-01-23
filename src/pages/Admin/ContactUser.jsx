import React from 'react';
import useAxiossecure from '../../Hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';

const ContactUser = () => {
  const axiosSecure = useAxiossecure();
  const { data: usercontact = [] } = useQuery({
    queryKey: ['usercontact'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contact/contactgetuser');
      return res.data;
    },
  });
  console.log(usercontact);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {usercontact.map((contact) => (
        <div key={contact._id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">{contact.name}</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">New</span>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-700">Email:</span> {contact.email}
            </p>

            <p>
              <span className="font-semibold text-gray-700">Subject:</span> {contact.subject}
            </p>

            <p className="pt-2 text-gray-700">
              <span className="font-semibold">Message:</span>
              <br />
              {contact.message}
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-400">Received: {new Date(contact.createAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactUser;
