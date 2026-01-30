import useAxiossecure from '../../hooks/useAxiossecure';
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

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {usercontact.map((contact) => (
        <div
          key={contact._id}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">{contact.name}</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
              New
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-700">Email:</span>{' '}
              {contact.email}
            </p>

            <p>
              <span className="font-semibold text-gray-700">Subject:</span>{' '}
              {contact.subject}
            </p>

            <p className="pt-2 text-gray-700">
              <span className="font-semibold">Message:</span>
              <br />
              {contact.message}
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Received: {new Date(contact.createAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUser;
