export default function Card({ title, description }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">   
<a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>{title}
<p className="font-normal text-gray-700 dark:text-gray-400"></p>{description}
</a>
    </div>
  );
}