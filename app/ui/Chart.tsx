import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { cx, formatCurrency, type PensionData } from '@/app/lib/utils';
import 'tailwindcss/tailwind.css';

interface ChartProps {
  data: Array<PensionData>;
}

type TooltipProps = Exclude<ChartTooltipProps, 'valueFormatter'>;

interface ChartTooltipProps {
  active: boolean | undefined;
  payload: PayloadItem[];
  label: string;
  valueFormatter: (value: number) => string;
}

interface PayloadItem {
  value: number;
  index: string;
  payload: any;
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          'rounded-md border text-sm shadow-md',
          'border-gray-200 dark:border-gray-800',
          'bg-white dark:bg-gray-950',
        )}
      >
        <div className={cx('border-b border-inherit px-4 py-2')}>
          <p className={cx('font-medium', 'text-gray-900 dark:text-gray-50')}>
            {`At ${label} years old`}
          </p>
        </div>
        <div className={cx('space-y-1 px-4 py-2')}>
          {payload.map(({ value }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <p
                  className={cx(
                    'whitespace-nowrap text-right',
                    'text-gray-700 dark:text-gray-300',
                  )}
                >
                  Pension
                </p>
              </div>
              <p
                className={cx(
                  'whitespace-nowrap text-right font-medium tabular-nums',
                  'text-gray-900 dark:text-gray-50',
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const Chart = ({ data }: ChartProps) => (
  <ResponsiveContainer width="100%" height="60%">
    <LineChart data={data} margin={{ top: 5, right: 5, left: 20, bottom: 30 }}>
      <XAxis
        padding={{ left: 20, right: 20 }}
        dataKey="age"
        tick={{ transform: 'translate(0, 6)' }}
        fill=""
        stroke=""
        className={cx('text-xs', 'fill-white')}
        tickLine={false}
        axisLine={false}
        minTickGap={5}
      />
      <YAxis
        width={80}
        axisLine={false}
        tickLine={false}
        fill=""
        stroke=""
        type="number"
        className={cx('text-xs', 'fill-white')}
        tickFormatter={formatCurrency}
        tick={{ transform: 'translate(-3, 0)' }}
      />
      <Tooltip
        wrapperStyle={{ outline: 'none' }}
        isAnimationActive={true}
        animationDuration={100}
        cursor={{ stroke: 'var(--orange)', strokeWidth: 1 }}
        offset={20}
        position={{ y: 0 }}
        content={({ active, payload, label }) => {
          const cleanPayload: TooltipProps['payload'] = payload
            ? payload.map((item: any) => ({
                value: item.value,
                index: item.payload['age'],
                payload: item.payload,
              }))
            : [];

          return (
            <ChartTooltip
              active={active}
              payload={cleanPayload}
              label={label}
              valueFormatter={formatCurrency}
            />
          );
        }}
      />
      <Line type="monotone" dataKey="pension" stroke="var(--light-blue)" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
