'use client';

import { ArrowRight, CassetteTape, Code2, ImageIcon, MessageSquare, SmilePlus, VideoIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Conversation',
    icon: SmilePlus,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    href: '/conversation',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: CassetteTape,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code2,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    href: '/code',
  },
];

const DashBoard = () => {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>너가 필요한 AI 여기 다 있어...✨</h2>
        <p className='text-muted-foreground font-light text-sm md:text-ld text-center'>Chat with the smartest AI - Explore the power of AI</p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className='p-4 border-black/5 flex items-center justify-between hover:shadow-md trasition cursor-pointer'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
