import { UNIT_MAP, UNITS } from './definitions';
import type { Category, UnitDefinition } from './types';
export class ConversionError extends Error {}
export function resolveUnit(input:string, category?:Category):UnitDefinition {
 const key=input.trim().toLowerCase().replace(/\s+/g,' '); const unit=UNIT_MAP.get(key);
 if(!unit || (category && unit.category!==category)) throw new ConversionError(`Unsupported unit: ${input}`); return unit;
}
export function convert(value:number, from:string, to:string, category?:Category){
 if(!Number.isFinite(value)) throw new ConversionError('Value must be a valid number.');
 const source=resolveUnit(from,category), target=resolveUnit(to,category);
 if(source.category!==target.category) throw new ConversionError('Source and target units must belong to the same category.');
 return {value:target.fromBase(source.toBase(value)),source,target,formula:target.formula ?? `${source.symbol} → ${target.symbol}`};
}
export function allConversions(value:number, from:string, category?:Category){
 const source=resolveUnit(from,category); return UNITS.filter(u=>u.category===source.category).map(target=>({unit:target,value:target.fromBase(source.toBase(value))}));
}
