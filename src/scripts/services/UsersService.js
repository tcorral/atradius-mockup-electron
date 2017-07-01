const users = [
  // nl_NL
  {
    name: 'Carel Coenraad',
    languageId: 'nl_NL',
    countryCode: 'NL',
    currency: {
      code: 'EUR',
      decimalCode: 2
    },
    company: {
      name: 'Capgemini',
      address: 'Reykjavikplein 1',
      zipCode: '3543 KA',
      city: 'Utrecht',
      province: 'Utrecht',
      countryCode: 'NL',
      fiscalCode: 'NL001225741B01',
      logo: 'img/capgemini-logo.jpg'
    },
    policy: {
      id: '123456789',
      expirationDate: '2017-12-31',
      credit: {
        limit: 10000000,
        left: 4000000,
        available: 6000000
      }
    },
    beneficiaries: [
      {
        name: 'Bouwsel NV',
        address: 'Sneeuwuil 23',
        zipCode: '7827 GG',
        city: 'Emmen',
        province: 'Drenthe',
        countryCode: 'NL',
        fiscalCode: 'NL0123456789'
      },
      {
        name: 'Gebouw BV',
        address: 'Van Houtenkade 53',
        zipCode: '1814 HL',
        city: 'Alkmaar',
        province: 'Noord-Holland',
        countryCode: 'NL',
        fiscalCode: 'NL9876543210'
      }
    ],
    bond: {
      class: 'Contract',
      code: 'A',
      revolving: false,
      types: [
        {
          name: 'Advance Payment',
          code: 'A1',
          risks: [
            {
              name: 'Geadvanceerde betaling op de bouw',
              code: 'A1.1.NL'
            },
            {
              name: 'Geadvanceerde betaling op buitenlandse services',
              code: 'A1.2.NL'
            }
          ]
        },
        {
          name: 'Performance',
          code: 'A2',
          risks: [
            {
              name: 'Uitvoeringsgarantie',
              code: 'A2.1.NL'
            }
          ]
        },
        {
          name: 'Other Contract Bonds',
          code: 'A6',
          risks: [
            {
              name: 'Overige garantie',
              code: 'A6.1.NL'
            }
          ]
        }
      ]
    }
  },
  // en_US
  {
    name: 'Example user',
    languageId: 'en_US',
    countryCode: 'US',
    currency: {
      code: 'USD',
      decimalCode: 2
    },
    company: {
      name: 'Example company',
      address: 'Example road 1',
      zipCode: '12345',
      city: 'New York',
      province: 'New York',
      countryCode: 'US',
      fiscalCode: '98765',
      logo: ''
    },
    policy: {
      id: '1',
      expirationDate: '2020-01-01',
      credit: {
        limit: 20000000,
        left: 16000000,
        available: 4000000
      }
    },
    beneficiaries: [
      {
        name: 'Example beneficiary',
        address: 'Example lane 1',
        zipCode: '67890',
        city: 'New York',
        province: 'New York',
        countryCode: 'US',
        fiscalCode: '12345'
      }
    ],
    bond: {
      class: 'Example bond class',
      code: 'BC',
      revolving: true,
      types: [
        {
          name: 'Example bond type',
          code: 'BT 1',
          risks: [
            {
              name: 'Example bond risk',
              code: 'BR 1.1'
            }
          ]
        }
      ]
    }
  },
  // fr_FR
  {
    name: 'LaCaille et Fils',
    languageId: 'fr_FR',
    countryCode: 'FR',
    currency: {
      code: 'EUR',
      decimalCode: 2
    },
    company: {
      name: 'LaCaille et Fils',
      address: '26, rue des lieutemants Thomazo',
      zipCode: '21000',
      city: 'Dijon',
      province: 'Côte-d\'Or',
      countryCode: 'FR',
      fiscalCode: '987654321',
      departMent: 'SOME DEPARTMENT',
      sirenNumber: 'SOME SIREN NUMBER',
      logo: 'img/lacaille-logo.jpg'
    },
    policy: {
      id: '12345',
      expirationDate: '2022-01-01',
      credit: {
        limit: 5000000,
        left: 3000000,
        available: 2000000
      }
    },
    beneficiaries: [
      {
        name: 'Xarles Beaulé S.A.',
        address: '42, Chemin Du Lavarin Sud',
        zipCode: '62100',
        city: 'CALAIS',
        province: 'Pas-De-Calais',
        countryCode: 'FR',
        fiscalCode: '600000001'
      },
      {
        name: 'Éric Martel et Fils',
        address: '55, rue Gustave Eiffel',
        zipCode: '69140',
        city: 'RILLIEUX-LA-PAPE',
        province: 'Rhône',
        countryCode: 'FR',
        fiscalCode: '600000002'
      },
      {
        name: 'Fusberta Laramée',
        address: '20, rue du Faubourg National',
        zipCode: '57100',
        city: 'THIONVILLE',
        province: 'Moselle (sous-préfecture)',
        countryCode: 'FR',
        fiscalCode: '600000003'
      }
    ],
    bond: {
      class: 'Contract',
      code: 'A',
      revolving: false,
      types: [
        {
          name: 'Advance Payment',
          code: 'A1',
          risks: [
            {
              name: 'MARCHE/Sous-traitant',
              code: 'MARC/ST'
            }
          ]
        },
        {
          name: 'Performance',
          code: 'A2',
          risks: [
            {
              name: 'ARCHITECTEURS ASSISTANCE',
              code: 'AA'
            },
            {
              name: 'EXPLOITANTS DE CARRIERE',
              code: 'CARR'
            },
            {
              name: 'CONSTRUCTEURS MAISONS',
              code: 'CMI'
            },
            {
              name: 'PROTECTION DE L\'ENVIRONNEMENT (ICPA)',
              code: 'ICPA'
            },
            {
              name: 'PROTECTION DE L\'ENVIRONNEMENT (ICPE)',
              code: 'ICPE'
            },
            {
              name: 'PRIMEURS',
              code: 'PRIM'
            },
            {
              name: 'PRIMEURS (ACP)',
              code: 'PRIM/ACP'
            },
            {
              name: 'TRANSPORT DE DECHET TRANSFRONTALIER',
              code: 'DECH'
            },
            {
              name: 'PROTECTION DE L\'ENVIRONNEMENT (UNIA)',
              code: 'UNIA'
            },
            {
              name: 'PROTECTION DE L\'ENVIRONNEMENT (UNIP)',
              code: 'UNIP'
            }
          ]
        },
        {
          name: 'Maintenance/Retention',
          code: 'A3',
          risks: [
            {
              name: 'MARCHE',
              code: 'MARC'
            },
            {
              name: 'MARCHE/Retenu de guarantie',
              code: 'MARC/RG'
            }
          ]
        },
        {
          name: 'Combination',
          code: 'A4',
          risks: [
            {
              name: 'MARCHE/Acompte Bonne fin',
              code: 'MARC/ABF'
            }
          ]
        },
        {
          name: 'Bid/Tender ',
          code: 'A5',
          risks: [
            {
              name: 'MARCHE/Soumission',
              code: 'MARC/SOUM'
            }
          ]
        }
      ]
    }
  },
  // es_ES
  {
    name: 'Pedro Caballero',
    languageId: 'es_ES',
    countryCode: 'ES',
    currency: {
      code: 'EUR',
      decimalCode: 2
    },
    company: {
      name: 'Construto Moderno S.A.',
      address: 'Escuadro, 80',
      zipCode: '47130',
      city: 'Simancas',
      province: 'Valladolid',
      countryCode: 'ES',
      fiscalCode: 'A22334478',
      logo: 'img/construto-logo.jpg'
    },
    policy: {
      id: '234567',
      expirationDate: '2022-01-01',
      credit: {
        limit: 15000000,
        left: 7500000,
        available: 7500000
      }
    },
    beneficiaries: [
      {
        name: 'Carlos Constrution S.A.',
        address: 'Rua da Rapina, 63',
        zipCode: '37484',
        city: 'Gallegos de Argañán',
        province: 'Salamanca',
        countryCode: 'ES',
        fiscalCode: 'A87654321'
      },
      {
        name: 'Felipe Gonzales',
        address: 'C/ Los Herrán, 72',
        zipCode: '6800',
        city: 'Mérida',
        province: 'Badajoz',
        countryCode: 'ES',
        fiscalCode: 'B12345678'
      },
      {
        name: 'Cortez S.A.',
        address: 'C/ Cuevas de Ambrosio, 61',
        zipCode: '23630',
        city: 'Villatorres',
        province: 'Jaen',
        countryCode: 'ES',
        fiscalCode: 'A12345678'
      }
    ],
    bond: {
      class: 'Contract',
      code: 'A',
      revolving: false,
      types: [
        {
          name: 'Advance Payment',
          code: 'A1',
          risks: [
            {
              name: 'CONTRATOS PÚBLICOS - Complementarias',
              code: '4113-3'
            },
            {
              name: 'CONTRATOS PRIVADOS - Garantías complementarias',
              code: '4159-3'
            }
          ]
        },
        {
          name: 'Performance',
          code: 'A2',
          risks: [
            {
              name: 'CONTRATOS PÚBLICOS - Definitivas',
              code: '4113-2'
            },
            {
              name: 'COMERCIO EXTERIOR - Garantía Definitiva',
              code: '4139-2'
            },
            {
              name: 'CONTRATOS PRIVADOS - Garantías definitivas',
              code: '4159-2'
            }
          ]
        },
        {
          name: 'Bid/Tender',
          code: 'A5',
          risks: [
            {
              name: 'CONTRATOS PÚBLICOS - Provisionales',
              code: '4113-1'
            },
            {
              name: 'COMERCIO EXTERIOR - Garantía Provisional',
              code: '4139-1'
            },
            {
              name: 'CONTRATOS PRIVADOS - Garantías provisionales',
              code: '4159-1'
            }
          ]
        }
      ]
    }
  },
  // it_IT
  {
    name: 'Mario Rossi',
    languageId: 'it_IT',
    countryCode: 'IT',
    currency: {
      code: 'EUR',
      decimalCode: 2
    },
    company: {
      name: 'Rossi Costruzioni s.a.s.',
      address: 'Via Antonio Cecchi, 111',
      zipCode: '30123',
      city: 'Venezia',
      province: 'VE',
      countryCode: 'IT',
      fiscalCode: 'IT02565814715',
      logo: 'img/rossi-logo.jpg'
    },
    beneficiaries: [
      {
        name: 'Vittorio Bruno e figli',
        address: 'Via Loreto, 68',
        zipCode: '63025',
        city: 'Magliano Di Tenna',
        province: 'AP',
        countryCode: 'IT',
        fiscalCode: 'IT0123456789'
      },
      {
        name: 'Rossi Costruzioni S.r.L.',
        address: 'Via Santa Teresa, 141',
        zipCode: '53040',
        city: 'Serre Di Rapolano',
        province: 'SI',
        countryCode: 'IT',
        fiscalCode: 'IT9876543210'
      }
    ],
    bond: {
      class: 'Contract',
      code: 'A',
      revolving: false,
      types: [
        {
          name: 'Advance Payment',
          code: 'A1',
          risks: [
            {
              name: 'Antic AA.PP Fornit. con Def. altra Compagnia',
              code: '171'
            },
            {
              name: 'Antic AA.PP Servizi con Def. altra Compagnia',
              code: '172'
            },
            {
              name: 'Anticip.prez. Appalto Costr. (beneficiaro privato)',
              code: '210'
            },
            {
              name: 'Ant. Prez. Appalto Costr. EE. (advance payment)',
              code: '310'
            },
            {
              name: 'Ant. Prez. Appalto Forn. EE. (advance payment)',
              code: '311'
            },
            {
              name: 'Ant. Prez. Appalto Serv. EE. (advance payment)',
              code: '312'
            }
          ]
        },
        {
          name: 'Performance',
          code: 'A2',
          risks: [
            {
              name: 'Definitiva AA.PP Costruzioni',
              code: '4'
            },
            {
              name: 'Definitiva AA.PP Forniture',
              code: '5'
            },
            {
              name: 'Definitiva AA.PP Servizi',
              code: '6'
            }
          ]
        },
        {
          name: 'Maintenance/Retention',
          code: 'A3',
          risks: [
            {
              name: 'Svinc. Rit. AA.PP Fornitura/Definitiva Atradius',
              code: '8'
            },
            {
              name: 'Svinc. Rit. AA.PP Serviz/Definitiva Atradius',
              code: '9'
            },
            {
              name: 'Buon Funzionamento (AA.PP)',
              code: '13'
            }
          ]
        },
        {
          name: 'Bid/Tender',
          code: 'A5',
          risks: [
            {
              name: 'Provvisoria AA.PP Costruzioni',
              code: '1'
            },
            {
              name: 'Provvisoria AA.PP Furniture',
              code: '2'
            },
            {
              name: 'Provvisoria AA.PP Servizi',
              code: '3'
            },
            {
              name: 'Provv. Apalto costr. Estero (Bid Bond)',
              code: '301'
            },
            {
              name: 'Provv. Apalto Fornit.Estero (Bid Bond)',
              code: '302'
            },
            {
              name: 'Provv. Apalto Serv. Estero (Bid Bond)',
              code: '303'
            }
          ]
        },
        {
          name: 'Other Contract Bonds',
          code: 'A6',
          risks: [
            {
              name: 'Preliminari Vendita di Immoblli (cd. Vendta sulla Carta)',
              code: '77'
            },
            {
              name: 'Locazione Abitatva (Sost. Deposito Cauz.le)',
              code: '78'
            },
            {
              name: 'Locazione Commerciale (Sost. Deposito Cauz.le)',
              code: '99'
            }
          ]
        }
      ]
    }
  }
];

class UsersService {
  constructor($cookies, $q) {
    this.$cookies = $cookies;
    this.$q = $q;
    this.init();
  }

  init() {
    this.switchUser(this.$cookies.get('atr-language'));
  }

  getUsers() {
    const deferred = this.$q.defer();
    deferred.resolve(users);
    return deferred.promise;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  switchUser(languageId) {
    this.currentUser = null;

    users.forEach((user) => {
      if (user.languageId === languageId) {
        this.currentUser = user;
      }
    });

    if (this.currentUser === null) {
      console.error(`Could not find user with languageId ${languageId}`);
    }
  }

  addBeneficiary(beneficiary) {
    this.currentUser.beneficiaries.push(beneficiary);
  }
}

export default UsersService;
