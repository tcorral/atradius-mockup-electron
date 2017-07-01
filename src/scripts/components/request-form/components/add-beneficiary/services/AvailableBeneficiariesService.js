const availableBeneficiaries = [
  {
    name: 'Available beneficiary 1',
    address: 'Available beneficiary 1 address',
    zipCode: 'Available beneficiary 1 zip code',
    city: 'Available beneficiary 1 city',
    province: 'Available beneficiary 1 province',
    countryCode: 'Available beneficiary 1 country code',
    fiscalCode: 'Available beneficiary 1 fiscal code'
  },
  {
    name: 'Available beneficiary 2',
    address: 'Available beneficiary 2 address',
    zipCode: 'Available beneficiary 2 zip code',
    city: 'Available beneficiary 2 city',
    province: 'Available beneficiary 2 province',
    countryCode: 'Available beneficiary 2 country code',
    fiscalCode: 'Available beneficiary 2 fiscal code'
  },
  {
    name: 'Available beneficiary 3',
    address: 'Available beneficiary 3 address',
    zipCode: 'Available beneficiary 3 zip code',
    city: 'Available beneficiary 3 city',
    province: 'Available beneficiary 3 province',
    countryCode: 'Available beneficiary 3 country code',
    fiscalCode: 'Available beneficiary 3 fiscal code'
  },
  {
    name: 'Available beneficiary 4',
    address: 'Available beneficiary 4 address',
    zipCode: 'Available beneficiary 4 zip code',
    city: 'Available beneficiary 4 city',
    province: 'Available beneficiary 4 province',
    countryCode: 'Available beneficiary 4 country code',
    fiscalCode: 'Available beneficiary 4 fiscal code'
  },
  {
    name: 'Available beneficiary 5',
    address: 'Available beneficiary 5 address',
    zipCode: 'Available beneficiary 5 zip code',
    city: 'Available beneficiary 5 city',
    province: 'Available beneficiary 5 province',
    countryCode: 'Available beneficiary 5 country code',
    fiscalCode: 'Available beneficiary 5 fiscal code'
  }
];

class AvailableBeneficiariesService {
  constructor($q) {
    this.$q = $q;
  }

  get() {
    const deferred = this.$q.defer();
    deferred.resolve(availableBeneficiaries);
    return deferred.promise;
  }
}

export default AvailableBeneficiariesService;
