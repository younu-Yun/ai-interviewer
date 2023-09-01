import Heading from '@/components/heading';
import { SmilePlus } from 'lucide-react';

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title={'Conversation'}
        description={'가장 유용한 대화상대!'}
        icon={SmilePlus}
        iconColor='text-black-500'
        bgColor='bg-gray-500/10'
      />
    </div>
  );
};

export default ConversationPage;
