interface SkillBadgeProps {
  name: string;
  level?: string;
  years?: number;
}

export default function SkillBadge({ name, level, years }: SkillBadgeProps) {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Avancé':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Intermédiaire':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'Débutant':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className={`inline-flex items-center px-3 py-1.5 rounded-lg border ${getLevelColor(level)}`}>
      <span className="text-sm font-medium">{name}</span>
      {years && (
        <span className="ml-2 text-xs opacity-75">{years} an{years > 1 ? 's' : ''}</span>
      )}
    </div>
  );
}