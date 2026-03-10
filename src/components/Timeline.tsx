import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'work' | 'education';
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.id} className="relative flex">
            {/* Icône */}
            <div className="absolute left-0 w-16 flex justify-center">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center shadow-lg">
                {item.type === 'work' ? (
                  <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                )}
              </div>
            </div>

            {/* Contenu */}
            <div className="ml-16 pl-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {item.startDate} — {item.endDate}
                  </div>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin size={14} className="mr-1" />
                  {item.location}
                </div>

                <ul className="space-y-2 mb-4">
                  {item.description.map((desc, index) => (
                    <li key={index} className="flex text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-blue-500">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}