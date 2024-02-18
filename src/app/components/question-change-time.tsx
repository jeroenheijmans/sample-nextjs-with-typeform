export default function QuestionChangeTime({
  time,
}: {
  time: Date | undefined;
}) {
  return (
    <p className='mb-4 px-4'>
      Last question change:
      <span className='ml-1 inline-block rounded-xl border border-amber-300 bg-amber-200 px-2 font-bold text-amber-900'>
        {time?.toISOString()?.substring(11, 23) || '-'}
      </span>
    </p>
  );
}
