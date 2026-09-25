export const bmi=(kg:number,m:number)=>kg/(m*m);
export const percentage=(value:number,percent:number)=>value*percent/100;
export const discount=(price:number,percent:number)=>({saved:price*percent/100,final:price*(1-percent/100)});
export const tip=(bill:number,percent:number)=>({tip:bill*percent/100,total:bill*(1+percent/100)});
export const transferTimeSeconds=(bytes:number,bps:number)=>bytes*8/bps;
export const fuelEconomy=(distance:number,fuel:number)=>distance/fuel;
export const age=(birth:Date,now=new Date())=>{let a=now.getFullYear()-birth.getFullYear();if(now.getMonth()<birth.getMonth()||(now.getMonth()===birth.getMonth()&&now.getDate()<birth.getDate()))a--;return a};
