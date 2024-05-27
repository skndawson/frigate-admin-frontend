
import { BadgeDelta, Card } from '@tremor/react';

// eslint-disable-next-line react/prop-types
export function CardStats({title,value}) {
    {title,value}
    
  return (
    <Card className="mx-auto max-w-sm w-[250px] " >
      <div className="flex items-center justify-between  ">
        <h4 className="text-tremor-default text-tremor-content ">{title}</h4>
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={true}
          size="xs"
          
        >
          +9.3%
        </BadgeDelta>
      </div>
      <p className="text-tremor-content-strong font-semibold">{value}</p>
    </Card>
  );
}