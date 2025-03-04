import { default as countries } from 'countries-phone-masks';
type Country = (typeof countries)[number] & {
    searchable: string;
};
export default Country;
