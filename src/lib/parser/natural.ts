import { UNIT_MAP } from '@/lib/converter/definitions';
import type { Category } from '@/lib/converter/types';
export type ParsedRequest={value:number;from:string;to:string;category:Category};
const categoryAliases:Record<string,Category>={currency:'mass' as Category};
export function parseConversionRequest(input:string):ParsedRequest|null{
 const s=input.trim().toLowerCase().replace(/,/g,'');
 const m=s.match(/^(-?\d+(?:\.\d+)?)\s+(.+?)\s+(?:to|in|into|as)\s+(.+?)$/);
 if(!m)return null;
 const fromKey=m[2].trim(),toKey=m[3].trim(); const from=UNIT_MAP.get(fromKey),to=UNIT_MAP.get(toKey);
 if(!from||!to||from.category!==to.category)return null;
 return {value:Number(m[1]),from:from.id,to:to.id,category:from.category};
}
