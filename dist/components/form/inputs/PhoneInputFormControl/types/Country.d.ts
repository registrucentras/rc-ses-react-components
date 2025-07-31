import { default as countries } from 'countries-phone-masks';
import { MaskType } from 'maska';
type Country = Omit<(typeof countries)[number], 'mask'> & {
    mask: MaskType;
    searchable: string;
};
export default Country;
