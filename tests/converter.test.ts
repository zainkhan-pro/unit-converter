import { describe,expect,it } from 'vitest';
import { convert } from '../src/lib/converter/engine';
import { parseConversionRequest } from '../src/lib/parser/natural';
describe('conversion engine',()=>{
 it('converts kg to lb',()=>expect(convert(5,'kg','lb').value).toBeCloseTo(11.0231131,5));
 it('converts Celsius to Fahrenheit',()=>expect(convert(37,'c','f').value).toBeCloseTo(98.6,10));
 it('converts Mbps to MB/s',()=>expect(convert(200,'Mbps','MB/s').value).toBeCloseTo(25,10));
 it('converts feet to meters',()=>expect(convert(1,'ft','m').value).toBeCloseTo(0.3048,10));
});
describe('natural parser',()=>{
 it('parses kg request',()=>expect(parseConversionRequest('5 kg to pounds')).toMatchObject({value:5,from:'kilogram',to:'pound',category:'mass'}));
 it('rejects unknown units',()=>expect(parseConversionRequest('5 bananas to apples')).toBeNull());
});
