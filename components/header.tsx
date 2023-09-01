import { cn } from '@/lib/utils';
import { Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { MobileSidebar } from './mobile-sidebar';

const Header = () => {
  return (
    <div className='flex items-center p-4'>
      <Button variant={'ghost'} size={'icon'} className='md:hidden'>
        <Menu />
      </Button>
      <div className='flex w-full justify-end items-center gap-x-2'>
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Header;
