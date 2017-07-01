const bondTypes = [
  {
    name: 'Advance Payment',
    code: 'A1',
    value: 1,
    risks: [
      {
        name: 'Advance payment on construction',
        code: 'A1.1.EN',
        value: 'risk1',
        language: 'en_US'
      },
      {
        name: 'Advance payment on foreign construction',
        code: 'A1.2.EN',
        value: 'risk2',
        language: 'en_US'
      },
      {
        name: 'Advance payment on foreign services',
        code: 'A1.3.EN',
        value: 'risk3',
        language: 'en_US'
      },
      {
        name: 'Advance payment on foreign supplies',
        code: 'A1.4.EN',
        value: 'risk4',
        language: 'en_US'
      },
      {
        name: 'Advance payment on services',
        code: 'A1.5.EN',
        value: 'risk5',
        language: 'en_US'
      },
      {
        name: 'Advance payment on supplies',
        code: 'A1.6.EN',
        value: 'risk6',
        language: 'en_US'
      },
      {
        name: 'Sub contractor bonds',
        code: 'A1.7.EN',
        value: 'risk7',
        language: 'en_US'
      },
      {
        name: 'Vooruitbetalingsgarantie',
        code: 'A1.1.NL',
        value: 'risk8',
        language: 'nl_NL'
      },
      {
        name: 'Contratos privados - garantías complementarias',
        code: 'A1.1.SP',
        value: 'risk9',
        language: 'es_ES'
      },
      {
        name: 'Contratos públicos - complementarias',
        code: 'A1.2.SP',
        value: 'risk10',
        language: 'es_ES'
      }
    ]
  },
  {
    name: 'Performance',
    code: 'A2',
    value: 2,
    risks: [
      {
        name: 'Individual housing bonds',
        code: 'A2.1.EN',
        value: 'risk1',
        language: 'en_US'
      },
      {
        name: 'Performance bond construction',
        code: 'A2.2.EN',
        value: 'risk2',
        language: 'en_US'
      },
      {
        name: 'Performance bond services',
        code: 'A2.3.EN',
        value: 'risk3',
        language: 'en_US'
      },
      {
        name: 'Performance bond supplies',
        code: 'A2.4.EN',
        value: 'risk4',
        language: 'en_US'
      },
      {
        name: 'Waste bonds',
        code: 'A2.5.EN',
        value: 'risk5',
        language: 'en_US'
      },
      {
        name: 'Uitvoeringsgarantie',
        code: 'A2.1.NL',
        value: 'risk6',
        language: 'nl_NL'
      },
      {
        name: 'Comercio exterior - garantía definitiva',
        code: 'A2.1.SP',
        value: 'risk7',
        language: 'es_ES'
      },
      {
        name: 'Contratos privados - garantías definitivas',
        code: 'A2.2.SP',
        value: 'risk8',
        language: 'es_ES'
      },
      {
        name: 'Contratos públicos - definitivas',
        code: 'A2.3.SP',
        value: 'risk9',
        language: 'es_ES'
      }
    ]
  },
  {
    name: 'Maintenance/Retention',
    code: 'A3',
    value: 3,
    risks: [
      {
        name: 'Money retention bond on construction',
        code: 'A3.1.EN',
        value: 'risk1',
        language: 'en_US'
      },
      {
        name: 'Money retention bond on services',
        code: 'A3.2.EN',
        value: 'risk2',
        language: 'en_US'
      },
      {
        name: 'Money retention bond on supplies',
        code: 'A3.3.EN',
        value: 'risk3',
        language: 'en_US'
      }
    ]
  },
  {
    name: 'Bid/Tender',
    code: 'A5',
    value: 5,
    risks: [
      {
        name: 'Bid Bond construction',
        code: 'A5.1.EN',
        value: 'risk1',
        language: 'en_US'
      },
      {
        name: 'Bid bond foreign constructions',
        code: 'A5.2.EN',
        value: 'risk2',
        language: 'en_US'
      },
      {
        name: 'Bid bond foreign services',
        code: 'A5.3.EN',
        value: 'risk3',
        language: 'en_US'
      },
      {
        name: 'Bid bond foreign supplies',
        code: 'A5.4.EN',
        value: 'risk4',
        language: 'en_US'
      },
      {
        name: 'Bid Bond Services',
        code: 'A5.5.EN',
        value: 'risk5',
        language: 'en_US'
      },
      {
        name: 'Bid Bond supplies',
        code: 'A5.6.EN',
        value: 'risk6',
        language: 'en_US'
      },
      {
        name: 'Comercio exterior - garantía provisional',
        code: 'A5.1.SP',
        value: 'risk7',
        language: 'es_ES'
      },
      {
        name: 'Contratos privados - garantías provisionales',
        code: 'A5.2.SP',
        value: 'risk8',
        language: 'es_ES'
      },
      {
        name: 'Contratos públicos - provisionales',
        code: 'A5.3.SP',
        value: 'risk9',
        language: 'es_ES'
      }
    ]
  },
  {
    name: 'Other Contract Bonds',
    code: 'A6',
    value: 6,
    risks: [
      {
        name: 'Commercial rent ',
        code: 'A6.1.EN',
        value: 'risk1',
        language: 'en_US'
      },
      {
        name: 'Other bid bond',
        code: 'A6.2.EN',
        value: 'risk2',
        language: 'en_US'
      },
      {
        name: 'Prequalification',
        code: 'A6.3.EN',
        value: 'risk3',
        language: 'en_US'
      },
      {
        name: 'Private house rent',
        code: 'A6.4.EN',
        value: 'risk4',
        language: 'en_US'
      },
      {
        name: 'Real estate promise to sell',
        code: 'A6.5.EN',
        value: 'risk5',
        language: 'en_US'
      },
      {
        name: 'Overige garantie',
        code: 'A6.1.NL',
        value: 'risk7',
        language: 'nl_NL,'
      }
    ]
  }
];

class BondTypesService {
  constructor($q) {
    this.$q = $q;
  }

  get() {
    const deferred = this.$q.defer();
    deferred.resolve(bondTypes);
    return deferred.promise;
  }
}

export default BondTypesService;
