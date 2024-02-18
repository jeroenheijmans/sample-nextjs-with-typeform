'use client';

import { PopupButton } from '@typeform/embed-react';
import { useMemo, useState } from 'react';
import QuestionChangeTime from './question-change-time';

export default function SurveyForm() {
  const typeFormHiddenFields = {
    pageLoadedAtDate: new Date().toISOString(),
    randomNumberGeneratedOnPage: Math.random().toFixed(9),
  };

  const [typeFormState, setTypeFormState] = useState('Loading...');
  const [questionChangeTime, setQuestionChangeTime] = useState<Date>();

  const widgetMemo = useMemo(() => {
    return (
      <p className='p-4'>
        <PopupButton
          id='fbZYBuNn'
          className='
          rounded-xl border border-indigo-700 bg-indigo-600 px-4 py-2 font-bold text-white
          hover:border-indigo-600 hover:bg-indigo-500 hover:drop-shadow-lg'
          opacity={100}
          size={95}
          disableScroll={true}
          enableSandbox={true}
          autoResize={true}
          hidden={typeFormHiddenFields}
          onReady={() => setTypeFormState('Ready')}
          onStarted={() => setTypeFormState('Started')}
          onSubmit={() => setTypeFormState('Submitted')}
          onClose={() => setTypeFormState('Closed')}
          onEndingButtonClick={() => setTypeFormState('EndingButtonClick')}
          onQuestionChanged={() => setQuestionChangeTime(new Date())}
        >
          Start the form now!
        </PopupButton>
      </p>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='rounded border border-stone-400 bg-stone-300'>
      <h2 className='p-4 text-xl font-bold'>Survey Form</h2>
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
