'use client';

import { Popover } from '@typeform/embed-react';
import { useMemo, useState } from 'react';
import QuestionChangeTime from './question-change-time';

export default function AboutForm() {
  const [typeFormState, setTypeFormState] = useState('Loading...');
  const [typeformOpenVariant, setTypeformOpenVariant] = useState('');
  const [questionChangeTime, setQuestionChangeTime] = useState<Date>();

  const widgetMemo = useMemo(() => {
    const typeFormHiddenFields = {
      pageLoadedAtDate: new Date().toISOString(),
      randomNumberGeneratedOnPage: Math.random().toFixed(9),
    };

    return (
      <Popover
        id='me9K8KRy'
        open={typeformOpenVariant}
        opacity={100}
        height={400}
        width={300}
        keepSession={false}
        enableSandbox={true}
        hidden={typeFormHiddenFields}
        onReady={() => setTypeFormState('Ready')}
        onStarted={() => setTypeFormState('Started')}
        onSubmit={() => setTypeFormState('Submitted')}
        onClose={() => {
          setTypeFormState('Closed');
          setTypeformOpenVariant('');
        }}
        onEndingButtonClick={() => setTypeFormState('EndingButtonClick')}
        onQuestionChanged={() => setQuestionChangeTime(new Date())}
      />
    );
  }, [typeformOpenVariant]);

  function triggerPopover() {
    setTypeformOpenVariant('load');
  }

  return (
    <div className='rounded border border-stone-400 bg-stone-300'>
      <h2 className='p-4 text-xl font-bold'>Popover Form</h2>
      <p className='px-4'>
        Note: sandbox mode is enabled so no actual data is submitted or saved.
      </p>
      <p className='mt-4 px-4'>
        Typeform form is:
        <span className='ml-1 inline-block rounded-xl border border-amber-300 bg-amber-200 px-2 font-bold text-amber-900'>
          {typeFormState}
        </span>
      </p>
      <p className='flex gap-4 p-4'>
        <button
          className='text-nowrap rounded-2xl border border-indigo-700 bg-indigo-600 px-4 py-2 font-bold text-white
          hover:border-indigo-600 hover:bg-indigo-500 hover:drop-shadow-lg'
          onClick={triggerPopover}
        >
          Trigger popover
        </button>
        <span className='py-2 text-indigo-600'>
          (Or you can click the Typeform button bottom-right of the browser
          window!)
        </span>
      </p>
      {widgetMemo}
      <QuestionChangeTime time={questionChangeTime} />
    </div>
  );
}
