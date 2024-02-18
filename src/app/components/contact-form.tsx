'use client';

import { Widget } from '@typeform/embed-react';
import { useMemo, useState } from 'react';
import QuestionChangeTime from './question-change-time';

export default function ContactForm() {
  const typeFormHiddenFields = {
    pageLoadedAtDate: new Date().toISOString(),
    randomNumberGeneratedOnPage: Math.random().toFixed(9),
  };

  const [typeFormState, setTypeFormState] = useState('Loading...');
  const [questionChangeTime, setQuestionChangeTime] = useState<Date>();

  const widgetMemo = useMemo(() => {
    return (
      <div className='m-4'>
        <Widget
          id='GPszre2l'
          className='min-h-[600px] rounded border border-black'
          opacity={75}
          disableScroll={true}
          enableSandbox={true}
          autoResize={true}
          hidden={typeFormHiddenFields}
          onReady={() => setTypeFormState('Ready')}
          onStarted={() => setTypeFormState('Started')}
          onSubmit={() => setTypeFormState('Submitted')}
          onClose={() => setTypeFormState('Closed')}
          onEndingButtonClick={() => setTypeFormState('EndingButtonClicked')}
          onQuestionChanged={() => setQuestionChangeTime(new Date())}
        />
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='rounded border border-stone-400 bg-amber-50'>
      <h2 className='p-4 text-xl font-bold'>Contact Form Example</h2>
      <p className='px-4'>
        Note: sandbox mode is enabled so no actual data is submitted or saved.
      </p>
      <p className='mt-4 px-4'>
        Typeform form is:
        <span className='ml-1 inline-block rounded-xl border border-amber-300 bg-amber-200 px-2 font-bold text-amber-900'>
          {typeFormState}
        </span>
      </p>
      {widgetMemo}
      <QuestionChangeTime time={questionChangeTime} />
    </div>
  );
}
