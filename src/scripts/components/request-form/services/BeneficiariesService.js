const beneficiaries = [
  {
    name: 'Eco Construction Ltd',
    value: 1,
    address: '33 Tonbridge Rd',
    zipCode: 'DH8 3ST',
    city: 'Consett',
    province: null,
    country: 'UK'
  },
  {
    name: 'Bouwsel NV',
    value: 2,
    address: 'Sneeuwuil 23',
    zipCode: '7827 GG',
    city: 'Emmen',
    province: 'Drenthe',
    country: 'NL'
  },
  {
    name: 'Gebouw BV',
    value: 3,
    address: 'Van Houtenkade 53',
    zipCode: '1814 HL',
    city: 'Alkmaar',
    province: 'Noord-Holland',
    country: 'NL'
  },
  {
    name: 'CigarRepair',
    value: 4,
    address: '95 Main St',
    zipCode: 'PA37 5BQ',
    city: 'Achnacloich',
    province: null,
    country: 'UK'
  },
  {
    name: 'Vittorio Bruno e figli',
    value: 5,
    address: 'Via Loreto, 68',
    zipCode: '63025',
    city: 'Magliano Di Tenna',
    province: 'AP',
    country: 'IT'
  }
];

class BeneficiariesService {
  constructor($q) {
    this.$q = $q;
  }

  get() {
    const deferred = this.$q.defer();
    deferred.resolve(beneficiaries);
    return deferred.promise;
  }
}

export default BeneficiariesService;
