'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor, Palette, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const themes = [
  { name: 'light', icon: Sun, label: 'Light' },
  { name: 'dark', icon: Moon, label: 'Dark' },
  
];

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-blue-800">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const currentTheme = themes.find(t => t.name === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      <DropdownMenu.Root onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            className="flex items-center gap-2 p-2 text-primary rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition-colors"
            aria-label="Theme selector"
          >
            <CurrentIcon className="w-5 h-5" />
            <span className="hidden  sm:inline text-sm">{currentTheme.label}</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              aria-hidden="true"
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content 
            align="end"
            className="min-w-[180px] bg-blue-700 dark:bg-blue-800 rounded-lg p-1 shadow-lg border border-gray-200 dark:border-gray-700 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            {themes.map(({ name, icon: Icon, label }) => (
              <DropdownMenu.Item 
                key={name}
                className="group text-sm rounded-md flex items-center px-3 py-2 relative select-none outline-none data-[highlighted]:bg-blue-600 data-[highlighted]:dark:bg-gray-600 cursor-pointer transition-colors"
                onSelect={() => setTheme(name)}
              >
                <Icon className="w-4 h-4 mr-2" />
                <span>{label}</span>
                {theme === name && (
                  <span className="ml-auto text-blue-500">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3397 6.95402 11.3497C6.77247 11.3598 6.60089 11.2842 6.48605 11.1445L3.48605 7.1445C3.24732 6.83838 3.29428 6.40295 3.5985 6.15422C3.90271 5.90549 4.32435 5.94331 4.58105 6.23606L6.93202 8.97363L10.432 4.11297C10.6209 3.82407 11.0082 3.74295 11.2971 3.93185L11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </span>
                )}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
